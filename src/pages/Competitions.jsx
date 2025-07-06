import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Competitions = () => {
  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#2c2c2c]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-[#a5825f] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#a5825f]/90 to-[#8d6d4b] opacity-90"></div>
        <div className="container mx-auto px-6 py-32 relative z-10">
          <h1 className="text-5xl font-bold mb-4">The Competition</h1>
          <div className="w-20 h-1 bg-[#f4eee8] mb-6"></div>
          <p className="text-xl max-w-3xl">
            Experience the pinnacle of student motorsport engineering through prestigious national and international competitions.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        {/* SUPRA SAE INDIA */}
        <CompetitionBlock
          title="SUPRA SAE INDIA"
          description="SUPRA SAE INDIA is a prestigious national-level engineering competition organized annually by SAE INDIA. It challenges student teams from engineering institutions across India to design, build, and race their own Formula-style race cars. The event serves as a platform to demonstrate creativity, technical prowess, and practical engineering skills, preparing students for the automotive and motorsport industries."
          highlights={[
            "Held at Buddh International Circuit or similar top-tier racetracks",
            "Participation from 100+ colleges across India",
            "Evaluation of design, innovation, and safety",
            "Prepares students for mobility engineering careers"
          ]}
          features={[
            "In-depth design review",
            "Cost-efficiency analysis",
            "Business strategy presentation",
            "Dynamic performance testing"
          ]}
        />

        {/* Formula Bharat */}
        <CompetitionBlock
          title="Formula Bharat"
          description="Formula Bharat is a premier Indian engineering design competition modeled after the global Formula Student series. It challenges university teams across India to design, fabricate, and validate a Formula-style vehicle. It promotes innovation, teamwork, and application of engineering theory."
          highlights={[
            "Held at Kari Motor Speedway, Coimbatore",
            "Participation from 70+ teams",
            "Emphasizes safety and real-world engineering"
          ]}
          features={[
            "Acceleration testing",
            "Skidpad performance",
            "Endurance evaluation"
          ]}
        />

        {/* ISIE HVC */}
        <CompetitionBlock
          title="ISIE HVC"
          description="ISIE HVC, by the Imperial Society of Innovative Engineers (ISIE), is India’s leading electric/hybrid vehicle competition. It challenges students to design and build energy-efficient vehicles with real-world challenges and clean mobility focus."
          highlights={[
            "Hosted at Buddh Circuit and regional venues",
            "Participation from 100+ institutions",
            "Supports Make in India and Skill India initiatives"
          ]}
          features={[
            "Acceleration test",
            "Skidpad challenge",
            "Autocross",
            "Endurance race"
          ]}
        />
      </div>

      <Footer />
    </div>
  );
};

// Reusable block for each competition
const CompetitionBlock = ({ title, description, highlights, features }) => (
  <div className="mb-20 group hover:-translate-y-1 transition duration-300">
    <h2 className="text-3xl font-bold mb-6 text-[#2c2c2c] group-hover:text-[#a5825f] transition-colors duration-300">
      {title}
    </h2>
    <div className="bg-white rounded-xl shadow-md p-8 border border-[#e6dfd6]">
      <p className="text-[#5a5047] mb-6">{description}</p>
      <div className="grid md:grid-cols-2 gap-8">
        <BulletCard title="Competition Highlights" items={highlights} />
        <BulletCard title="Event Features" items={features} />
      </div>
    </div>
  </div>
);

// Highlight/Feature Box
const BulletCard = ({ title, items }) => (
  <div className="bg-[#f8f5f0] hover:bg-[#f4eee8] transition p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-4 text-[#a5825f]">{title}</h3>
    <ul className="space-y-3 text-[#5a5047]">
      {items.map((item, index) => (
        <li key={index} className="flex items-start space-x-3">
          <div className="w-2 h-2 mt-2 rounded-full bg-[#a5825f]"></div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Competitions;
