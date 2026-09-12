
import React from 'react';
import Section from './Section';
import { experienceData } from '../constants';
import { Experience } from '../types';

interface ExperienceSectionProps {
  className?: string;
}

const TimelineItem: React.FC<{ experience: Experience }> = ({ experience }) => (
  <div className="relative mb-3 ml-4 last:mb-0">
    <span className="absolute -left-[1.4rem] top-1 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-navy-light" />
    <div className="rounded-md bg-navy-lighter/40 p-2.5">
      <div className="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h3 className="text-xs font-semibold text-white">{experience.role}</h3>
        <span className="rounded-full border border-blue-400/60 bg-blue-900/50 px-1.5 py-px text-[0.6rem] text-gray-300">
          {experience.company}
        </span>
        <time className="text-[0.6rem] text-gray-500">{experience.period}</time>
      </div>
      <p className="mb-1.5 text-[0.7rem] leading-snug text-gray-400">{experience.description}</p>
      {experience.responsibilities && (
        <details className="group mb-1.5">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-1 text-[0.65rem] font-semibold text-accent hover:underline">
            <svg
              className="h-2.5 w-2.5 transition-transform duration-200 group-open:rotate-90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            Key Responsibilities
          </summary>
          <ul className="mt-1 list-outside list-disc space-y-0.5 pl-4 text-[0.65rem] leading-snug text-gray-400">
            {experience.responsibilities.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </details>
      )}
      <div className="flex flex-wrap gap-1">
        {experience.technologies.map((tech) => (
          <span key={tech} className="rounded bg-gray-700/70 px-1.5 py-px text-[0.6rem] text-gray-300">{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ className = '' }) => {
  return (
    <Section id="experience" title="Work Experience" className={className} scroll>
      <div className="border-l border-gray-700 pl-1">
        {experienceData.map((exp, index) => (
          <TimelineItem key={index} experience={exp} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
