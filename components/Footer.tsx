import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-xs tracking-[0.02em] text-slate">
      <p>&copy; {new Date().getFullYear()} Cyrus Manatad. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
