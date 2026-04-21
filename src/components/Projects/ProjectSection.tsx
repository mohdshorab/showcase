import type { Projects } from "../../types/portfolio";
import { sectionReveal } from "../../utils/variants";
import WorkCard from "./WorkCard";
import { motion } from "framer-motion";

type ProjectProps = {
  data: Projects;
};

const ProjectSection: React.FC<ProjectProps> = ({ data }) => {
  return (
    <motion.section
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-portfolio mx-auto px-12 mb-24"
    >
      <span className="uppercase text-accent-green font-semibold text-xs tracking-widest">
        Selected Work
      </span>
      <h2 className="font-display text-4xl font-bold text-text-primary mb-8">
        Projects that
        <span className="font-medium text-text-secondary tracking-tight">
          {" "}
          shipped.
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {data?.client?.map((project, index: number) => (
          <div
            key={project.title}
            className={`${index == 0 || index % 3 === 0 ? " col-span-1 md:col-span-2" : ""}`}
          >
            <WorkCard project={project} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};
export default ProjectSection;
