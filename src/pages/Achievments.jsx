import React, { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';   
import Navbar from '../components/Navbar';
import img1 from '../assets/images/c14.jpg'
import img2 from '../assets/images/c5.jpg'
import img3 from '../assets/images/c8.jpg'
import img4 from '../assets/images/c11.jpg'
import img5 from '../assets/images/c2.jpg'

const achievementsData = [
  {
    year: '2025',
    events: [{
      title: 'ISIE 2025',
      achievements: [
        { text: 'Successfully completed static round', type: 'star' },
        { text: 'Qualified Dynamic round', type: 'star' },
      ],
      image: img1
    }]
  },
  {
    year: '2022',
    events: [{
      title: 'FSS INDIA 2022',
      achievements: [
        { text: '1st rank in EV Category', type: 'gold' },
        { text: '1st rank in Vehicle Design', type: 'gold' },
        { text: 'Overall 7th position', type: 'special' },
      ],
      image: img2
    }]
  },
  {
    year: '2021',
    events: [{
      title: 'FORMULA IMPERIAL 2021',
      achievements: [
        { text: '1st position in design.', type: 'gold' },
        { text: 'Overall 4th position', type: 'special' }
      ],
      image: img3
    }]
  },
  {
    year: '2018',
    events: [{
      title: 'FORMULA SAE 2018',
      achievements: [
        { text: 'Overall 2nd in all IITs and NITs', type: 'special' }
      ],
      image: img4
    }]
  },
  {
    year: '2015',
    events: [{
      title: 'FORMULA SAE INDIA 2015',
      achievements: [
        { text: '6th in presentation and lightest car', type: 'special' }
      ],
      image: img5
    }]
  },
];

const getAwardIcon = (type) => {
  const icons = {
    gold: '🏆',
    silver: '🥈',
    bronze: '🥉',
    special: '⭐',
    tech: '⚡',
    design: '🎯',
    star: '🌟'
  };
  return icons[type] || '✅';
};

const getAwardColor = (type) => {
  const colors = {
    gold: 'text-yellow-500',
    silver: 'text-gray-400',
    bronze: 'text-amber-600',
    special: 'text-purple-500',
    tech: 'text-blue-500',
    design: 'text-green-500',
    star: 'text-[#a5825f]'
  };
  return colors[type] || 'text-neutral-500';
};

const TimelineItem = ({ year, events, index }) => {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`flex justify-start pt-10 md:pt-32 md:gap-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-12 w-12 absolute left-2 rounded-full bg-white border-4 border-[#e6dfd6] flex items-center justify-center shadow-lg">
          <div className="h-4 w-4 rounded-full bg-gradient-to-r from-[#a5825f] to-[#5a5047] animate-pulse" />
        </div>
        <h3 className="hidden md:block text-4xl md:pl-20 font-bold text-[#5a5047]">{year}</h3>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <h3 className="md:hidden text-3xl mb-6 font-bold text-[#5a5047]">{year}</h3>
        <div className="space-y-8">
          {events.map((event, i) => (
            <div key={i} className="group bg-white border border-[#e6dfd6] rounded-xl shadow-md hover:shadow-xl transition p-6 md:p-8">
              <h1 className="text-2xl font-bold mb-6 text-[#2c2c2c] group-hover:text-[#a5825f]">
                {event.title}
              </h1>
              <div className="mb-8 space-y-3">
                {event.achievements.map((ach, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-3 text-[#5a5047] text-sm md:text-base font-medium p-3 rounded-lg hover:bg-[#f7f2eb] transition transform hover:translate-x-2"
                  >
                    <span className={`text-lg ${getAwardColor(ach.type)}`}>
                      {getAwardIcon(ach.type)}
                    </span>
                    <span>{ach.text}</span>
                  </div>
                ))}
              </div>
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-inner">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrolled, 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#fffaf4] text-[#2c2c2c] relative">
      <Navbar />

      {/* Hero */}
      <section className="text-center py-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-[#2c2c2c]">Achievements</h1>
        <p className="text-[#5a5047]">
          A journey of excellence spanning over 16 years of racing innovation and competitive success.
        </p>

        {/* Scroll progress bar */}
        <div className="mt-10 max-w-md mx-auto">
          <div className="flex justify-between text-sm text-[#a5825f] mb-2">
            <span>Progress</span>
            <span>{Math.round(scrollProgress)}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#e6dfd6] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#a5825f] to-[#5a5047] transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </section>

      {/* Timeline Scroll Spark (fixed) */}
      <div 
        className="fixed left-8 top-40 w-0.5 z-0 bg-gradient-to-b from-transparent via-[#d8cfc4] to-transparent"
        style={{ height: 'calc(100vh - 10rem)' }}
      >
        <div 
          className="absolute top-0 w-full bg-gradient-to-b from-[#a5825f] to-[#5a5047] rounded-full shadow-md"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto pb-24 relative z-10">
        {achievementsData.map((data, idx) => (
          <TimelineItem key={data.year} {...data} index={idx} />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default Achievements;
