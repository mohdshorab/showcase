import type React from "react";
import { motion } from "motion/react"
import type { Personal } from "../../types/portfolio";
import { fadeUp, stagger } from "../../utils/variants";

const DEFAULT_TAGLINE = "Building scalable systems for *millions*.";

type HeroProps = {
  data: Personal | null | undefined;
};

const Hero: React.FC<HeroProps> = ({ data }) => {
  const name = data?.name || "Mohd Shorab";
  const subtitle = data?.subtitle || "Full Stack";
  const title = data?.title || "Engineer";
  const tagline = data?.tagline || DEFAULT_TAGLINE;
  const isAvailable = data?.isAvailable ?? true;

  return (
    <section className="relative justify-center min-h-screen max-w-portfolio mx-auto px-12 pt-28 pb-24 z-0">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-8"
      >
        {isAvailable && (
          <motion.div
            variants={fadeUp}
            className="border border-glass-border-cyan rounded-full flex gap-4 items-center px-4 py-2 bg-accent-cyan-dim w-fit"
          >
            <div className="shadow-glow-green-dot h-2 w-2 bg-accent-green rounded-full" />
            <span className="text-text-body text-xs">
              Available for new roles - Delhi NCR
            </span>
          </motion.div>
        )}

        <motion.h1
          variants={fadeUp}
          className="text-[clamp(3.5rem,8vw,7rem)] font-display font-semibold text-white tracking-tighter leading-[0.9] w-fit"
        >
          <span className="block text-text-primary">{name}</span>
          <span className="w-fit block text-gradient-accent">{subtitle}</span>
          <span className="block text-accent-green-dim">{title}.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl font-medium text-text-body/90 leading-relaxed max-w-140 text-balance"
        >
          {tagline.split("*").map((section, i) =>
            i % 2 === 1 ? (
              <span key={i} className="text-white font-bold tracking-tight">
                {section}
              </span>
            ) : (
              section
            ),
          )}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-row gap-4 items-center"
        >
          <a
            className="bg-none bg-accent-green shadow-glow-green text-black font-semibold text-sm tracking-wide px-4 py-2 rounded-full hover:-translate-y-1 hover:shadow-glow-green-strong transition-all duration-300"
            href="#work"
          >
            See my work
          </a>
          <a
            className="border bg-none border-glass-border text-white font-medium text-sm tracking-wide px-4 py-2 rounded-full hover:border-glass-border-hover hover:bg-glass-border-cyan transition-colors duration-200 active:scale-95"
            href="#contact"
          >
            Lets talk
          </a>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
          <span className="text-xs uppercase tracking-widest text-text-secondary">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-linear-to-b from-accent-green to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
