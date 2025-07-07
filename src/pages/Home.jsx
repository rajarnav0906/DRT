import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import team from '../assets/images/gallery/p26.jpg';
import mechanical from '../assets/images/gallery/p13.jpg';
import chassis from '../assets/images/gallery/p16.jpg';
import suspension from '../assets/images/gallery/p21.jpg';
import organisational from '../assets/images/gallery/p31.jpg';

import c1 from '../assets/images/c1.jpg';
import c2 from '../assets/images/c2.jpg';
import c3 from '../assets/images/c3.jpg';
import c4 from '../assets/images/c4.jpg';
import c5 from '../assets/images/c5.jpg';
import c6 from '../assets/images/c6.jpg';
import c7 from '../assets/images/c7.jpg';
import c8 from '../assets/images/c8.jpg';
import c9 from '../assets/images/c9.jpg';
import c10 from '../assets/images/c10.jpg';
import c11 from '../assets/images/c11.jpg';
import c12 from '../assets/images/c12.jpg';
import c13 from '../assets/images/c13.jpg';
import c14 from '../assets/images/c14.jpg';
import c15 from '../assets/images/c15.jpg';
import c16 from '../assets/images/c16.jpg';
import brochure from '../assets/drt_brochure2.pdf';
import logo from '../assets/images/logo_drt.png';

const imageData = [
  { url: c1 }, { url: c2 }, { url: c3 }, { url: c4 },
  { url: c5 }, { url: c6 }, { url: c7 }, { url: c8 },
  { url: c9 }, { url: c10 }, { url: c11 }, { url: c12 },
  { url: c13 }, { url: c14 }, { url: c15 }, { url: c16 }
];

