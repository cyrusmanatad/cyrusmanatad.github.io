import React from 'react';
import Section from './Section';
import { experienceData } from '../constants';
import { Experience } from '../types';

interface ExperienceSectionProps {
  className?: string;
}

const ExperienceRow: React.FC<{ experience: Experience }> = ({ experience }) => (
  <article className="rounded-md px-4 py-5 transition-colors duration-200 hover:bg-navy-light">
    <p className="mb-1 text-xs uppercase tracking-[0.12em] text-slate">{experience.period}</p>
    <h3 className="text-base font-semibold text-heading">
      {experience.role}
      <span className="font-medium text-slate-light"> · {experience.company}</span>
    </h3>
    <p className="mt-3 text-sm leading-[1.7] text-slate">{experience.description}</p>
    {experience.responsibilities && (
      <ul className="mt-3 list-outside list-disc space-y-2 pl-5 text-sm leading-[1.7] text-slate marker:text-slate/60">
        {experience.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
    <ul className="mt-4 flex flex-wrap gap-2">
      {experience.technologies.map((tech) => (
        <li key={tech} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-slate-light">
          {tech}
        </li>
      ))}
    </ul>
  </article>
);

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ className = '' }) => {
  return (
    <Section id="experience" title="Work Experience" className={className}>
      <div className="-mx-4 flex flex-col">
        {experienceData.map((exp) => (
          <ExperienceRow key={`${exp.company}-${exp.period}`} experience={exp} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
