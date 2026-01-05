import claims from '../content/claims.json';

export type Claim = {
  id: string;
  claim: string;
  metric_key?: string;
  value?: number;
  unit?: string;
  display_value?: string;
  scope: string[];
  source_url: string;
  notes?: string;
  risk_level: 'low' | 'medium' | 'high';
};

export function getClaimsByScope(scope: string): Claim[] {
  return (claims as Claim[]).filter(c => c.scope.includes(scope));
}
