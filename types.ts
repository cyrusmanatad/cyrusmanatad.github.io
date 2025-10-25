
export interface Skill {
  name: string;
  iconUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities?: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  url: string;
}
