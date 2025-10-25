
import React from 'react';

type IconProps = {
  className?: string;
};

export const CodeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export const PhpIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1.25 14.25c-.247 0-.49-.06-.708-.18-1.107-.6-1.542-2.134-1.542-3.57v-2.25h1.5v2.41c0 .6.106 1.133.458 1.458.352.325.867.482 1.342.482.571 0 1.054-.19 1.401-.568.347-.378.521-.889.521-1.532v-2.25h1.5v2.25c0 .9-.283 1.634-.851 2.203-.568.568-1.309.851-2.221.851zm-5.698 0c-.247 0-.49-.06-.708-.18-1.107-.6-1.542-2.134-1.542-3.57v-2.25h1.5v2.41c0 .6.106 1.133.458 1.458.352.325.867.482 1.342.482.571 0 1.054-.19 1.401-.568.347-.378.521-.889.521-1.532v-2.25h1.5v2.25c0 .9-.283 1.634-.851 2.203-.568.568-1.309.851-2.221.851z" />
    </svg>
);

export const CloudIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <title>LinkedIn</title>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
    </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export const HeroIllustration: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#2D9CDB', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor: '#112240', stopOpacity:1}} />
            </linearGradient>
        </defs>
        <path fill="url(#grad1)" d="M40.3,-70.1C53,-61.8,64.7,-51.7,71.7,-38.9C78.7,-26.1,81,-10.6,76.5,--3.2C72,4.2,60.7,13.4,52.8,24.1C44.9,34.8,40.4,47,32,56.7C23.6,66.4,11.8,73.6,-1.3,75.4C-14.4,77.2,-28.8,73.6,-42.2,66.8C-55.6,60,-68.1,49.9,-75.3,37.1C-82.5,24.3,-84.5,8.8,-80.7,-4.3C-76.9,-17.4,-67.3,-28.1,-57,-37.7C-46.7,-47.3,-35.7,-55.8,-23.7,-64.1C-11.7,-72.4,-5.9,-80.6,2.7,-84.1C11.2,-87.6,22.4,-86.3,31.7,-80.7C41.1,-75.1,48.7,-78.3,40.3,-70.1Z" transform="translate(100 100)" />
        <text x="50" y="95" fontFamily="monospace" fontSize="12" fill="#e6f1ff" transform="rotate(-15 50 100)">
            &lt;div&gt;
        </text>
        <text x="130" y="140" fontFamily="monospace" fontSize="12" fill="#e6f1ff" transform="rotate(25 150 120)">
            const dev = "Cyrus";
        </text>
        <text x="40" y="160" fontFamily="monospace" fontSize="12" fill="#2D9CDB" transform="rotate(5 50 150)">
            function()
        </text>
         <text x="120" y="60" fontFamily="monospace" fontSize="12" fill="#ccd6f6" transform="rotate(-5 100 50)">
            {'/>'}
        </text>
    </svg>
);
