
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
    <div className="flex w-[4.4rem] flex-col items-center gap-1">
      <div className="flex items-center justify-center rounded-md bg-gray-200 p-1 shadow-sm transition-transform duration-200 hover:scale-110">
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skillSlug}/${skillSlug}-original.svg`}
          alt={skill.name}
          className="h-7 w-7 object-contain"
          onError={(e) => {
            // fallback if no logo found
            (e.target as HTMLImageElement).src = skill.iconUrl ?? `https://img.shields.io/badge/${encodeURIComponent(
              skill.name
            )}-grey?style=for-the-badge&logo=${encodeURIComponent(skillSlug)}&logoColor=white`;
          }}
          title={skill.name}
        />
      </div>
      <span className="w-full text-center text-[0.6rem] leading-[1.15] break-words text-gray-400" title={skill.name}>
        {skill.name}
      </span>
    </div>
  );
};

const SkillBand: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div>
    <h3 className="mb-1.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-accent">{category.category}</h3>
    <div className="flex flex-wrap gap-x-2 gap-y-1.5">
      {category.skills.map((skill) => (
        <SkillChip key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const SkillsSection: React.FC<SkillsSectionProps> = ({ className = '' }) => {
  return (
    <Section id="skills" title="Tech Stack & Skills" className={className} scroll>
      <div className="space-y-2.5">
        {skillsData.map((category) => (
          <SkillBand key={category.category} category={category} />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
