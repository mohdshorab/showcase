import type React from "react";
import Hero from "../components/Hero/Hero";
import usePortfolio from "../hooks/usePortfolio";

const Home: React.FC = () => {
  const { data, status, error } = usePortfolio();
  if (!data) return null;

  return (
    <>
      <Hero data={data?.personal} />
    </>
  );
};
export default Home;
