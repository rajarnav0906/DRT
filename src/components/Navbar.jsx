import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Menu and Close icons
import logo from '../assets/images/logo_drt.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fffaf4] shadow-md border-b border-[#e0d9d0]/50'
          : 'bg-[#fffaf4]/90'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={logo}
            alt="DRIFT Racing Team"
            className="h-10 sm:h-12 object-contain transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1 xl:space-x-2">
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

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-[#5a5047] hover:text-[#a5825f] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        } bg-[#fffaf4] px-4 pb-4`}
      >
        {navLinks.map(([name, path]) => (
          <Link
            key={name}
            to={path}
            className={`block py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
              location.pathname === path
                ? 'text-[#a5825f]'
                : 'text-[#5a5047] hover:text-[#a5825f]'
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
