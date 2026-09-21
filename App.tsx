
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectCardGrid from './components/ProjectCardGrid';

/* Explicit column and row starts keep the board layout independent of DOM
   order, so the sections can stay in reading order for the stacked breakpoint.
   Rows are implicit and auto-sized, so tiles grow to fit their content and the
   page scrolls. Experience spans two rows to pair against skills over contact. */
const placement = {
  hero: 'lg:col-start-1 lg:row-start-1 lg:col-span-6',
  about: 'lg:col-start-7 lg:row-start-1 lg:col-span-6',
  /* self-start stops the sheet from stretching to fill both rows; the page
     background reads better there than 700px of empty white. */
  experience: 'lg:col-start-1 lg:row-start-2 lg:col-span-7 lg:row-span-2 lg:self-start',
  skills: 'lg:col-start-8 lg:row-start-2 lg:col-span-5',
  contact: 'lg:col-start-8 lg:row-start-3 lg:col-span-5',
  projects: 'lg:col-start-1 lg:row-start-4 lg:col-span-12',
};

const App: React.FC = () => {
  return (
    <div className="bg-paper">
      <Header />
      <main className="mx-auto grid max-w-[1560px] grid-cols-1 gap-4 px-4 pb-10 pt-20 lg:grid-cols-12 lg:gap-6 lg:px-8 lg:pb-14 lg:pt-6">
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
