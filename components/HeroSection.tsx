
import React from 'react';
import { HeroIllustration } from './IconComponents';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section id="home" className={`tile fade-in-up relative justify-center ${className}`}>
      <HeroIllustration className="pointer-events-none absolute -right-8 -top-8 hidden h-56 w-56 opacity-20 md:block" />
      <div className="relative py-2">
        <h3 className="mb-2 text-sm uppercase tracking-[0.18em] text-accent">Hi, my name is</h3>
        <h1 className="mb-2 font-bold text-gray-100 text-[clamp(2.25rem,3vw+1rem,3.75rem)] leading-tight">
          Cyrus Manatad
        </h1>
        <h2 className="mb-2 text-2xl font-semibold text-gray-400">Full-Stack Web Developer</h2>
        <h3 className="mb-4 text-sm leading-relaxed text-accent">
          Node.js | NestJS | TypeScript | React | Laravel 12 | CodeIgniter 4 | MySQL
        </h3>
        <p className="mb-6 max-w-prose text-sm leading-relaxed text-gray-400">
          I’m a passionate Full-Stack Web Developer with over 8 years of experience building scalable and intuitive web applications with clean, efficient code that makes real difference for users and businesses.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-opacity-80 hover:scale-105">
            View Projects
          </a>
          <a href="#contact" className="rounded-md border-2 border-accent px-5 py-2.5 text-sm font-semibold text-accent shadow-lg transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
