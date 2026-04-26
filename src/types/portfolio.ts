export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  yearsOfExperience: string;
  isAvailable: boolean;
}

export interface AboutHighlight {
  id: string;
  label: string;
  description: string;
  metric: string;
}

export interface About {
  summary: string;
  highlights: string[];
  achievements: AboutHighlight[];
}

export interface Stat {
  label: string;
  nums: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
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
  metrics: ProjectMetric[];
  icon?: string;
  links?: ProjectLinks;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  techStack: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
}

export interface ExpertiseArea {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  about: About;
  stats: Stat[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  expertise: ExpertiseArea[];
}
