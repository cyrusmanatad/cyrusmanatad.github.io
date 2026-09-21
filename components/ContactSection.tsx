
import React from 'react';
import Section from './Section';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './IconComponents';

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  return (
    <Section id="contact" title="Let's Connect" className={className}>
      <div className="flex h-full flex-col justify-center gap-5">
        <p className="max-w-[44ch] text-sm leading-[1.7] text-ink-soft">
          Got a project or idea in mind? I'm always open to new opportunities and collaborations. Let’s bring it to life.
        </p>
        <div className="flex flex-col gap-2.5">
          <a href="mailto:cyrusmanatad227@gmail.com" className="flex items-center text-sm text-ink transition-colors duration-200 hover:text-accent-ink">
            <MailIcon className="mr-2.5 h-[1.125rem] w-[1.125rem] shrink-0 text-muted" />
            cyrusmanatad227@gmail.com
          </a>
          <a href="tel:+639970685424" className="flex items-center text-sm text-ink transition-colors duration-200 hover:text-accent-ink">
            <PhoneIcon className="mr-2.5 h-[1.125rem] w-[1.125rem] shrink-0 text-muted" />
            +63 997 068 5424
          </a>
        </div>
        <div className="flex items-center gap-4 border-t border-line-soft pt-4">
          <a href="https://github.com/cyrusmanatad" aria-label="GitHub" className="text-muted transition-colors duration-200 hover:text-ink">
            <GithubIcon className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/camanatad/" aria-label="LinkedIn" className="text-muted transition-colors duration-200 hover:text-ink">
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
