
import React from 'react';
import Section from './Section';
import { CodeIcon, PhpIcon, CloudIcon } from './IconComponents';
import Profile from '/assets/ui-portfolio-profile.png';
import PHPLogo from "/assets/logo-php.png";

const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2 bg-white/10 rounded-lg hover:border-2 hover:border-dashed border-accent ease-in-out">
            <div className="rounded-lg shadow-lg transition-transform transform md:hover:translate-y-[30px] md:hover:translate-x-[30px] duration-500 ease-in-out">
                 <img src={Profile} alt="Cyrus Manatad" className="w-full h-full object-cover rounded-md blur grayscale hover:filter-none duration-500" />
            </div>
        </div>
        <div className="md:col-span-3 md:px-8">
          <p className="text-lg text-justify text-gray-400 mb-6 leading-relaxed">
            I love creating clean, reliable, and scalable web solutions using PHP (<b>CodeIgniter</b>, <b>Laravel</b>), <b>JavaScript</b>, <b>MySQL/MariaDB</b> , and modern front-end tools like <b>Bootstrap</b>, <b>Tailwind</b> <b>CSS</b>, <b>ReactJS</b>, and <b>Vue.js</b>.
          </p>
          <p className="text-lg text-justify text-gray-400 mb-6 leading-relaxed">
            Over the years, I’ve worked on projects that involve everything from <b>brand sites</b>, <b>transactional application</b>, <b>custom CMS</b>, <b>API development and integrations</b> (<i>REST API</i>, <i>SOAP</i>, <i>XML</i>, <i>Oracle BI reports</i>). I've recently implemented the <b>Single Sign-On (SSO)</b> authentication method using <b>Azure Entra ID</b> and <b>LDAP</b> on some of the projects I'm working on.
          </p>
          <p className="text-lg text-justify text-gray-400 mb-6 leading-relaxed">
            I'm focused on making the development process more efficient by using tools like <b>Docker</b>, <b>AWS</b>, and <b>GitLab</b> with <b>CI/CD</b> integration for smoother deployments and reliable environments. I enjoy solving technical problems, helping teammates improve technical skills, and improving systems to make everything run faster and better.
          </p>
          <p className="text-lg text-justify text-gray-400 mb-6 leading-relaxed">
            Lastly, I’m always eager to learn new things to stay up to date with ever-evolving technology, whether it’s trying out new <b>frameworks</b> or finding better ways to make web apps more <i>user-friendly</i> and efficient.
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
