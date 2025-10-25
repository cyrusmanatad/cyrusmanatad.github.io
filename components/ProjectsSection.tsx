
import React from 'react';
import Section from './Section';
import { projectsData } from '../constants';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg bg-navy-light transform hover:-translate-y-2 transition-transform duration-300">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-navy-lighter text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
        ))}
      </div>
    </div>
     <div className="absolute inset-0 bg-navy bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <a target={project.url === "#" ? "_self" : "_blank"} href={project.url === "#" ? "#" : project.url} className="border-2 border-accent text-accent font-semibold py-2 px-4 rounded-md hover:bg-accent hover:text-white transition-all duration-300">
        {project.url === "#" ? "View Project" : "Visit Site"}
      </a>
    </div>
  </div>
);

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
