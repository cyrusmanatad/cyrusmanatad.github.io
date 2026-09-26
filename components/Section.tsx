import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, className = '', children }) => {
  return (
    <section id={id} className={`mb-24 scroll-mt-8 last:mb-0 ${className}`}>
      <h2 className="mb-6 text-2xl font-semibold uppercase tracking-[0.14em] text-heading">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
