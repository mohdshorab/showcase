export interface Personal {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  yearsOfExperience: string;
}

export interface About {
  summary: string;
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Skills {
  [key: string]: SkillGroup;
}

export interface ExperienceProject {
  id: string;
  name: string;
  type: string;
  tech: string[];
  points: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  location: string;
  duration: string;
  techStack: string[];
  projects: ExperienceProject[];
}

export interface Achievement {
  id: string;
  metric: string;
  label: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  type: "client" | "personal";
  github: string;
  live: string;
}

export interface Projects {
  client: Project[];
  personal: Project[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface Contact {
  heading: string;
  subheading: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface Meta {
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  ogImage: string;
  twitterHandle: string;
  resumeFile: string;
}

export interface Additional {
  isAvaialable: boolean;
}

export interface PortfolioData {
  personal: Personal;
  about: About;
  additional: Additional;
  skills: Skills;
  experience: Experience[];
  achievements: Achievement[];
  projects: Projects;
  education: Education[];
  certifications: Certification[];
  contact: Contact;
  meta: Meta;
}

export interface RootPortfolio {
  portfolio: PortfolioData;
}
