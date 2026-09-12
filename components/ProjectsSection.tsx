
import React from 'react';
import Section from './Section';
import { projectsData } from '../constants';
import { Project } from '../types';

interface ProjectsSectionProps {
  className?: string;
}

const ProjectRow: React.FC<{ project: Project }> = ({ project }) => {
  const hasLink = project.url !== '#';

  return (
    <div className="group flex gap-2.5 rounded-md bg-navy-lighter/40 p-2 transition-colors duration-300 hover:bg-navy-lighter/80">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="h-14 w-20 shrink-0 rounded object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[0.7rem] font-bold text-gray-100">{project.title}</h3>
          {hasLink && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded border border-accent px-1.5 py-px text-[0.6rem] font-semibold text-accent transition-colors duration-300 hover:bg-accent hover:text-white"
            >
              Visit Site
            </a>
          )}
        </div>
        <p className="mb-1 text-[0.65rem] leading-snug text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-navy px-1.5 py-px text-[0.6rem] text-gray-400">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className = '' }) => {
  return (
    <Section id="projects" title="Projects" className={className} scroll>
      <div className="space-y-1.5">
        {projectsData.map((project, index) => (
          <ProjectRow key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
