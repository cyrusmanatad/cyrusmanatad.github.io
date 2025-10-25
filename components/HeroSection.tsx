
import React from 'react';
import { HeroIllustration } from './IconComponents';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center fade-in-up">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h3 className="text-lg text-accent mb-2">Hi, my name is</h3>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-4">Cyrus Manatad</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-400 mb-1">Full-Stack Web Developer</h2>
          <h3 className="text-lg text-accent mb-6">Laravel 12 | CodeIgniter 4 | MySQL | CSS | HTML | JavaScript</h3>
          <p className="max-w-xl mx-auto md:mx-0 mb-8 text-justify text-gray-400">
            I’m a passionate Full-Stack Web Developer with over 7 years of experience building scalable and intuitive web applications with clean, efficient code that makes real difference for users and businesses.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#projects" className="bg-accent text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Projects
            </a>
            <a href="#contact" className="border-2 border-accent text-accent font-semibold py-3 px-6 rounded-md hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
