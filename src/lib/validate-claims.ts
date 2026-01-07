import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

// Define the schema using Zod for strict validation
const ClaimSchema = z.object({
  id: z.string(),
  claim: z.string().min(10, "Claim is too short to be meaningful"),
  // Status check: must be live, beta, or planned
  // If undefined, default to live (implicit legacy) but we want explicit
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

// For array validation
const ClaimsListSchema = z.array(ClaimSchema);

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
    
    // Additional Logic Checks
    const claims = result.data;
    const errors: string[] = [];

    claims.forEach((c) => {
      // Rule 1: Live performance metrics MUST have a source
      if (c.status === 'live' && c.metric_key && !c.source_url && !c.notes?.includes('Localhost')) {
         errors.push(`[${c.id}] Live metric missing source_url or explanations in notes`);
      }

      // Rule 2: Claims about "Stream" or "WebSocket" must not be live in v1.1
      if (c.status === 'live' && (c.claim.toLowerCase().includes('websocket') || c.claim.toLowerCase().includes('streaming'))) {
         errors.push(`[${c.id}] v1.1 Constraint: WebSocket/Streaming claims must be 'beta' or 'planned', not 'live'`);
      }
    });

    if (errors.length > 0) {
      console.error('❌ Business Logic Failures:');
      errors.forEach(e => console.error(`  - ${e}`));
      process.exit(1);
    }

    console.log('✅ Claims validated successfully.');
    process.exit(0);

  } catch (e) {
    console.error('❌ Failed to parse or validate claims.json', e);
    process.exit(1);
  }
}

validate();
