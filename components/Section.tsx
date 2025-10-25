
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-24 fade-in-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
        <span className="text-accent text-5xl absolute -top-2 -left-2 opacity-10">#</span>
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
