
import React from 'react';
import { CodeIcon, HeroIllustration, OvhIcon } from './IconComponents';
import Profile from '/assets/ui-portfolio-profile.png';
import AwsLogo from '/assets/logo-aws.png';

interface HeroSectionProps {
  className?: string;
}

/* Variants are not uniform across devicon: CodeIgniter only ships -plain, and
   there is no square AWS or Plesk mark at all, so those fall back to the logos
   already in assets/. Every path here was checked against the CDN. */
const devicon = (name: string, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const capabilities = [
  { label: 'Full-Stack Developer', node: <CodeIcon className="h-4 w-4 text-accent-ink" /> },
  { label: 'Node.js / NestJS', src: devicon('nodejs') },
  { label: 'PHP Expert', src: devicon('php') },
  { label: 'AWS / Plesk', src: AwsLogo },
  { label: 'OVH Cloud', node: <OvhIcon className="h-4 w-4 text-accent-ink" /> },
  { label: 'React / Vue', src: devicon('react') },
];

interface BadgeProps {
  label: string;
  src?: string;
  node?: React.ReactNode;
  small?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ label, src, node, small = false }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-paper transition-colors duration-200 hover:border-muted/50 hover:bg-paper-dim ${
      small ? 'px-2.5 py-1' : 'px-3 py-1.5'
    }`}
  >
    {node ?? (
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className={`shrink-0 object-contain ${small ? 'h-3.5 w-3.5' : 'h-4 w-4'}`}
        // keep the label readable if an icon ever fails to load
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = 'none';
        }}
      />
    )}
    <span className={`font-medium text-ink-soft ${small ? 'text-xs' : 'text-sm'}`}>{label}</span>
  </span>
);

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section id="home" className={`tile fade-in-up relative justify-center ${className}`}>
      <HeroIllustration className="pointer-events-none absolute -right-10 -top-10 hidden h-52 w-52 md:block" />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
        {/* 7/9 matches the source image's 896x1152, so object-cover crops nothing.
            Scaling from the top-left corner grows the portrait over the copy
            rather than past the tile's left edge, and leaves the layout untouched. */}
        <img
          src={Profile}
          alt="Cyrus Manatad"
          className="relative z-10 aspect-[7/9] w-40 shrink-0 origin-top-left rounded-[3px] object-cover ring-1 ring-line grayscale transition-all duration-500 ease-out hover:scale-[1.4] hover:grayscale-0 hover:shadow-xl hover:shadow-ink/10 hover:ring-muted/40 motion-reduce:transition-none"
        />
        <div className="min-w-0 flex-1">
          <h3 className="mb-2 text-xs uppercase tracking-[0.2em] text-accent-ink">Hi, my name is</h3>
          <h1 className="mb-1 font-semibold text-ink text-[clamp(2rem,2.2vw+1rem,3rem)] leading-[1.08]">
            Cyrus Manatad
          </h1>
          <h2 className="mb-4 text-xl font-normal text-muted">Full-Stack Web Developer</h2>
          <p className="mb-5 max-w-[46ch] text-sm leading-relaxed text-ink-soft">
            Full-stack web developer with 8+ years of experience building scalable web applications, APIs, and business solutions using PHP, Node.js, React, and modern web technologies.
          </p>
          <div className="mb-5 flex flex-wrap gap-2">
            {capabilities.map((item) => (
              <Badge key={item.label} label={item.label} src={item.src} node={item.node} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a href="#projects" className="rounded-[3px] bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ink-soft">
              View Projects
            </a>
            <a href="#contact" className="rounded-[3px] border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-muted/50 hover:bg-paper-dim">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
