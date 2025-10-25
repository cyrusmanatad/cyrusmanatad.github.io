
import React from 'react';
import Section from './Section';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './IconComponents';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="Let's Connect">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-400 mb-8">
          Got a project or idea in mind? I'm always open to new opportunities and collaborations. Let’s bring it to life.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            <a href="mailto:cyrusmanatad227@gmail.com" className="flex items-center text-lg text-gray-300 hover:text-accent transition-colors duration-300">
                <MailIcon className="w-6 h-6 mr-3"/>
                cyrusmanatad227@gmail.com
            </a>
            <a href="tel:+639970685424" className="flex items-center text-lg text-gray-300 hover:text-accent transition-colors duration-300">
                <PhoneIcon className="w-6 h-6 mr-3"/>
                +63 997 068 5424
            </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/cyrusmanatad" aria-label="GitHub" className="text-gray-400 hover:text-accent transition-colors duration-300 transform hover:scale-110">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/camanatad/" aria-label="LinkedIn" className="text-gray-400 hover:text-accent transition-colors duration-300 transform hover:scale-110">
            <LinkedinIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
