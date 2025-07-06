import React, { useState, useRef, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Import selected images
import p1 from '../assets/images/gallery/p1.jpg';
import p2 from '../assets/images/gallery/p2.jpg';
import p3 from '../assets/images/gallery/p3.jpg';
import p4 from '../assets/images/gallery/p4.jpg';
import p5 from '../assets/images/gallery/p5.jpg';
import p7 from '../assets/images/gallery/p7.jpg';
import p8 from '../assets/images/gallery/p8.jpg';
import p9 from '../assets/images/gallery/p9.jpg';
import p10 from '../assets/images/gallery/p10.jpg';
import p11 from '../assets/images/gallery/p11.jpg';
import p13 from '../assets/images/gallery/p13.jpg';
import p14 from '../assets/images/gallery/p14.jpg';
import p15 from '../assets/images/gallery/p15.jpg';
import p16 from '../assets/images/gallery/p16.jpg';
import p17 from '../assets/images/gallery/p17.jpg';
import p18 from '../assets/images/gallery/p18.jpg';
import p19 from '../assets/images/gallery/p19.jpg';
import p20 from '../assets/images/gallery/p20.jpg';
import p22 from '../assets/images/gallery/p22.jpg';
import p23 from '../assets/images/gallery/p23.jpg';
import p24 from '../assets/images/gallery/p24.jpg';
import p25 from '../assets/images/gallery/p25.jpg';
import p26 from '../assets/images/gallery/p26.jpg';
import p27 from '../assets/images/gallery/p27.jpg';
import p28 from '../assets/images/gallery/p28.jpg';
import p29 from '../assets/images/gallery/p29.jpg';
import p30 from '../assets/images/gallery/p30.jpg';
import p31 from '../assets/images/gallery/p31.jpg';
import p32 from '../assets/images/gallery/p32.jpg';
import p33 from '../assets/images/gallery/p33.jpg';
import p34 from '../assets/images/gallery/p34.jpg';
import p35 from '../assets/images/gallery/p35.jpg';
import p36 from '../assets/images/gallery/p36.jpg';
import p37 from '../assets/images/gallery/p37.jpg';
import p38 from '../assets/images/gallery/p38.jpg';
import p39 from '../assets/images/gallery/p39.jpg';
import p40 from '../assets/images/gallery/p40.jpg';
import p41 from '../assets/images/gallery/p41.jpg';
import p42 from '../assets/images/gallery/p42.jpg';
import p43 from '../assets/images/gallery/p43.jpg';
import p44 from '../assets/images/gallery/p44.jpg';
import p45 from '../assets/images/gallery/p45.jpg';
import p46 from '../assets/images/gallery/p46.jpg';
import p47 from '../assets/images/gallery/p47.jpg';
import p48 from '../assets/images/gallery/p48.jpg';
import p49 from '../assets/images/gallery/p49.jpg';
import p50 from '../assets/images/gallery/p50.jpg';
import p51 from '../assets/images/gallery/p51.jpg';

const allImages = [
  p1, p2, p3, p4, p5, p7, p8, p9, p10,
  p11, p13, p14, p15, p16, p17, p18, p19, p20,
  p22, p23, p24, p25, p26, p27, p28, p29, p30,
  p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,
  p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51,
];

// Shuffle images on load
const shuffledGallery = allImages
  .map((img) => ({ src: img, alt: 'Gallery Image' }))
  .sort(() => 0.5 - Math.random());

const GalleryImage = ({ image, index, onClick }) => {
  const imgRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold: 0.1 });

    if (imgRef.current) obs.observe(imgRef.current);
    return () => { if (imgRef.current) obs.unobserve(imgRef.current); };
  }, []);

  return (
    <div
      ref={imgRef}
      onClick={() => onClick(image)}
      className={`rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 bg-white cursor-pointer ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-60 object-cover transition duration-300"
      />
    </div>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    const current = shuffledGallery.findIndex((img) => img.src === selectedImage.src);
    const next = (current + 1) % shuffledGallery.length;
    setSelectedImage(shuffledGallery[next]);
  };

  const prevImage = () => {
    const current = shuffledGallery.findIndex((img) => img.src === selectedImage.src);
    const prev = (current - 1 + shuffledGallery.length) % shuffledGallery.length;
    setSelectedImage(shuffledGallery[prev]);
  };

  return (
    <div className="bg-[#fefcf7] min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#2c2c2c] mb-4">Gallery</h1>
          <p className="text-[#5a5047] text-lg max-w-2xl mx-auto">
            A glimpse into our journey, moments, and milestones
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {shuffledGallery.map((image, i) => (
            <GalleryImage key={i} image={image} index={i} onClick={openModal} />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-3xl">
              &times;
            </button>
            <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl">
              ‹
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-md"
            />
            <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl">
              ›
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
