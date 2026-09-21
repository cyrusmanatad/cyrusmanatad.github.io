
import React from 'react';
import Section from './Section';
import { experienceData } from '../constants';
import { Experience } from '../types';

interface ExperienceSectionProps {
  className?: string;
}

const TimelineItem: React.FC<{ experience: Experience }> = ({ experience }) => (
  <div className="relative mb-7 ml-6 last:mb-0">
    <span className="absolute -left-[1.78rem] top-[0.45rem] h-2.5 w-2.5 rounded-full bg-ink ring-4 ring-surface" />
    <div>
      <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
        <h3 className="text-base font-semibold text-ink">{experience.role}</h3>
        <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-soft">
          {experience.company}
        </span>
        <time className="text-xs uppercase tracking-[0.08em] text-muted">{experience.period}</time>
      </div>
      <p className="mb-3 max-w-[78ch] text-sm leading-[1.7] text-ink-soft">{experience.description}</p>
      {experience.responsibilities && (
        <details className="group mb-3">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-1.5 text-sm font-medium text-accent-ink hover:underline">
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
          <ul className="mt-2.5 list-outside list-disc space-y-2 pl-5 text-sm leading-[1.7] text-ink-soft marker:text-muted/50">
            {experience.responsibilities.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </details>
      )}
      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <span key={tech} className="rounded-[2px] bg-paper-dim px-2 py-0.5 text-xs text-muted">{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ className = '' }) => {
  return (
    <Section id="experience" title="Work Experience" className={className}>
      <div className="border-l border-line-soft">
        {experienceData.map((exp, index) => (
          <TimelineItem key={index} experience={exp} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
