
import React, { useState, useEffect } from 'react';
import Logo from '/assets/android-chrome-192x192.png';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 lg:sticky lg:h-14 ${
        isScrolled ? 'bg-navy-light/80 shadow-lg backdrop-blur-sm' : 'bg-transparent lg:bg-navy-light/80 lg:backdrop-blur-sm'
      }`}
    >
      <div className="px-4 lg:h-full">
        <div className="flex items-center justify-between py-3 lg:h-full lg:py-0">
          <a href="#" className="flex items-center gap-2.5 text-accent">
            <img src={Logo} alt="Cyrus Logo" className="w-9 lg:w-8" />
            <span className="hidden text-sm font-bold uppercase tracking-[0.18em] text-gray-200 lg:inline">
              Cyrus Manatad
            </span>
          </a>
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-accent lg:uppercase lg:tracking-[0.12em]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-50" aria-label="Toggle menu">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-navy-light transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl text-gray-300 hover:text-accent transition-colors duration-300">{link.name}</a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
