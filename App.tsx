import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy text-slate">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 py-16 lg:flex-row lg:gap-10 lg:px-8 lg:py-0">
        <Header />
        <main className="mt-20 min-w-0 lg:mt-0 lg:flex-1 lg:py-16">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
