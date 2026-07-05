export interface Source {
  label: string;
  url: string;
}

export interface Milestone {
  id: string;
  title: string;
  sources: Source[];
}

export interface Phase {
  phase: number;
  title: string;
  milestones: Milestone[];
}