const Home = () => {
  const [positions, setPositions] = useState(imageData);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(prev =>
        prev.map(pos => ({
          ...pos,
          style: {
            animation: `float ${4 + Math.random() * 2}s ease-in-out infinite alternate`
          }
        }))
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-22 bg-[#fefcf7] text-[#2c2c2c] font-sans overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-[#fefcf7] overflow-hidden px-4">

          {/* Background Image Grid */}
         <div className="absolute inset-0 transform -skew-y-3 origin-top-left overflow-hidden">

            <div className="grid grid-cols-3 gap-1 sm:gap-2 w-full h-full p-2 sm:p-4 md:p-6 transform skew-y-3">
              {positions.slice(0, 9).map((img, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-center bg-cover w-full h-full min-h-[60px]"
                  style={{ 
                    backgroundImage: `url(${img.url})`, 
                    ...img.style,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content Card */}
          <div className="relative z-10 bg-white/80 md:bg-white/40 backdrop-blur-sm border border-white/30 shadow-xl p-6 sm:p-8 md:p-10 rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-2xl mx-2 text-center">
            <img 
              src={logo} 
              alt="DRT Logo" 
              className="h-10 sm:h-12 mx-auto mb-3 sm:mb-4" 
            />

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-[#1e1e1e] italic"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              DRIFT Racing Team
            </h1>

            <p className="text-[#2b2b2b] mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
              To achieve anything in this game, you must be prepared to dabble in the boundary of disaster, so keep drifting!!
            </p>

            <a
              href={brochure}
              download
              className="inline-block mt-2 sm:mt-4 border-2 border-[#1e1e1e] text-[#1e1e1e] hover:bg-[#a5825f] hover:border-[#a5825f] hover:text-white font-medium px-4 py-2 sm:px-6 sm:py-3 rounded-md transition shadow text-sm sm:text-base"
            >
              Download Brochure
            </a>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 sm:py-24 md:py-32 bg-[#f3eee7] border-t border-[#e0d9d0]" id="ourmission">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-[#2c2c2c]">
              Our Mission
            </h2>
            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: 'Electrifying Innovation',
                  desc: 'Student-led team building and racing electric Formula F3 cars for ISIE and SAE events.',
                  color: 'bg-[#dec7b1]'
                },
                {
                  title: 'Speeding Towards Excellence',
                  desc: 'Pushing boundaries of performance and design with every competition.',
                  color: 'bg-[#ead1c2]'
                },
                {
                  title: "Driving India's Green Revolution",
                  desc: 'Promoting sustainable, high-performance mobility in India and beyond.',
                  color: 'bg-[#d8e3dc]'
                },
                {
                  title: 'Engineering the Future',
                  desc: 'Harnessing teamwork and technology to shape tomorrow\'s mobility.',
                  color: 'bg-[#ffe8cc]'
                }
              ].map((card, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-xl p-4 sm:p-6 border border-[#e4dcd3] shadow hover:shadow-md transition"
                >
                  <div className={`${card.color} text-[#2c2c2c] w-fit px-3 py-1 rounded mb-3 sm:mb-4 font-bold text-sm`}>
                    ★
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-[#2c2c2c]">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a5047]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#fffdf8] px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-[#2c2c2c]">
                The Team
              </h2>
              <p className="text-[#5a5047] mb-4 sm:mb-6 text-sm sm:text-base">
                Driving Innovation, Powering Sustainability: DRIFT Racing Team.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-[#4b4037] text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Leading India in F3 Electric with sustainable tech</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Pioneering electric mobility for the next generation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Making India proud on global tracks</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={team} 
                alt="Team" 
                className="rounded-xl w-full h-auto max-h-[400px] object-cover shadow-lg" 
              />
            </div>
          </div>
        </section>

        {/* Divisions Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#f3eee7] px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#2c2c2c]">
              Our Divisions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { 
                  title: 'Mechanical', 
                  image: mechanical, 
                  desc: 'Designing and optimizing machine elements for performance and reliability.' 
                },
                { 
                  title: 'Chassis', 
                  image: chassis, 
                  desc: 'Engineering the structural backbone for safety, strength, and agility.' 
                },
                { 
                  title: 'Suspension', 
                  image: suspension, 
                  desc: 'Tuning ride dynamics for control, comfort, and handling precision.' 
                },
                { 
                  title: 'Organisational', 
                  image: organisational, 
                  desc: 'Coordinating logistics, outreach, and management to drive the team forward.' 
                }
              ].map((div, i) => (
                <div 
                  key={i} 
                  className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow border border-[#e4dcd3]"
                >
                  <img 
                    src={div.image} 
                    alt={div.title} 
                    className="w-full sm:w-1/2 h-48 sm:h-auto object-cover" 
                  />
                  <div className="p-4 flex flex-col justify-center">
                    <h3 className="font-semibold text-[#2c2c2c] text-base sm:text-lg">
                      {div.title}
                    </h3>
                    <p className="text-[#5a5047] mt-1 sm:mt-2 text-xs sm:text-sm">
                      {div.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#fffdf8] border-t border-[#e0d9d0] px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-[#2c2c2c]">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { 
                  title: 'FSS INDIA 2022', 
                  position: '1st', 
                  note: 'EV Category & Vehicle Design', 
                  stars: 4 
                },
                { 
                  title: 'FORMULA IMPERIAL 2021', 
                  position: '1st', 
                  note: '1st in Design', 
                  stars: 4 
                },
                { 
                  title: 'FORMULA SAE 2018', 
                  position: '2nd', 
                  note: '2nd among all IITs & NITs', 
                  stars: 4 
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-xl p-4 sm:p-6 shadow border border-[#e4dcd3]"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-[#2c2c2c]">
                    {item.title}
                  </h3>
                  <p className="text-[#5a5047] text-xs sm:text-sm mb-2">
                    {item.note}
                  </p>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#a5825f]">
                    {item.position}
                  </div>
                  <div className="flex justify-center mt-1 sm:mt-2 text-yellow-500">
                    {Array(item.stars).fill(0).map((_, idx) => (
                      <svg 
                        key={idx} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-current" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927a1 1 0 011.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.97 0 1.37 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.92-.755 1.687-1.54 1.118L10 13.347l-2.8 2.034c-.785.57-1.84-.198-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.566 8.72c-.782-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;