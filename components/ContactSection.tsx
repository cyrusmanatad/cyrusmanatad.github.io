
import React from 'react';
import Section from './Section';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './IconComponents';

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  return (
    <Section id="contact" title="Let's Connect" className={className}>
      <div className="flex h-full flex-col justify-center gap-3">
        <p className="text-sm leading-relaxed text-gray-400">
          Got a project or idea in mind? I'm always open to new opportunities and collaborations. Let’s bring it to life.
        </p>
        <div className="flex flex-col gap-2">
          <a href="mailto:cyrusmanatad227@gmail.com" className="flex items-center text-sm text-gray-300 transition-colors duration-300 hover:text-accent">
            <MailIcon className="mr-2.5 h-5 w-5 shrink-0" />
            cyrusmanatad227@gmail.com
          </a>
          <a href="tel:+639970685424" className="flex items-center text-sm text-gray-300 transition-colors duration-300 hover:text-accent">
            <PhoneIcon className="mr-2.5 h-5 w-5 shrink-0" />
            +63 997 068 5424
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/cyrusmanatad" aria-label="GitHub" className="text-gray-400 transition-colors duration-300 hover:text-accent hover:scale-110">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/camanatad/" aria-label="LinkedIn" className="text-gray-400 transition-colors duration-300 hover:text-accent hover:scale-110">
            <LinkedinIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
