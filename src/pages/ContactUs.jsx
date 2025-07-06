import React, { useRef, useEffect, useState } from 'react';
import { Phone, MapPin, Users } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// ✅ Custom SVG for Instagram
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.015 7.052.072 5.766.129 4.621.36 3.68 1.302 2.739 2.243 2.508 3.388 2.451 4.674.015 8.332 0 8.741 0 12c0 3.259.015 3.668.072 4.948.057 1.286.288 2.431 1.229 3.372.941.941 2.086 1.172 3.372 1.229C8.332 23.985 8.741 24 12 24s3.668-.015 4.948-.072c1.286-.057 2.431-.288 3.372-1.229.941-.941 1.172-2.086 1.229-3.372C23.985 15.668 24 15.259 24 12s-.015-3.668-.072-4.948c-.057-1.286-.288-2.431-1.229-3.372-.941-.941-2.086-1.172-3.372-1.229C15.668.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
  </svg>
);

// ✅ Custom SVG for LinkedIn
const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.761 0 5-2.24 5-5v-14c0-2.76-2.239-5-5-5zm-11.75 19h-2.5v-8h2.5v8zm-1.25-9.271c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.672 1.5 1.5s-.671 1.5-1.5 1.5zm12.25 9.271h-2.5v-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v4h-2.5v-8h2.5v1.104c.293-.673 1.164-1.104 2.083-1.104 1.381 0 2.5 1.119 2.5 2.5v5.5z"/>
  </svg>
);

// ✅ Team Contacts with Emails
const contacts = [
  { name: 'Paras Parimal', phone: '+91 8877023130', email: 'parasparimal41@gmail.com' },
  { name: 'Shrajjal Prakash', phone: '+91 7004867971', email: 'shrajjalprakash@gmail.com' },
  { name: 'Arnav Raj', phone: '+91 7484002701', email: 'arnavsharma0906@gmail.com' },
  { name: 'Priyanshu Raj', phone: '+91 9876543210', email: 'priyanshujha274@gmail.com' },
];

const ContactCard = ({ title, contacts }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => cardRef.current && observer.unobserve(cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`p-8 bg-white border border-[#e6dfd6] rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:scale-[1.02] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-[#a5825f] rounded-full flex items-center justify-center mr-4">
          <Users className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-bold text-[#2c2c2c]">{title}</h4>
      </div>

      <div className="space-y-6 mb-8">
        {contacts.map((contact, i) => (
          <div key={i} className="group">
            <h5 className="font-semibold text-lg text-[#2c2c2c] mb-2 group-hover:text-[#a5825f] transition">
              {contact.name}
            </h5>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center text-[#5a5047] hover:text-[#a5825f] transition transform hover:translate-x-2 mb-1"
            >
              <Phone className="w-4 h-4 mr-3" />
              <span>{contact.phone}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-[#5a5047] hover:text-[#a5825f] underline"
            >
              {contact.email}
            </a>
          </div>
        ))}
      </div>

      <div className="border-t pt-6 text-center">
        <h5 className="text-lg font-semibold text-[#2c2c2c] mb-4">Follow DRT</h5>
        <div className="flex justify-center gap-6 text-[#a5825f]">
          <a href="https://www.instagram.com/nitjsrdrt" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/company/driftracingteam/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

const MapSection = () => {
  const mapRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (mapRef.current) observer.observe(mapRef.current);
    return () => mapRef.current && observer.unobserve(mapRef.current);
  }, []);

  return (
    <div
      ref={mapRef}
      className={`bg-[#f3eee7] p-8 md:p-12 lg:px-16 lg:py-20 text-[#2c2c2c] rounded-xl shadow-md transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mx-auto max-w-xl text-center mb-6">
        <div className="flex items-center justify-center mb-3">
          <MapPin className="w-8 h-8 mr-2 text-[#a5825f]" />
          <h2 className="text-3xl font-bold">Visit Us</h2>
        </div>
        <p className="text-[#5a5047]">DRIFT RACING TEAM WORKSHOP</p>
      </div>
      <div className="w-full max-w-2xl">
        <iframe
          className="border-0 rounded-lg shadow-lg w-full transition duration-300 hover:scale-[1.02]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.0288852321883!2d86.14154107577348!3d22.77701737936895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%20Jamshedpur%20(NIT%20Jamshedpur)!5e0!3m2!1sen!2sin!4v1720172100952!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          title="NIT Jamshedpur Location"
        />
      </div>
    </div>
  );
};


const Contact = () => {
  return (
    <div className="bg-[#fffaf4] text-[#2c2c2c] min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-[#5a5047] text-lg max-w-2xl mx-auto">
            Get in touch with our racing team for any queries or collaborations.
          </p>
        </div>
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <MapSection />
          <ContactCard title="Team Contacts" contacts={contacts} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
