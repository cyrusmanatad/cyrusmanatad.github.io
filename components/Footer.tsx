
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-line py-6 text-center text-xs tracking-[0.02em] text-muted">
      <p>&copy; {new Date().getFullYear()} Cyrus Manatad. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
