
import React from 'react';
import { projectsData } from '../constants';
import { Project } from '../types';
import ProjectCardGrid, { ProjectCardV2 } from './ProjectCardGrid';

interface ProjectsSectionProps {
  className?: string;
}

/* Prefer a short name for the banner: SAMS, CMS, or the bit before a dash. */
const bannerLabel = (title: string) => {
  const withParen = title.match(/^([^(]+?)\s*\(([^)]+)\)/);
  if (withParen) {
    const before = withParen[1].trim();
    const inside = withParen[2].trim();
    if (before.length <= 12) return before;
    if (inside.length <= 12) return inside;
  }
  if (title.includes(' - ')) return title.split(' - ')[0];
  return title.replace(/\s+Application$/i, '').trim();
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const hasLink = project.url !== '#';
  const label = bannerLabel(project.title);

  return (
    <article className="flex flex-col overflow-hidden rounded-[1.75rem] bg-[#112240] shadow-[0_10px_28px_rgba(17,23,22,0.12)]">
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.imageUrl}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full origin-top scale-150 object-cover object-top blur-2xl brightness-110 saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-[#112240]/70" />
        <p
          aria-hidden="true"
          className="relative z-10 flex h-full items-center justify-center px-5 text-center text-[1.65rem] font-semibold leading-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.7),0_8px_24px_rgba(0,0,0,0.45)]"
        >
          {label}
        </p>
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
        <h3 className="mb-2 text-[1.05rem] font-semibold leading-snug text-white">{project.title}</h3>
        <p className="mb-4 text-sm leading-[1.7] text-[#a8b2d1]">{project.description}</p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[#0a192f] px-2.5 py-1 text-[0.7rem] text-[#8892b0]"
            >
              {tech}
            </span>
          ))}
        </div>
        {hasLink && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-auto w-fit rounded-md border border-accent px-3.5 py-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent hover:text-white"
          >
            Visit site
          </a>
        )}
      </div>
    </article>
  );
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className = '' }) => {
  return (
    <section id="projects" className={`min-w-0 scroll-mt-[4.5rem] fade-in-up ${className}`}>
      <div className="mb-5 flex items-baseline gap-2 border-b border-line-soft pb-3">
        <span className="text-accent-ink text-base font-semibold leading-none">#</span>
        <h2 className="text-[0.9375rem] font-semibold uppercase tracking-[0.14em] text-ink">Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projectsData.map((project, index) => (
          // <ProjectCard key={index} project={project} />
          <ProjectCardV2 key={project.title} image={project.imageUrl} {...project} />
        ))}
      {/* <ProjectCardGrid data={projectsData} /> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
