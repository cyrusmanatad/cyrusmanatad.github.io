
import React from 'react';
import Section from './Section';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <Section id="about" title="About Me" className={className}>
      {/* Two columns on wide screens keep the line length readable in this wide tile. */}
      <div className="space-y-4 text-sm leading-relaxed text-gray-400 [&_b]:text-gray-200">
        <p>
          I’m a <b>full-stack web developer with over 8 years of experience</b> building
          scalable web applications, APIs, and business solutions. My background spans
          <b> PHP and Node.js development</b>, with experience building backend services
          and modern frontend applications using <b>React and Vue</b>.
        </p>

        <p>
          Over the years, I’ve worked across a wide range of projects, from
          <b> corporate websites and custom CMS platforms</b> to
          <b> transactional applications, enterprise systems, and API integrations</b>.
          I’ve also worked with enterprise authentication solutions such as
          <b> Azure Entra ID, LDAP, and JWT</b>.
        </p>

        <p>
          More recently, my work has increasingly focused on the <b>Node.js ecosystem</b>,
          building <b>NestJS services with TypeScript, Redis, and PostgreSQL</b> for
          transactional and integration-heavy applications. On the frontend, I work
          with <b>React</b> to build back-office applications with a focus on
          <b> performance, query optimization, user management, and role-based access control</b>.
        </p>

        <p>
          I also use <b>Docker </b> in my daily workflow, <b>AWS, and GitLab CI/CD</b> to standardize development
          environments and streamline deployments. I enjoy solving
          <b> complex technical problems</b>, improving existing systems, and helping
          teammates develop practical and maintainable solutions.
        </p>

        <p>
          Ultimately, I’m interested in building software that doesn’t just work, but
          <b> solves real business problems</b> in a reliable, maintainable, and
          <b> user-friendly way</b>.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
