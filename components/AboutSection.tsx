
import React from 'react';
import Section from './Section';
import { CodeIcon, PhpIcon, CloudIcon } from './IconComponents';
import Profile from '/assets/ui-portfolio-profile.png';
import PHPLogo from "/assets/logo-php.png";

const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 bg-white/10 rounded-lg hover:border-2 hover:border-dashed border-accent ease-in-out">
            {/* <div className="p-2 border-2 border-accent rounded-lg shadow-lg"> */}
            <div className="rounded-lg shadow-lg transition-transform transform hover:translate-y-[30px] hover:translate-x-[30px] duration-500 ease-in-out">
                 <img src={Profile} alt="Cyrus Manatad" className="w-full h-full object-cover rounded-md" />
            </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            I love creating clean, reliable, and scalable web solutions using PHP (CodeIgniter, Laravel), JavaScript, MySQL/MariaDB, and modern front-end tools like Bootstrap, Tailwind CSS, and ReactJS. Over the years, I’ve worked on projects that involve everything from custom CMS builds and API integrations (REST & SOAP) to Single Sign-On (SSO) setups with Azure Entra ID and LDAP.
          </p>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            I’m also big on process efficiency, like using Docker, AWS, and GitLab CI/CD to ensure smoother deployments and consistent environments. I enjoy solving technical challenges, mentoring teammates, and improving systems so everything runs faster and smarter.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center bg-navy-light p-3 rounded-md shadow-md">
              <CodeIcon className="w-6 h-6 mr-3 text-accent" />
              <span>Full-Stack Developer</span>
            </div>
            <div className="flex items-center bg-navy-light p-3 rounded-md shadow-md">
              <img className="w-6 h-6 mr-3 text-accent" src={PHPLogo} alt="" />
              <span>PHP Expert</span>
            </div>
            <div className="flex items-center bg-navy-light p-3 rounded-md shadow-md">
              <CloudIcon className="w-6 h-6 mr-3 text-accent" />
              <span>AWS/Plesk Experience</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
