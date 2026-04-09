/* eslint-disable @typescript-eslint/no-require-imports */
import http from 'node:http';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const ROUTES = [
  '/',
  '/developers',
  '/security',
  '/products',
  '/services',
  '/methodology',
  '/roadmap',
  '/contact',
  '/security/disclosure',
  '/products.json'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? require('node:https') : require('node:http');
    protocol.get(url, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        resolve(true);
      } else {
        console.error(`❌ ${url} - ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (e) => {
      console.error(`❌ ${url} - Connection Failed: ${e.message}`);
      resolve(false);
    });
  });
}

async function validateProducts(baseUrl) {
  console.log('Validating products.json content...');
  try {
    const response = await new Promise((resolve, reject) => {
      http.get(`${baseUrl}/products.json`, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data)));
      }).on('error', reject);
    });

    let productFailures = 0;
    for (const product of response) {
      console.log(`  Checking product: ${product.name}`);
      
      // Check Docs URL
      if (product.docs_url) {
        const ok = await checkUrl(product.docs_url);
        if (!ok) productFailures++;
      }

      // Check Repo URLs
      if (product.repos) {
        for (const repo of product.repos) {
          const ok = await checkUrl(repo.url);
          if (!ok) productFailures++;
        }
      }
    }
    return productFailures;
  } catch (e) {
    console.error(`❌ Failed to parse or fetch products.json: ${e.message}`);
    return 1;
  }
}

console.log(`Checking routes on ${BASE_URL}...`);

let failures = 0;
for (const route of ROUTES) {
  const success = await checkRoute(route);
  if (!success) failures++;
}

failures += await validateProducts(BASE_URL);

if (failures > 0) {
  console.error(`\nFAILED: ${failures} routes failed smoke test.`);
  process.exit(1);
} else {
  console.log('\nPASSED: All critical routes accessible.');
  process.exit(0);
}
