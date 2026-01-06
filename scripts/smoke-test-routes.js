const http = require('http');

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
  '/security/disclosure'
];

async function checkRoute(route) {
  return new Promise((resolve) => {
    http.get(`${BASE_URL}${route}`, (res) => {
      if (res.statusCode === 200) {
        console.log(`✅ ${route} - 200 OK`);
        resolve(true);
      } else {
        console.error(`❌ ${route} - ${res.statusCode}`);
        resolve(false);
      }
    }).on('error', (e) => {
      console.error(`❌ ${route} - Connection Failed: ${e.message}`);
      resolve(false);
    });
  });
}

async function run() {
  console.log(`Checking routes on ${BASE_URL}...`);
  // Simple wait for server if needed, or assume it's running
  
  let failures = 0;
  for (const route of ROUTES) {
    const success = await checkRoute(route);
    if (!success) failures++;
  }

  if (failures > 0) {
    console.error(`\nFAILED: ${failures} routes failed smoke test.`);
    process.exit(1);
  } else {
    console.log('\nPASSED: All critical routes accessible.');
    process.exit(0);
  }
}

run();
