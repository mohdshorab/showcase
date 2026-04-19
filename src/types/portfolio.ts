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

export interface PortfolioData {
  personal: Personal;
  stats: Stats[];
}

export interface RootPortfolio {
  portfolio: PortfolioData;
}
