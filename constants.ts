
import { SkillCategory, Experience, Project } from './types';
import Ucc from  "./assets/ui-ucc.jpg";
import JobFinder from "./assets/ui-jobfinder.jpg";
import EBusinessCard from "./assets/ui-ebusinesscard.jpg";
import Sams from "./assets/ui-sams.jpg";
import PHCare from "./assets/ui-phcare.jpg";
import Lactezin from "./assets/ui-lactezin.jpg";
import Fortima from "./assets/ui-fortima.jpg";
import GynePro from "./assets/ui-gynepro.jpg";
import C1Ulisys from "./assets/ui-c1ulisys.jpg";
import CmsUi from "./assets/ui-cms.png";
import CILogo from "./assets/logo-ci.png";
import MySQLLogo from "./assets/logo-mysql.png";
import ShadcnLogo from "./assets/logo-shadcn.png";
import PleskLogo from "./assets/logo-plesk.png";
import AwsLogo from "./assets/logo-aws.png";
import ViteLogo from "./assets/logo-vite.png";
import TsLogo from "./assets/logo-ts.png";
import NpmLogo from "./assets/logo-npm.png";
import PHPLogo from "./assets/logo-php.png";

export const skillsData: SkillCategory[] = [
  {
    category: 'Backend',
    skills: [
      { name: 'PHP', iconUrl: PHPLogo }, { name: 'CodeIgniter', iconUrl: CILogo }, { name: 'Laravel' }, { name: 'MySQL 8', iconUrl: MySQLLogo }, { name: 'MariaDB' }, { name: 'postgresql' }, { name: 'sqlite' }
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript' }, { name: 'Typescript', iconUrl: TsLogo }, { name: 'jQuery' }, { name: 'Bootstrap' }, { name: 'Tailwind CSS' }, { name: 'React' }, { name: 'Vue.js' }, {name: 'NPM', iconUrl: NpmLogo}, { name: 'Vite*', iconUrl: ViteLogo }, { name: 'ShadCN', iconUrl: ShadcnLogo},
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker' }, { name: 'Git' }, { name: 'GitLab' }, { name: 'Github' }, { name: 'Apache' }, { name: 'Nginx' }, { name: 'cpanel' }, { name: 'Plesk', iconUrl : PleskLogo }, { name: 'AWS', iconUrl: AwsLogo }, { name: 'linux' }
    ],
  },
  // {
  //   category: 'Other Skills',
  //   skills: [
  //     { name: 'SDLC' }, { name: 'Agile Methodologies' }, { name: 'soap' }, {name: 'xml'}, { name: 'REST API Design' },
  //   ],
  // },
];

export const experienceData: Experience[] = [
  {
    role: 'Programmer/Analyst II',
    company: 'Vertere Global Solutions Inc.',
    period: '2019 – Present',
    description: 'Led full-stack development of web applications and related APIs, integrated third-party APIs, use Docker in development and implemented CI/CD pipelines to streamline deployment processes.',
    responsibilities: [
      'Developed and maintained web applications using PHP (CodeIgniter, Laravel), JavaScript, and modern front-end frameworks.',
      'Integrated third-party APIs and developed RESTful APIs for seamless data exchange between systems.',
      'Utilized Docker for containerization, ensuring consistent development environments and simplifying deployment processes.',
      'Implemented CI/CD pipelines using GitLab CI/CD to automate testing, building, and deployment of applications.',
      'Collaborated with cross-functional teams to gather requirements, design solutions, and deliver high-quality software products.'
    ],
    technologies: ['PHP', 'CodeIgniter', 'Docker', 'GitLab CI/CD', 'AWS', 'MySQL', 'MSSQL', 'MDX Query', 'Oracle', 'Web Services', 'REST API', 'SOAP', 'Bootstrap', 'CSS', 'JavaScript'],
  },
  {
    role: 'PHP Programmer',
    company: 'Diversified Technology Solutions Inc.',
    period: '2018 – 2019',
    description: 'Developed and maintained recruitment automation and HR management systems, significantly reducing manual data entry and improving workflow efficiency.',
    responsibilities: [
      'Developed a recruitment automation system that streamlined candidate tracking, interview scheduling, and onboarding processes, reducing manual data entry.',
      'Designed and created a user-friendly homegrown job application portal for applicants.',
      'Maintained and enhanced an HR management system, improving employee data management and reporting capabilities.',
      'Collaborated with HR teams to gather requirements and implement features that improved overall workflow efficiency.',
    ],
    technologies: ['PHP', 'CodeIgniter', 'Laravel', 'Vue,js', 'jQuery', 'MySQL', 'Tailwind CSS', 'DataTables'],
  },
  {
    role: 'System Developer Intern',
    company: 'RHU Abuyog',
    period: '2017',
    description: 'Designed and implemented a healthcare automation system for patient registration, medical records management, and reporting.',
    responsibilities: [
      'Developed a healthcare automation system that digitized patient registration, medical records management, and reporting processes.',
      'Collaborated with healthcare staff to understand their needs and tailor the system to improve efficiency and accuracy in data handling.',
      'Provided training and support to health care personnel, ensuring smooth adoption of the new system.'
    ],
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'jQuery UI', 'AJAX', 'DataTables'],
  },
];

