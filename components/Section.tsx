
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
      <div className="mb-5 flex shrink-0 items-baseline gap-2 border-b border-line-soft pb-3">
        <span className="text-accent-ink text-base font-semibold leading-none">#</span>
        <h2 className="text-[0.9375rem] font-semibold uppercase tracking-[0.14em] text-ink">{title}</h2>
      </div>
      <div className="tile-body">{children}</div>
    </section>
  );
};

export default Section;
