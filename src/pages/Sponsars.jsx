import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import brochure from '../assets/drt_brochure.pdf';
import solidworks from '../assets/images/sponsor1.png';
import ansys from '../assets/images/sponsor2.png';
import runtoto from '../assets/images/sponsor3.jpeg';
import govoltmotors from '../assets/images/sponsor4.jpeg'

const Sponsors = () => {
  return (
    <div className="bg-[#fffaf4] text-[#2c2c2c]">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 text-[#2c2c2c]">Our Sponsors</h1>
        <p className="text-[#5a5047] text-lg">
          We're proud to be backed by industry-leading innovators who share our passion for excellence in engineering and motorsport.
        </p>
      </section>

      {/* Main Sponsors */}
      <section className="py-12 bg-[#fefcf7]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 items-start">
          {[
            {
              name: 'SolidWorks',
              logo: solidworks,
              description: 'SolidWorks provides industry-leading 3D CAD design software and solutions for every aspect of your development process.',
              link: 'https://www.solidworks.com/'
            },
            {
              name: 'Ansys',
              logo: ansys,
              description: 'Ansys is a global leader in engineering simulation software for product design, testing, and operation.',
              link: 'https://www.ansys.com/'
            },
            {
              name: 'RunTOTO',
              logo: runtoto,
              description: 'RunTOTO delivers high-performance powertrain solutions optimized for electric racing and endurance efficiency.',
              link: 'https://www.runtoto.com/'
            },
            { 
  name: 'GO VOLT Motors',
  logo: govoltmotors,
  description: 'GO VOLT Motors pioneers cutting-edge electric vehicle technology, empowering sustainable and high-performance mobility solutions.',
  link: 'https://www.indiamart.com/govoltmotors/profile.html?srsltid=AfmBOopwMpRs6hEO4i5vRjW0sd67HC6jc0z1MwC2ZAUb2daYSZjfYWfw'
}

          ].map((sponsor, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 text-center transition hover:shadow-xl">
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img src={sponsor.logo} alt={sponsor.name} className="mx-auto h-28 object-contain mb-4" />
              </a>
              <h2 className="text-xl font-semibold mb-2 text-[#5a5047]">{sponsor.name}</h2>
              <p className="text-sm text-[#5a5047] leading-relaxed">{sponsor.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Sponsor Us Section */}
      <section className="py-20 bg-gradient-to-b from-[#f3eee7] to-[#fffaf4] text-center px-6">
        <h2 className="text-4xl font-bold mb-6 text-[#2c2c2c]">Why Sponsor Us?</h2>
        <p className="max-w-3xl mx-auto text-[#5a5047] text-lg">
          As the official Formula Student electric team of NIT Jamshedpur, we represent the nation in elite national and international events like ISIE, Formula Bharat, and FSS. Partnering with us means exposure, brand integration, and access to a growing ecosystem of innovation and engineering talent.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold text-[#2c2c2c] mb-4">Want to partner with us?</h3>
        <p className="text-[#5a5047] mb-6">Reach out to us to explore collaboration opportunities or download our sponsorship brochure below.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="/contact"
            className="bg-[#a5825f] hover:bg-[#8d6d4b] text-white font-medium px-6 py-3 rounded-md transition shadow"
          >
            Contact Us
          </a>
          <a
            href={brochure}
            download
            className="border-2 border-[#a5825f] text-[#a5825f] hover:bg-[#a5825f] hover:text-white font-medium px-6 py-3 rounded-md transition shadow"
          >
            Download Brochure
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsors;
