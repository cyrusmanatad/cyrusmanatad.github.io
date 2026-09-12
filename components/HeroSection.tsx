
import React from 'react';
import { HeroIllustration } from './IconComponents';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section id="home" className={`tile fade-in-up relative justify-center ${className}`}>
      <HeroIllustration className="pointer-events-none absolute -right-6 -top-6 hidden h-40 w-40 opacity-20 md:block lg:h-44 lg:w-44" />
      <div className="relative">
        <h3 className="mb-1 text-[0.7rem] uppercase tracking-[0.18em] text-accent">Hi, my name is</h3>
        <h1 className="mb-1 font-bold text-gray-100 text-[clamp(1.5rem,2.4vw+0.5rem,2.5rem)] leading-tight">
          Cyrus Manatad
        </h1>
        <h2 className="mb-1 text-base font-semibold text-gray-400 lg:text-lg">Full-Stack Web Developer</h2>
        <h3 className="mb-2 text-[0.7rem] leading-snug text-accent">
          Node.js | NestJS | TypeScript | React | Laravel 12 | CodeIgniter 4 | MySQL
        </h3>
        <p className="mb-3 max-w-prose text-xs leading-snug text-gray-400">
          I’m a passionate Full-Stack Web Developer with over 8 years of experience building scalable and intuitive web applications with clean, efficient code that makes real difference for users and businesses.
        </p>
        <div className="flex flex-wrap gap-2">
          <a href="#projects" className="rounded-md bg-accent px-3 py-1.5 text-[0.7rem] font-semibold text-white shadow-md transition-all duration-300 hover:bg-opacity-80">
            View Projects
          </a>
          <a href="#contact" className="rounded-md border border-accent px-3 py-1.5 text-[0.7rem] font-semibold text-accent shadow-md transition-all duration-300 hover:bg-accent hover:text-white">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
