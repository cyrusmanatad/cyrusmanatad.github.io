import React from 'react';
import Section from './Section';
import { MailIcon, PhoneIcon } from './IconComponents';

interface ContactSectionProps {
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  return (
    <Section id="contact" title="Let's Connect" className={className}>
      <div className="flex flex-col gap-5">
        <p className="max-w-[44ch] text-sm leading-[1.7] text-slate lg:text-base">
          Got a project or idea in mind? I'm always open to new opportunities and collaborations. Let’s bring it to life.
        </p>
        <div className="flex flex-col gap-2.5">
          <a href="mailto:cyrusmanatad227@gmail.com" className="flex items-center text-sm text-heading transition-colors duration-200 hover:text-bright">
            <MailIcon className="mr-2.5 h-[1.125rem] w-[1.125rem] shrink-0 text-slate" />
            cyrusmanatad227@gmail.com
          </a>
          <a href="tel:+639970685424" className="flex items-center text-sm text-heading transition-colors duration-200 hover:text-bright">
            <PhoneIcon className="mr-2.5 h-[1.125rem] w-[1.125rem] shrink-0 text-slate" />
            +63 997 068 5424
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
