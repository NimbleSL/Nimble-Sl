export type TTheme = 'dark' | 'light';
export type TButtonVariant = 'primary' | 'emerald' | 'ghost' | 'outline';
export type TTagVariant = 'blue' | 'cyan' | 'emerald' | 'purple' | 'amber' | 'rose';
export type TComplexity = 'low' | 'medium' | 'high';

export interface IMetric {
  value: string;
  label: string;
  sub?: string;
  accent?: string;
}

export interface ISEO {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
