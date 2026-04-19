import type React from "react";
import type { Stats } from "../../types/portfolio";
import { motion, cubicBezier } from "framer-motion";

type StatsProps = {
  data: Stats[] | undefined;
};

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) },
  },
};

const StatsBar: React.FC<StatsProps> = ({ data }) => {
  return (
    <section className="max-w-portfolio mx-auto px-12 pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-4 border border-glass-border-subtle rounded-xl bg-glass/70 backdrop-blur-md overflow-hidden"
      >
        {data?.map((item) => (
          <motion.div
            variants={child}
            key={item.label}
            className="p-8 text-center flex flex-col border-r border-glass-border-subtle last:border-r-0 hover:bg-glass transition-colors duration-300 ease-out"
          >
            <span className="font-display font-bold text-4xl mb-1">
              {item?.nums}
            </span>
            <span className="text-text-ghost font-semibold text-xs tracking-wide">
              {item?.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default StatsBar;
