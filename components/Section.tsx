
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, className = '', children }) => {
  return (
    <section id={id} className={`tile fade-in-up ${className}`}>
      <div className="mb-4 flex shrink-0 items-center gap-2 border-b border-navy-lighter/60 pb-2.5">
        <span className="text-accent text-lg font-bold leading-none">#</span>
        <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-gray-200">{title}</h2>
      </div>
      <div className="tile-body">{children}</div>
    </section>
  );
};

export default Section;
