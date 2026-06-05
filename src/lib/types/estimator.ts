export type IRegion = 'local' | 'midtier' | 'international';

export interface IEstimatorInput {
  projectTypes: string[];
  industry: string;
  features: string[];
  designStatus: string;
  scale: string;
  integration: string;
  timeline: string;
  description?: string;
  referenceUrl?: string;
  region?: IRegion;
}

export interface IModule {
  name: string;
  description: string;
  mandays: { low: number; high: number };
  teamComposition: Record<string, number>;
  complexity: 'low' | 'medium' | 'high';
  costRange: { low: number; high: number };
}

export interface IPhase {
  name: string;
  modules: string[];
  timeline: string;
  mandaysPercent: number;
  costRange: { low: number; high: number };
}

export interface ITechStack {
  frontend: string[];
  backend: string[];
  database: string[];
  cloud: string[];
  other: string[];
}

/** Raw AI response — effort only, no pricing */
export interface IAIEffortResponse {
  projectSummary: string;
  scope: string;
  modules: Array<Omit<IModule, 'costRange'>>;
  totalMandays: { low: number; high: number };
  suggestedTimeline: string;
  teamSize: string;
  phases: Array<Omit<IPhase, 'costRange'>>;
  riskFactors: string[];
  recommendations: string[];
  tech_stack: ITechStack;
  similar_project: string | null;
  similar_project_demo: string | null;
}

/** Final result returned to the frontend — effort + computed pricing */
export interface IEstimatorResult {
  projectSummary: string;
  scope: string;
  modules: IModule[];
  totalMandays: { low: number; high: number };
  totalCost: { low: number; high: number; currency: 'USD' };
  suggestedTimeline: string;
  teamSize: string;
  phases: IPhase[];
  riskFactors: string[];
  recommendations: string[];
  tech_stack: ITechStack;
  similar_project: string | null;
  similar_project_demo: string | null;
  region: IRegion;
  fallback: boolean;
}

export interface ILeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
}
