
import React from 'react';
import Section from './Section';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './IconComponents';

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  return (
    <Section id="contact" title="Let's Connect" className={className}>
      <div className="flex h-full flex-col justify-center gap-1.5">
        <p className="text-[0.65rem] leading-snug text-gray-400">
          Got a project or idea in mind? I'm always open to new opportunities and collaborations. Let’s bring it to life.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a href="mailto:cyrusmanatad227@gmail.com" className="flex items-center text-[0.65rem] text-gray-300 transition-colors duration-300 hover:text-accent">
            <MailIcon className="mr-1.5 h-3.5 w-3.5" />
            cyrusmanatad227@gmail.com
          </a>
          <a href="tel:+639970685424" className="flex items-center text-[0.65rem] text-gray-300 transition-colors duration-300 hover:text-accent">
            <PhoneIcon className="mr-1.5 h-3.5 w-3.5" />
            +63 997 068 5424
          </a>
          <div className="flex items-center gap-3">
            <a href="https://github.com/cyrusmanatad" aria-label="GitHub" className="text-gray-400 transition-colors duration-300 hover:text-accent">
              <GithubIcon className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/camanatad/" aria-label="LinkedIn" className="text-gray-400 transition-colors duration-300 hover:text-accent">
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        {/* The standalone footer only renders on the stacked breakpoint. */}
        <p className="hidden border-t border-navy-lighter/60 pt-1.5 text-[0.6rem] text-gray-500 lg:block">
          &copy; {new Date().getFullYear()} Cyrus Manatad. All Rights Reserved.
        </p>
      </div>
    </Section>
  );
};

export default ContactSection;
