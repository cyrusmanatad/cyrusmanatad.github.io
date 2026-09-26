import React from 'react';
import Section from './Section';
import { skillsData } from '../constants';
import { Skill, SkillCategory } from '../types';

interface SkillsSectionProps {
  className?: string;
}

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/\s|\+|\./g, '')
    .replace(/&/g, 'and'); // normalize filenames like 'c++' or 'vue.js'

const SkillChip: React.FC<{ skill: Skill }> = ({ skill }) => {
  const skillSlug = slugify(skill.name);

  // Chip width fits the longest unbroken label so names never split mid-word.
  return (
    <div className="flex w-[5.5rem] flex-col items-center gap-1.5">
      <div className="flex items-center justify-center rounded-[4px] border border-white/10 bg-navy-light p-2 transition-colors duration-200 hover:border-white/20 hover:bg-[#172a45]">
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skillSlug}/${skillSlug}-original.svg`}
          alt={skill.name}
          className="h-10 w-10 object-contain"
          onError={(e) => {
            // fallback if no logo found
            (e.target as HTMLImageElement).src = skill.iconUrl ?? `https://img.shields.io/badge/${encodeURIComponent(
              skill.name
            )}-grey?style=for-the-badge&logo=${encodeURIComponent(skillSlug)}&logoColor=white`;
          }}
          title={skill.name}
        />
      </div>
      <span className="w-full text-center text-xs leading-[1.2] break-words text-slate" title={skill.name}>
        {skill.name}
      </span>
    </div>
  );
};

const SkillBand: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div>
    <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-light">{category.category}</h3>
    <div className="flex flex-wrap gap-x-3 gap-y-4">
      {category.skills.map((skill) => (
        <SkillChip key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const SkillsSection: React.FC<SkillsSectionProps> = ({ className = '' }) => {
  return (
    <Section id="skills" title="Tech Stack & Skills" className={className}>
      <div className="space-y-7">
        {skillsData.map((category) => (
          <SkillBand key={category.category} category={category} />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
