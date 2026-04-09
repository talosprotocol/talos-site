import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

// Define the schema using Zod for strict validation
const ClaimSchema = z.object({
  id: z.string(),
  claim: z.string().min(10, "Claim is too short to be meaningful"),
  status: z.enum(['live', 'beta', 'planned']).optional().default('live'),
  
  // Verification
  source_url: z.url({ message: 'Invalid URL' }).optional(),
  metric_key: z.string().optional(),
  
  // Value (for metrics)
  value: z.number().optional(),
  unit: z.string().optional(),
  display_value: z.string().optional(),
  
  // Scope
  scope: z.array(z.string()),
  risk_level: z.enum(['low', 'medium', 'high']).optional(),
  notes: z.string().optional(),
});

const ClaimsListSchema = z.array(ClaimSchema);

// Paths to repo-owned artifacts
const ROOT_DIR = path.join(process.cwd(), '../..');
const ARTIFACTS = {
  gateway: path.join(ROOT_DIR, 'gateway_perf.json'),
  audit: path.join(ROOT_DIR, 'audit_perf.json'),
  ai_gateway: path.join(ROOT_DIR, 'ai_gateway_perf.json'),
  benchmarks_md: path.join(ROOT_DIR, 'docs/testing/benchmarks.md'),
};

function loadArtifacts() {
  const data: Record<string, unknown> = {};
  
  if (fs.existsSync(ARTIFACTS.gateway)) {
    data.gateway = JSON.parse(fs.readFileSync(ARTIFACTS.gateway, 'utf-8'));
  }
  if (fs.existsSync(ARTIFACTS.audit)) {
    data.audit = JSON.parse(fs.readFileSync(ARTIFACTS.audit, 'utf-8'));
  }
  if (fs.existsSync(ARTIFACTS.ai_gateway)) {
    data.ai_gateway = JSON.parse(fs.readFileSync(ARTIFACTS.ai_gateway, 'utf-8'));
  }
  if (fs.existsSync(ARTIFACTS.benchmarks_md)) {
    data.benchmarks_md = fs.readFileSync(ARTIFACTS.benchmarks_md, 'utf-8');
  }
  
  return data;
}

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split('.').reduce((acc, part) => (acc as Record<string, unknown>) && (acc as Record<string, unknown>)[part], obj);
}

function verifyMetric(claim: z.infer<typeof ClaimSchema>, artifacts: Record<string, unknown>): string | null {
  if (!claim.metric_key || claim.status !== 'live' || claim.value === undefined) {
    return null;
  }

  // Check service artifacts
  if (claim.metric_key.startsWith('gateway.')) {
    const val = getNestedValue(artifacts.gateway, 'contracts.' + claim.metric_key.split('.').slice(1).join('.'));
    if (val !== undefined && val !== claim.value) {
      return `Value mismatch for ${claim.id}: claims.json has ${claim.value}, but gateway_perf.json has ${val}`;
    }
    if (val === undefined) return `Metric ${claim.metric_key} not found in gateway_perf.json`;
  } else if (claim.metric_key.startsWith('audit.')) {
    const val = getNestedValue(artifacts.audit, 'contracts.' + claim.metric_key.split('.').slice(1).join('.'));
    if (val !== undefined && val !== claim.value) {
      return `Value mismatch for ${claim.id}: claims.json has ${claim.value}, but audit_perf.json has ${val}`;
    }
    if (val === undefined) return `Metric ${claim.metric_key} not found in audit_perf.json`;
  } else if (claim.metric_key.startsWith('crypto.')) {
    if (!artifacts.benchmarks_md) return `benchmarks.md not found for crypto metric ${claim.id}`;
    
    // Simple regex matching for common crypto metrics in benchmarks.md
    let pattern: RegExp | null = null;
    if (claim.metric_key === 'crypto.verify_ed25519.latency_ms') {
      pattern = /\|\s*\*\*Verification\*\*\s*\|\s*Ed25519\s*\|\s*([\d.]+)\s*ms/;
    } else if (claim.metric_key === 'crypto.ratchet_encrypt.ops_sec') {
      pattern = /\|\s*Session\.encrypt\(35B\)\s*\|\s*[\d.]+\s*\|\s*[\d.]+\s*\|\s*([\d,]+)\s*\|/;
    } else if (claim.metric_key === 'crypto.canonical_json.ops_sec') {
      pattern = /\|\s*canonical_json_bytes\(\)\s*\|\s*[\d.]+\s*\|\s*[\d.]+\s*\|\s*([\d,]+)\s*\|/;
    }
    
    if (pattern) {
      const artifactString = artifacts.benchmarks_md as string;
      const match = artifactString.match(pattern);
      if (match) {
        const artifactVal = parseFloat(match[1].replace(/,/g, ''));
        if (artifactVal !== claim.value) {
          return `Value mismatch for ${claim.id}: claims.json has ${claim.value}, but benchmarks.md has ${artifactVal}`;
        }
      } else {
        return `Metric ${claim.metric_key} pattern not found in benchmarks.md`;
      }
    }
  }

  return null;
}

function validate() {
  const claimsPath = path.join(process.cwd(), 'src/content/claims.json');
  
  if (!fs.existsSync(claimsPath)) {
    console.error(`❌ claims.json not found at ${claimsPath}`);
    process.exit(1);
  }

  try {
    const rawData = fs.readFileSync(claimsPath, 'utf-8');
    const json = JSON.parse(rawData);
    
    const result = ClaimsListSchema.safeParse(json);

    if (!result.success) {
      console.error('❌ Schema Validation Failed:');
      result.error.issues.forEach(err => {
        console.error(`  - Path: ${err.path.join('.')}, Message: ${err.message}`);
      });
      process.exit(1);
    }
    
    const claims = result.data;
    const errors: string[] = [];
    const artifacts = loadArtifacts();

    claims.forEach((c) => {
      // Rule 1: Live performance metrics MUST have a source
      if (c.status === 'live' && c.metric_key && !c.source_url && !c.notes?.includes('Localhost')) {
         errors.push(`[${c.id}] Live metric missing source_url or explanations in notes`);
      }

      // Rule 2: Claims about "Stream" or "WebSocket" must not be live in v1.1
      if (c.status === 'live' && (c.claim.toLowerCase().includes('websocket') || c.claim.toLowerCase().includes('streaming'))) {
         errors.push(`[${c.id}] v1.1 Constraint: WebSocket/Streaming claims must be 'beta' or 'planned', not 'live'`);
      }
      
      // Rule 3: Parity with repo artifacts
      const parityError = verifyMetric(c, artifacts);
      if (parityError) {
        errors.push(parityError);
      }
    });

    if (errors.length > 0) {
      console.error('❌ Validation Failures:');
      errors.forEach(e => console.error(`  - ${e}`));
      process.exit(1);
    }

    console.log('✅ Claims validated successfully against repo artifacts.');
    process.exit(0);

  } catch (e) {
    console.error('❌ Failed to parse or validate claims.json', e);
    process.exit(1);
  }
}

validate();
