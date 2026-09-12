
import React from 'react';
import Section from './Section';
import { CodeIcon, CloudIcon, NodeIcon } from './IconComponents';
import Profile from '/assets/ui-portfolio-profile.png';
import PHPLogo from "/assets/logo-php.png";

interface AboutSectionProps {
  className?: string;
}

const badges = [
  { label: 'Full-Stack Developer', icon: <CodeIcon className="mr-1.5 h-3.5 w-3.5 text-accent" /> },
  { label: 'Node.js / NestJS', icon: <NodeIcon className="mr-1.5 h-3.5 w-3.5 text-accent" /> },
  { label: 'PHP Expert', icon: <img className="mr-1.5 h-3.5 w-3.5 object-contain" src={PHPLogo} alt="" /> },
  { label: 'AWS/Plesk Experience', icon: <CloudIcon className="mr-1.5 h-3.5 w-3.5 text-accent" /> },
];

const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <Section id="about" title="About Me" className={className} scroll>
      <div className="mb-2.5 flex items-start gap-3">
        <img
          src={Profile}
          alt="Cyrus Manatad"
          className="h-20 w-20 shrink-0 rounded-md object-cover object-top shadow-md grayscale transition-all duration-500 hover:grayscale-0"
        />
        <div className="grid flex-1 grid-cols-1 gap-1.5 sm:grid-cols-2">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center rounded-md bg-navy-lighter/60 px-2 py-1 shadow-sm">
              {badge.icon}
              <span className="text-[0.65rem] leading-tight text-gray-300">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2 text-xs leading-snug text-gray-400 [&_b]:text-gray-300">
        <p>
          I love creating clean, reliable, and scalable web solutions using PHP (<b>CodeIgniter</b>, <b>Laravel</b>), <b>Node.js</b> (<b>NestJS</b>), <b>JavaScript/TypeScript</b>, <b>MySQL/MariaDB</b> , and modern front-end tools like <b>Bootstrap</b>, <b>Tailwind</b> <b>CSS</b>, <b>ReactJS</b>, and <b>Vue.js</b>.
        </p>
        <p>
          Over the years, I’ve worked on projects that involve everything from <b>brand sites</b>, <b>transactional application</b>, <b>custom CMS</b>, <b>API development and integrations</b> (<i>REST API</i>, <i>SOAP</i>, <i>XML</i>, <i>Oracle BI reports</i>). I've recently implemented the <b>Single Sign-On (SSO)</b> authentication method using <b>Azure Entra ID</b> and <b>LDAP</b> on some of the projects I'm working on.
        </p>
        <p>
          These days I work mostly on the <b>Node.js</b> side, building <b>NestJS</b> services with <b>TypeScript</b> and <b>Redis</b> for high-volume transactional integrations, alongside a <b>React</b> back office where I focus on query optimization, user management, and role-based access.
        </p>
        <p>
          I'm focused on making the development process more efficient by using tools like <b>Docker</b>, <b>AWS</b>, and <b>GitLab</b> with <b>CI/CD</b> integration for smoother deployments and reliable environments. I enjoy solving technical problems, helping teammates improve technical skills, and improving systems to make everything run faster and better.
        </p>
        <p>
          Lastly, I’m always eager to learn new things to stay up to date with ever-evolving technology, whether it’s trying out new <b>frameworks</b> or finding better ways to make web apps more <i>user-friendly</i> and efficient.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
