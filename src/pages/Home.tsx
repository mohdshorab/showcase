import type React from "react";
import Hero from "../components/Hero/Hero";
import usePortfolio from "../hooks/usePortfolio";
import StatsBar from "../components/Stats/Stats";
import ProjectSection from "../components/Projects/ProjectSection";

const Home: React.FC = () => {
  const { data, status, error } = usePortfolio();
  if (!data) return null;

  return (
    <>
      <main className="bg-grid-lines bg-fixed">
        <div className="pointer-events-none fixed -left-40 w-150 h-80 bg- blur-3xl z-0 bg-[radial-gradient(circle,rgba(0,255,135,0.3),transparent_70%)]" />
        <div
          className="pointer-events-none fixed -bottom-50 -right-50 w-125 h-125 bg-[radial-gradient(circle,rgba(255,255,255,0.2),transparent_70%)] blur-3xl z-0"
        />
        <Hero data={data?.personal} />
        <StatsBar data={data?.stats} />
        <ProjectSection data={data?.projects} />
      </main>
    </>
  );
};
export default Home;
