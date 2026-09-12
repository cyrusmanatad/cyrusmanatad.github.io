
import React from 'react';
import Section from './Section';
import { projectsData } from '../constants';
import { Project } from '../types';

interface ProjectsSectionProps {
  className?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const hasLink = project.url !== '#';

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg bg-navy-lighter/40 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-navy-lighter/70">
      <div className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1.5 text-base font-bold text-gray-100">{project.title}</h3>
        <p className="mb-3 flex-1 text-sm leading-relaxed text-gray-400">{project.description}</p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-navy px-2 py-0.5 text-xs text-gray-400">{tech}</span>
          ))}
        </div>
        {hasLink && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-md border border-accent px-3 py-1.5 text-xs font-semibold text-accent transition-colors duration-300 hover:bg-accent hover:text-white"
          >
            Visit Site
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className = '' }) => {
  return (
    <Section id="projects" title="Projects" className={className}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
