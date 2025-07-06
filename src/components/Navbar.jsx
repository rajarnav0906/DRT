import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo_drt.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    ['Home', '/'],
    ['Team', '/team'],
    ['Competitions', '/competitions'],
    ['Achievements', '/achievements'],
    ['Sponsors', '/sponsors'],
    ['Gallery', '/gallery'],
    ['Contact Us', '/contact'],
  ];

  // Handle scroll and lock
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fffaf4] shadow-md border-b border-[#e0d9d0]/50'
          : 'bg-[#fffaf4]/90'
      } backdrop-blur-md`}
    >
      {/* Top bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center z-50"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={logo}
            alt="DRIFT Racing Team"
            className="h-10 sm:h-12 object-contain transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map(([name, path]) => (
            <Link
              key={name}
              to={path}
              className={`relative group px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                location.pathname === path
                  ? 'text-[#a5825f]'
                  : 'text-[#5a5047] hover:text-[#a5825f]'
              }`}
            >
              {name}
              <span
                className={`absolute bottom-1 left-3 right-3 h-0.5 bg-[#a5825f] transition-all duration-300 ${
                  location.pathname === path
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden z-[1001] relative"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="flex flex-col justify-center items-center w-10 h-10">
            <span
              className={`block w-6 h-0.5 bg-[#5a5047] transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#5a5047] my-1.5 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#5a5047] transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay - moved outside container */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-[9999] bg-[#fffaf4] transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-4xl text-[#5a5047] hover:text-[#a5825f] transition-colors"
          aria-label="Close Menu"
        >
          &times;
        </button>

        {/* Links */}
        <div className="flex flex-col justify-center items-center h-full space-y-8 px-4 text-center">
          {navLinks.map(([name, path]) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-medium uppercase tracking-wider transition-colors ${
                location.pathname === path
                  ? 'text-[#a5825f]'
                  : 'text-[#2c2c2c] hover:text-[#a5825f]'
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
