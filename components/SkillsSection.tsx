import React from 'react';
import Section from './Section';
import { skillsData } from '../constants';
import { SkillCategory } from '../types';

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => (
  <div className="bg-navy-light hover:bg-gray-500 p-6 rounded-lg shadow-lg transform">
    <h3 className="text-xl text-center font-bold text-accent mb-6">{category.category}</h3>
    <div className="flex justify-center flex-wrap gap-3">
      {category.skills.map((skill) => {
        const skillSlug = skill.name
          .toLowerCase()
          .replace(/\s|\+|\./g, '')
          .replace(/&/g, 'and'); // normalize filenames like 'c++' or 'vue.js'

        return (
          <div className="flex flex-col items-center space-y-2" key={skill.name}>
          <div
            key={skill.name}
            className="flex items-center justify-center bg-gray-200 rounded-lg p-2 shadow-md hover:scale-105 transition-transform duration-200"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skillSlug}/${skillSlug}-original.svg`}
              alt={skill.name}
              key={skill.name + '-icon'}
              className="w-20 h-20 object-contain"
              onError={(e) => {
                // fallback if no logo found
                (e.target as HTMLImageElement).src = skill.iconUrl ?? `https://img.shields.io/badge/${encodeURIComponent(
                  skill.name
                )}-grey?style=for-the-badge&logo=${encodeURIComponent(skillSlug)}&logoColor=white`;
              }}
              title={skill.name}
            />
          </div>
          <span key={skill.name + '-name'} className="bg-navy-lighter text-gray-300 text-sm font-medium px-3 py-1 rounded-full">{skill.name}</span>
          </div>
        );
      })}
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" title="Tech Stack & Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category) => (
          <SkillCard key={category.category} category={category} />
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
