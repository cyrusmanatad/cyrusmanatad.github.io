
import React from 'react';
import Section from './Section';
import { experienceData } from '../constants';
import { Experience } from '../types';

interface ExperienceSectionProps {
  className?: string;
}

const TimelineItem: React.FC<{ experience: Experience }> = ({ experience }) => (
  <div className="relative mb-5 ml-6 last:mb-0">
    <span className="absolute -left-[1.9rem] top-2 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-navy-light" />
    <div className="rounded-lg bg-navy-lighter/40 p-4">
      <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
        <h3 className="text-base font-semibold text-white">{experience.role}</h3>
        <span className="rounded-full border border-blue-400/60 bg-blue-900/50 px-2.5 py-0.5 text-xs text-gray-300">
          {experience.company}
        </span>
        <time className="text-xs text-gray-500">{experience.period}</time>
      </div>
      <p className="mb-3 text-sm leading-relaxed text-gray-400">{experience.description}</p>
      {experience.responsibilities && (
        <details className="group mb-3">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
            <svg
              className="h-3 w-3 transition-transform duration-200 group-open:rotate-90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            Key Responsibilities
          </summary>
          <ul className="mt-2 list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-400">
            {experience.responsibilities.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </details>
      )}
      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <span key={tech} className="rounded bg-gray-700/70 px-2 py-0.5 text-xs text-gray-300">{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ className = '' }) => {
  return (
    <Section id="experience" title="Work Experience" className={className}>
      <div className="border-l border-gray-700">
        {experienceData.map((exp, index) => (
          <TimelineItem key={index} experience={exp} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
