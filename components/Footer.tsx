
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 py-4 text-center text-xs text-gray-500 lg:hidden">
      <p>&copy; {new Date().getFullYear()} Cyrus Manatad. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
