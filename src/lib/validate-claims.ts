import { z } from 'zod';
import * as fs from 'node:fs';
import * as path from 'node:path';

// Define the Schema matching the Red Team requirements
const ClaimSchema = z.object({
  id: z.string(),
  claim: z.string(),
  metric_key: z.string().optional(),
  value: z.number().optional(),
  unit: z.string().optional(),
  display_value: z.string().optional(),
  scope: z.array(z.string()),
  source_url: z.string().url(),
  notes: z.string().optional(),
  risk_level: z.enum(['low', 'medium', 'high']),
});

const RegistrySchema = z.array(ClaimSchema);

const claimsPath = path.join(process.cwd(), 'src', 'content', 'claims.json');
console.log(`Validating claims registry at: ${claimsPath}`);

try {
  const raw = fs.readFileSync(claimsPath, 'utf-8');
  const data = JSON.parse(raw);
  
  // Validate Schema
  const result = RegistrySchema.safeParse(data);
  
  if (!result.success) {
      console.error('❌ Claims Registry Validation FAILED');
      console.error(JSON.stringify(result.error.format(), null, 2));
      process.exit(1);
  }

  console.log(`✅ Claims Registry Valid (${data.length} claims)`);
  process.exit(0);

} catch (err) {
  console.error('❌ Failed to read or parse claims.json', err);
  process.exit(1);
}
