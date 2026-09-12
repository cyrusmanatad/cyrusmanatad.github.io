
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

/* Explicit column and row starts keep the board layout independent of DOM
   order, so the sections can stay in reading order for the stacked breakpoint. */
const placement = {
  hero: 'lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:row-span-2',
  about: 'lg:col-start-5 lg:row-start-1 lg:col-span-4 lg:row-span-3',
  skills: 'lg:col-start-5 lg:row-start-4 lg:col-span-4 lg:row-span-2',
  experience: 'lg:col-start-1 lg:row-start-3 lg:col-span-4 lg:row-span-4',
  projects: 'lg:col-start-9 lg:row-start-1 lg:col-span-4 lg:row-span-6',
  contact: 'lg:col-start-5 lg:row-start-6 lg:col-span-4 lg:row-span-1',
};

const App: React.FC = () => {
  return (
    <div className="bg-navy lg:h-screen lg:overflow-hidden">
      <Header />
      <main className="grid grid-cols-1 gap-3 px-3 pb-3 pt-20 lg:h-[calc(100vh-2.75rem)] lg:grid-cols-12 lg:grid-rows-6 lg:gap-2.5 lg:p-2.5 lg:pt-0">
        <HeroSection className={placement.hero} />
        <AboutSection className={placement.about} />
        <SkillsSection className={placement.skills} />
        <ExperienceSection className={placement.experience} />
        <ProjectsSection className={placement.projects} />
        <ContactSection className={placement.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
