export interface IEstimatorInput {
  projectType: string;
  industry: string;
  features: string[];
  designStatus: string;
  timeline: string;
  budget: string;
  description: string;
  referenceUrl?: string;
}

export interface IEstimatorResult {
  summary: string;
  scope: string;
  tech_stack: {
    frontend: string[];
    backend: string[];
    database: string[];
    cloud: string[];
    other: string[];
  };
  features: Array<{
    name: string;
    complexity: 'low' | 'medium' | 'high';
    estimated_hours: number;
  }>;
  team: Array<{
    role: string;
    level: string;
    count: number;
  }>;
  timeline: {
    total_weeks_low: number;
    total_weeks_high: number;
    phases: Array<{
      name: string;
      weeks_low: number;
      weeks_high: number;
    }>;
  };
  cost: {
    low: number;
    high: number;
    currency: string;
    breakdown: {
      design: { low: number; high: number };
      development: { low: number; high: number };
      qa_testing: { low: number; high: number };
      pm_overhead: { low: number; high: number };
    };
  };
  similar_project: string | null;
  similar_project_demo: string | null;
  risks: string[];
  recommendation: string;
}

export interface ILeadData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
}
