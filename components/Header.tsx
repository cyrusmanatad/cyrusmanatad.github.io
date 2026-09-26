import React, { useEffect, useState } from 'react';
import { GithubIcon, LinkedinIcon } from './IconComponents';
import Profile from '/assets/ui-portfolio-profile.png';
import Cv from '/assets/cyrusmanatad_cv.pdf';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const sectionIds = navLinks.map((link) => link.href.slice(1));

const Header: React.FC = () => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const updateActive = () => {
      const lastId = sectionIds[sectionIds.length - 1];
      const lastSection = document.getElementById(lastId);
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      const lastRect = lastSection?.getBoundingClientRect();
      const lastOnScreen =
        lastRect !== undefined &&
        lastRect.top < window.innerHeight * 0.85 &&
        lastRect.bottom > window.innerHeight * 0.45;

      if (nearBottom || lastOnScreen) {
        setActiveId(lastId);
        return;
      }

      const marker = window.innerHeight * 0.35;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }
      setActiveId(current);
    };

    const observer = new IntersectionObserver(updateActive, {
      rootMargin: '-10% 0px -40% 0px',
      threshold: [0, 0.1, 0.25, 0.5],
    });

    sections.forEach((section) => observer.observe(section));
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateActive);
    };
  }, []);

  return (
    <header className="flex flex-col lg:sticky lg:top-0 lg:h-screen lg:w-[25rem] lg:shrink-0 lg:justify-between lg:overflow-y-auto lg:py-16">
      <div>
        <div className="relative mb-6 flex h-36 justify-center">
          <img
            src={Profile}
            alt="Cyrus Manatad"
            className="z-10 h-36 w-36 origin-center rounded-full object-cover object-[center_18%] grayscale ring-1 ring-white/15 transition-all duration-500 ease-out hover:z-20 hover:scale-[1.6] hover:grayscale-0 hover:shadow-xl hover:shadow-black/40 motion-reduce:transition-none motion-reduce:hover:scale-100"
          />
        </div>
        <h1 className="text-[clamp(2.25rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-bright">
          Cyrus Manatad
        </h1>
        <h2 className="mt-5 text-lg font-medium text-heading">Full-Stack Web Developer</h2>
        <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-slate lg:text-base">
          Full-stack web developer with 8+ years of experience building scalable web applications, APIs, and business solutions using PHP, Node.js, React, and modern web technologies.
        </p>
        <nav className="mt-12" aria-label="Sections">
          <ul>
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const active = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={link.href}
                    onClick={() => setActiveId(id)}
                    className="group flex items-center py-2"
                    aria-current={active ? 'true' : undefined}
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-200 ${
                        active ? 'w-16 bg-bright' : 'w-8 bg-slate group-hover:w-16 group-hover:bg-bright'
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                        active ? 'text-bright' : 'text-slate group-hover:text-bright'
                      }`}
                    >
                      {link.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="mt-12 flex flex-col items-start gap-6 lg:mt-8">
        <a
          href={Cv}
          download="Cyrus-Manatad-CV.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-heading transition-colors duration-200 hover:border-bright hover:text-bright"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14" />
          </svg>
          Download CV
        </a>
        <div className="flex items-center gap-5">
        <a
          href="https://github.com/cyrusmanatad"
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
          className="text-slate transition-colors duration-200 hover:text-bright"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/camanatad/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
          className="text-slate transition-colors duration-200 hover:text-bright"
        >
          <LinkedinIcon className="h-5 w-5" />
        </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
