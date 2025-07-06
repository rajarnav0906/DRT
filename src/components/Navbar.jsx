import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo_drt.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    ['Home', '/'],
    ['Team', '/team'],
    ['Competitions', '/competitions'],
    ['Achievements', '/achievements'],
    ['Sponsors', '/sponsors'],
    ['Gallery', '/gallery'],
    ['Contact Us', '/contact'],
  ];

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fffaf4]/90 backdrop-blur-md border-b border-[#e0d9d0] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="DRIFT Racing Team"
            className="h-10 sm:h-12 object-contain"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-50"
          aria-label="Toggle Menu"
        >
          <div className="flex flex-col justify-center items-center z-200 w-8 h-8">
            <span
              className={`w-6 h-0.5 bg-[#5a5047] transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#5a5047] my-1 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#5a5047] transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map(([name, path]) => (
            <Link
              key={name}
              to={path}
              className="relative group text-[#5a5047] hover:text-[#a5825f] text-sm font-semibold uppercase tracking-wide transition"
            >
              {name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#a5825f] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#fffaf4] flex flex-col justify-center items-center space-y-6 px-4 text-center">
          {navLinks.map(([name, path]) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className="text-[#2c2c2c] text-xl font-semibold uppercase hover:text-[#a5825f] transition"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
