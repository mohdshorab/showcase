import type React from "react";
import type { Stats } from "../../types/portfolio";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../../utils/variants";

type StatsProps = {
  data: Stats[] | undefined;
};

const StatsBar: React.FC<StatsProps> = ({ data }) => {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-portfolio mx-auto px-12 mb-20"
    >
      <div className="glass-card grid grid-cols-2 md:grid-cols-4">
        {data?.map((item) => (
          <motion.div
            variants={fadeUp}
            key={item.label}
            className="p-8 text-center flex flex-col border-r border-glass-border-subtle last:border-r-0 hover:bg-glass transition-colors duration-300 ease-out"
          >
            <span className="font-display font-bold text-4xl mb-1 text-accent-green">
              {item?.nums}
            </span>
            <span className="text-text-ghost font-semibold text-xs tracking-wide">
              {item?.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
export default StatsBar;
