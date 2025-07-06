import React from 'react';

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nitjsrdrt',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 8.5a3.5 3.5 0 11-.001 7.001A3.5 3.5 0 0112 8.5zm5-2a1 1 0 110 2 1 1 0 010-2zM12 10a2 2 0 100 4 2 2 0 000-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/driftracingteam/',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341a53.61 53.61 0 1 1 53.61-53.61 53.61 53.61 0 0 1-53.61 53.61zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.5-58.4-23.7 0-37.8 16-44 31.4-2.3 5.5-2.8 13.2-2.8 20.9V448h-92.4s1.2-270.8 0-298.1h92.4v42.3a91.3 91.3 0 0 1 83.1-45.8c60.6 0 106.1 39.6 106.1 124.7V448z" />
      </svg>
    ),
  },
  {
  name: 'Gmail',
  url: 'mailto:driftracingteam@nitjsr.ac.in',
  icon: (
    <svg
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  ),
}
];

const helpfulLinks = [
  { text: 'Our Team', href: '/team' },
  { text: 'Cars', href: '/cars' },
  { text: 'Achievements', href: '/achievements' },
  { text: 'Sponsors', href: '/sponsors' },
  { text: 'Gallery', href: '/gallery' },
];

const Footer = () => {
  return (
    <div className="bg-[#fefcf7] text-[#2c2c2c] border-t border-[#e0d9d0]">
      <footer className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand & Social */}
          <div>
            <h2 className="text-xl font-bold text-[#5a5047] mb-4">DRIFT Racing Team</h2>
            <p className="text-[#5a5047] mb-4">
              NIT Jamshedpur's official F3 student racing team revolutionizing electric mobility in India.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a5825f] hover:text-[#8d6d4b] transition"
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#2c2c2c] mb-4">Helpful Links</h3>
            <ul className="space-y-3">
              {helpfulLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="text-[#5a5047] hover:text-[#8d6d4b] transition">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#2c2c2c] mb-4">Contact Us</h3>
            <ul className="space-y-2 text-[#5a5047] text-sm">
              <li>Email: driftracingteam@nitjsr.ac.in</li>
              <li>Location: NIT Jamshedpur, Jamshedpur, Jharkhand, 831014, India</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-6 border-t border-[#e0d9d0] text-sm text-[#5a5047] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2025 DRIFT RACING TEAM. All rights reserved.</p>
          <p>
            Developed by <span className="font-medium">DRT WEB TEAM</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
