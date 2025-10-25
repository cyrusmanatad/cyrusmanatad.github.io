
import React from 'react';
import Section from './Section';
import { experienceData } from '../constants';
import { Experience } from '../types';

interface TimelineItemProps {
  experience: Experience;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience }) => (
  <div className="mb-10 ml-6">
    <span className="absolute flex items-center justify-center w-6 h-6 bg-accent rounded-full -left-3 ring-8 ring-navy-light">
      <svg className="w-3 h-3 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
        <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
      </svg>
    </span>
    <div className="bg-navy-light p-6 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center mb-4">
        <h3 className="mb-1 text-xl font-semibold text-white">
          {experience.role} 
        </h3>
        <span className="text-accent ml-2 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full bg-blue-900 border border-blue-400">
          {experience.company}
        </span>
      </div>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{experience.period}</time>
      <p className="mb-4 text-base font-normal text-gray-400">{experience.description}</p>
      <div>
        {experience.responsibilities && (
          <div className="mb-4">
            <h4 className="text-md font-semibold text-white mb-2">Key Responsibilities:</h4>
            <ul className="list-disc list-outside pl-4 py-2 text-gray-400">
              {experience.responsibilities.map((item :string , index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span key={tech} className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceSection: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative border-l border-gray-700 max-w-3xl mx-auto">
        {experienceData.map((exp, index) => (
          <TimelineItem key={index} experience={exp} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
