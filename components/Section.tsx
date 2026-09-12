
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  className?: string;
  /** Let the body scroll inside the tile instead of growing the board. */
  scroll?: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, className = '', scroll = false, children }) => {
  return (
    <section id={id} className={`tile fade-in-up ${className}`}>
      <div className="mb-2 flex shrink-0 items-center gap-1.5 border-b border-navy-lighter/60 pb-1.5">
        <span className="text-accent text-xs font-bold leading-none">#</span>
        <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gray-200">{title}</h2>
      </div>
      <div className={`tile-body ${scroll ? 'lg:overflow-y-auto lg:pr-1.5' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
