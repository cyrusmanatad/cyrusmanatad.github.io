
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
      <p>&copy; {new Date().getFullYear()} Cyrus Manatad. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
