import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import captain from '../assets/images/team/PARAS PARIMAL_ECM_CAPTAIN.png';
import viceCaptain from '../assets/images/team/Shrajjal_Prakash_ECM_Vice_captain.jpeg';
import manager from '../assets/images/team/Arnav_Raj_PIE_TEAM_MANAGER.jpg';
import techHead from '../assets/images/team/Priyanshu Raj _PIE_Technical Head .jpg';

import AKANSHA_ANAND from '../assets/images/team/AKANSHA ANAND_ME.jpg';
import Anshul_Khalkho from '../assets/images/team/Anshul Khalkho_ECM.jpg';
import Anubhuti_Pali from '../assets/images/team/Anubhuti Pali_ECM.jpg';
import Ashish_Pandey from '../assets/images/team/Ashish Pandey_EE.jpg';
import Ayush_Mishra from '../assets/images/team/Ayush Mishra_CE.jpg';
import Dheeraj_Gupta from '../assets/images/team/Dheeraj Gupta_ME.jpg';
import Kanishka from '../assets/images/team/Kanishka_ME.jpg';
import Lakshita from '../assets/images/team/Lakshita_ME.jpg';
import Pappu_Lal_Swami from '../assets/images/team/Pappu Lal Swami_ME.jpg';
import Pratik_Modi from '../assets/images/team/Pratik Modi_CE.jpg';
import Pratyush_Singh from '../assets/images/team/Pratyush Singh_EE.jpg';
import Raj_Aryan_Gupta from '../assets/images/team/Raj Aryan Gupta_ECM.jpg';
import Rajneet from '../assets/images/team/Rajneet_ME.jpg';
import Rishabh_Raj from '../assets/images/team/Rishabh Raj_EE.jpg';
import Roddur_Rajak from '../assets/images/team/Roddur Rajak_ME.jpg';
import Roshan_Sharma from '../assets/images/team/Roshan Sharma_ME.jpg';
import Shikhar_Kumar from '../assets/images/team/Shikhar Kumar_MME.jpg';
import Tanu_Priya from '../assets/images/team/Tanu Priya_ME.jpg';
import Urvashi_Rani from '../assets/images/team/Urvashi Rani_ME.jpg';
import Yuvraj_Gupta from '../assets/images/team/Yuvraj Gupta_CE.jpg';

const leadTeam = [
  {
    name: 'PARAS PARIMAL',
    role: 'CAPTAIN',
    image: captain,
    linkedin: 'https://www.linkedin.com/in/paras-parimal-975b0727b/',
    instagram: 'https://www.instagram.com/_4125_parimal_',
  },
  {
    name: 'SHRAJJAL PRAKASH',
    role: 'VICE CAPTAIN',
    image: viceCaptain,
    linkedin: 'https://www.linkedin.com/in/shrajjal-prakash-263b16246/',
    instagram: 'https://www.instagram.com/_shrajjal_',
  },
  {
    name: 'ARNAV RAJ',
    role: 'TEAM MANAGER & FINANCE HEAD',
    image: manager,
    linkedin: 'https://www.linkedin.com/in/arnav-raj-04211a216/',
    instagram: 'https://www.instagram.com/arnav_0906',
  },
  {
    name: 'PRIYANSHU RAJ',
    role: 'TECHNICAL HEAD',
    image: techHead,
    linkedin: 'https://www.linkedin.com/in/priyanshu-raj-4375a522b/',
    instagram: 'https://www.instagram.com/_priyansh_who',
  },
];

const otherMembers = [
  { name: 'Akansha Anand', role: 'MEMBER', image: AKANSHA_ANAND },
  { name: 'Anshul Khalkho', role: 'MEMBER', image: Anshul_Khalkho },
  { name: 'Anubhuti Pali', role: 'DESIGN ENGINEER', image: Anubhuti_Pali },
  { name: 'Ashish Pandey', role: 'MEMBER', image: Ashish_Pandey },
  { name: 'Ayush Mishra', role: 'MEMBER', image: Ayush_Mishra },
  { name: 'Dheeraj Gupta', role: 'MEMBER', image: Dheeraj_Gupta },
  { name: 'Kanishka', role: 'SPONSORSHIP COORDINATOR', image: Kanishka },
  { name: 'Lakshita', role: 'MEMBER', image: Lakshita },
  { name: 'Pappu Lal Swami', role: 'DESIGN ENGINEER', image: Pappu_Lal_Swami },
  { name: 'Pratik Modi', role: 'MEMBER', image: Pratik_Modi },
  { name: 'Pratyush Singh', role: 'MEMBER', image: Pratyush_Singh },
  { name: 'Raj Aryan Gupta', role: 'MEMBER', image: Raj_Aryan_Gupta },
  { name: 'Rajneet', role: 'MEMBER', image: Rajneet },
  { name: 'Rishabh Raj', role: 'MEMBER', image: Rishabh_Raj },
  { name: 'Roddur Rajak', role: 'MEMBER', image: Roddur_Rajak },
  { name: 'Roshan Sharma', role: 'MEMBER', image: Roshan_Sharma },
  { name: 'Shikhar Kumar', role: 'MEMBER', image: Shikhar_Kumar },
  { name: 'Tanu Priya', role: 'MEMBER', image: Tanu_Priya },
  { name: 'Urvashi Rani', role: 'MEMBER', image: Urvashi_Rani },
  { name: 'Yuvraj Gupta', role: 'MEMBER', image: Yuvraj_Gupta}
];

const Team = () => {
  return (
    <div className="bg-[#fffaf4] text-[#2c2c2c]">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-10 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-[#5a5047] text-lg max-w-2xl mx-auto">
            Behind every race and innovation is a team of passionate engineers and leaders shaping the future of mobility.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {leadTeam.map((member, i) => (
          <div
            key={i}
            className="relative bg-white border border-[#e0d9d0] rounded-lg shadow hover:shadow-md transition overflow-hidden group"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4 mb-4">
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-white hover:text-[#a5825f] transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.14 108.1c-29.8 0-53.14-24.34-53.14-53.14S23.34 1.82 53.14 1.82 106.28 26.16 106.28 55.96s-23.34 53.14-53.14 53.14zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.5-58.4-23.7 0-37.8 16-44 31.4-2.3 5.5-2.8 13.2-2.8 20.9V448H172.3V148.9h92.4v40.8c12.4-21.7 43.5-52.8 89.1-52.8 65.5 0 114.1 42.8 114.1 134.7V448z" />
                    </svg>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noreferrer" className="text-white hover:text-[#a5825f] transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 8.5a3.5 3.5 0 11-.001 7.001A3.5 3.5 0 0112 8.5zm5-2a1 1 0 110 2 1 1 0 010-2zM12 10a2 2 0 100 4 2 2 0 000-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-[#2c2c2c]">{member.name}</h3>
              <p className="text-[#a5825f] text-sm mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Team Members */}
      <section className="bg-[#f8f5f0] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center text-[#2c2c2c]">Team Members</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {otherMembers.map((member, i) => (
              <div
                key={i}
                className="group bg-white border border-[#e6dfd6] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-[#2c2c2c]">{member.name}</h3>
                  <p className="text-sm text-[#5a5047]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
