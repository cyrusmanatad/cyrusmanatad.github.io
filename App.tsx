
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
   order, so the sections can stay in reading order for the stacked breakpoint.
   Rows are implicit and auto-sized, so tiles grow to fit their content and the
   page scrolls. Experience spans two rows to pair against skills over contact. */
const placement = {
  hero: 'lg:col-start-1 lg:row-start-1 lg:col-span-5',
  about: 'lg:col-start-6 lg:row-start-1 lg:col-span-7',
  experience: 'lg:col-start-1 lg:row-start-2 lg:col-span-7 lg:row-span-2',
  skills: 'lg:col-start-8 lg:row-start-2 lg:col-span-5',
  contact: 'lg:col-start-8 lg:row-start-3 lg:col-span-5',
  projects: 'lg:col-start-1 lg:row-start-4 lg:col-span-12',
};

const App: React.FC = () => {
  return (
    <div className="bg-navy">
      <Header />
      <main className="grid grid-cols-1 gap-4 px-4 pb-4 pt-20 lg:grid-cols-12 lg:p-4 lg:pt-4">
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
