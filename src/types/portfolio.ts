export interface Personal {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  isAvailable: boolean;
}
export interface Stats {
  nums: string;
  label: string;
}

export interface ProjectLinks {
  appStore?: string;
  playStore?: string;
  web?: string;
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: Metric[];
  links?: ProjectLinks;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Projects {
  client: Project[];
}

export interface PortfolioData {
  personal: Personal;
  stats: Stats[];
  projects: Projects;
}

export interface RootPortfolio {
  portfolio: PortfolioData;
}
