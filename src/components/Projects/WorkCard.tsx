import type React from "react";
import type { Project } from "../../types/portfolio";

type WorkCardProps = {
  project: Project;
};

const WorkCard: React.FC<WorkCardProps> = ({ project }) => {
  return (
    <div
      className="group flex flex-row glass-card px-4 py-6 gap-4 items-stretch
      backdrop-blur-md overflow-hidden justify-between
      hover:border-glass-border-green h-full
      hover:-translate-y-1.5 hover:cursor-pointer 
      hover:shadow-glow-green-subtle transition-all ease duration-300"
    >
      <div className="flex flex-col gap-4 h-full flex-1">
        <div className="flex flex-wrap gap-4 items-center">
          {/* Stack */}
          {project?.technologies.map((tech) => (
            <span
              key={tech}
              className="text-center text-text-body border border-glass-border rounded-xl py-1 px-3 text-xs font-semibold uppercase tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Project Title  */}
        <h2 className="font-display text-[clamp(1.5rem,2vw,2.5rem)] font-medium tracking-tight text-text-primary">
          {project?.title}
        </h2>
        {/* Description */}
        <p className="text-xl text-text-secondary font-medium tracking-tight leading-tight text-wrap max-w-200">
          {project?.description}
        </p>
        {/* metrics */}
        <div className="flex flex-row gap-4 mt-auto">
          {project?.metrics?.map((metric) => (
            <div
              key={metric.label}
              className="p-6 text-center flex flex-col border border-glass-border rounded-2xl"
            >
              <span className="font-display font-bold text-4xl mb-1 text-accent-green group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-shadow ease duration-300">
                {metric?.value}
              </span>
              <span className="text-text-ghost font-semibold text-xs tracking-wide">
                {metric?.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      {project?.icon ? (
        <img
          src={project?.icon}
          alt={project?.title}
          className="rounded-lg max-h-48 max-w-48 object-cover self-center"
        />
      ) : null}
    </div>
  );
};
export default WorkCard;
