
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Cyrus Manatad. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
