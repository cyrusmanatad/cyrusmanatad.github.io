import React from 'react';
import { projectsData } from '../constants';
import Section from './Section';
import { ProjectCardV2 } from './ProjectCardGrid';

const ProjectsSection: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCardV2
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.technologies}
            href={project.url}
            image={project.imageUrl}
          />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
