
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
  { label: 'Full-Stack Developer', node: <CodeIcon className="h-4 w-4 text-accent" /> },
  { label: 'Node.js / NestJS', src: devicon('nodejs') },
  { label: 'PHP Expert', src: devicon('php') },
  { label: 'AWS / Plesk', src: AwsLogo },
  { label: 'OVH Cloud', node: <OvhIcon className="h-4 w-4 text-accent" /> },
  { label: 'React / Vue', src: devicon('react') },
];

const techStack = [
  { label: 'Node.js', src: devicon('nodejs') },
  { label: 'NestJS', src: devicon('nestjs') },
  { label: 'TypeScript', src: devicon('typescript') },
  { label: 'React', src: devicon('react') },
  { label: 'Laravel 12', src: devicon('laravel') },
  { label: 'CodeIgniter 4', src: devicon('codeigniter', 'plain') },
  { label: 'MySQL', src: devicon('mysql') },
];

interface BadgeProps {
  label: string;
  src?: string;
  node?: React.ReactNode;
  small?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ label, src, node, small = false }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border border-navy-lighter bg-navy-lighter/50 shadow-sm transition-colors duration-300 hover:border-accent/60 hover:bg-navy-lighter ${
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
    <span className={`font-medium text-gray-300 ${small ? 'text-xs' : 'text-sm'}`}>{label}</span>
  </span>
);

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section id="home" className={`tile fade-in-up relative justify-center ${className}`}>
      <HeroIllustration className="pointer-events-none absolute -right-8 -top-8 hidden h-56 w-56 opacity-20 md:block" />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
        {/* 7/9 matches the source image's 896x1152, so object-cover crops nothing.
            Scaling from the top-left corner grows the portrait over the copy
            rather than past the tile's left edge, and leaves the layout untouched. */}
        <img
          src={Profile}
          alt="Cyrus Manatad"
          className="relative z-10 aspect-[7/9] w-40 shrink-0 origin-top-left rounded-lg object-cover shadow-lg ring-1 ring-navy-lighter grayscale transition-all duration-500 ease-out hover:scale-[1.4] hover:grayscale-0 hover:shadow-2xl hover:ring-2 hover:ring-accent motion-reduce:transition-none"
        />
        <div className="min-w-0 flex-1">
          <h3 className="mb-1.5 text-sm uppercase tracking-[0.18em] text-accent">Hi, my name is</h3>
          <h1 className="mb-1.5 font-bold text-gray-100 text-[clamp(2.25rem,3vw+1rem,3.75rem)] leading-tight">
            Cyrus Manatad
          </h1>
          <h2 className="mb-3 text-2xl font-semibold text-gray-400">Full-Stack Web Developer</h2>
          <p className="mb-4 max-w-prose text-sm leading-relaxed text-gray-400">
            I’m a passionate Full-Stack Web Developer with over 8 years of experience building scalable and intuitive web applications with clean, efficient code that makes real difference for users and businesses.
          </p>
          <div className="mb-2.5 flex flex-wrap gap-2">
            {capabilities.map((item) => (
              <Badge key={item.label} label={item.label} src={item.src} node={item.node} />
            ))}
          </div>
          <div className="mb-5 flex flex-wrap gap-1.5">
            {techStack.map((item) => (
              <Badge key={item.label} label={item.label} src={item.src} small />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-opacity-80 hover:scale-105">
              View Projects
            </a>
            <a href="#contact" className="rounded-md border-2 border-accent px-5 py-2.5 text-sm font-semibold text-accent shadow-lg transition-all duration-300 hover:bg-accent hover:text-white hover:scale-105">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