export const projectsData: Project[] = [
  {
    title: 'Unahco Order Entry Application',
    description: 'A comprehensive system for managing sales orders with seamless integration with Oracle databases.',
    imageUrl: Ucc,
    technologies: ['PHP', 'CodeIgniter 3', 'Oracle BI', 'MySQL', 'SMS', 'Sendgrid', 'REST API', 'SOAP', 'XML', 'Docker'],
    url: '#'
  },
  {
    title: 'E-Business Card',
    description: 'A digital business card application that allows users to create, share, and manage their professional digital business card online.',
    imageUrl: EBusinessCard,
    technologies: ['PHP', 'CodeIgniter 4', 'MySQL', 'jQuery', 'Bootstrap 5', 'REST API'],
    url: '#'
  },
  {
    title: 'Communities of One - Unilab Systems',
    description: 'An application designed to facilitate unilab sales representatives in managing their client communities.',
    imageUrl: C1Ulisys,
    technologies: ['PHP', 'CodeIgniter 4', 'MySQL', 'MSSQL', 'MDX', 'CUBE Reports', 'jQuery', 'Bootstrap 5'],
    url: '#'
  },
  {
    title: 'SAMS (Supplier Audit Management System)',
    description: 'A web-based application to manage and streamline supplier audits, evaluations, and compliance tracking.',
    imageUrl: Sams,
    technologies: ['PHP', 'CodeIgniter 3', 'MySQL', 'jQuery', 'jQuery UI', 'Bootstrap 3', 'Docker'],
    url: '#'
  },
  {
    title: 'Job Finder Platform',
    description: 'A job listing and application platform that connects job seekers with employers, featuring advanced search and application tracking functionalities.',
    imageUrl: JobFinder,
    technologies: ['Personal Project', 'PHP', 'Laravel 12', 'MySQL', 'Vue.js', 'axios', 'REST API', 'Tailwind CSS'],
    url: '#'
  },
  {
    title: 'Custom Content Management System (CMS) Application',
    description: 'Content Management System (CMS) a web application that allows publishing, editing and modifying content, organizing, deleting as well as maintenance from a central interface.',
    imageUrl: CmsUi,
    technologies: ['PHP', 'CodeIgniter 3', 'MySQL', 'Admin LTE', 'Bootstrap 4'],
    url: '#'
  },
  {
    title: 'pH Care',
    description: 'Official website of pH Care, a leading feminine hygiene brand offering a range of products for women\'s health and wellness.',
    imageUrl: PHCare,
    technologies: ['PHP', 'CodeIgniter 3', 'MySQL', 'Docker', 'jQuery', 'AJAX', 'Bootstrap 4', 'HTML5', 'CSS3', 'JavaScript'],
    url: 'https://phcare.com.ph/'
  },
  {
    title: 'Lactezin',
    description: 'Official website of Lactezin, It is the first over-the-counter drug registered anti-acne treatment in the Philippines.',
    imageUrl: Lactezin,
    technologies: ['PHP', 'CodeIgniter 3', 'MySQL', 'jQuery', 'AJAX', 'Bootstrap 4', 'HTML5', 'CSS3', 'JavaScript'],
    url: 'https://lactezin.com/'
  },
  {
    title: 'Fortima',
    description: 'Official website of Fortima, a dietary supplement that helps boost skin health and immunity.',
    imageUrl: Fortima,
    technologies: ['PHP', 'CodeIgniter 3', 'MySQL', 'jQuery', 'AJAX', 'Bootstrap 4', 'HTML5', 'CSS3', 'JavaScript'],
    url: 'https://fortima.com.ph/'
  },
  {
    title: 'GynePro',
    description: 'Official website of GynePro, a feminine wash brand that helps maintain intimate hygiene and freshness during red days.',
    imageUrl: GynePro,
    technologies: ['PHP', 'CodeIgniter 3', 'MySQL', 'jQuery', 'AJAX', 'Bootstrap 4', 'HTML5', 'CSS3', 'JavaScript'],
    url: 'https://gynepro.com.ph/'
  }
];
