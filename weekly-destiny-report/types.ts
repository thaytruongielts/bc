export interface WeeklyReportData {
  name: string;
  dateRange: string;
  successes: string[];
  improvements: string[];
  commitments: string[];
}

export type SectionType = 'successes' | 'improvements' | 'commitments';

export interface SectionConfig {
  id: SectionType;
  title: string;
  placeholder: string;
  iconColor: string;
  bgColor: string;
}