import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg']; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (event.key === 'ArrowLeft') {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="gallery">
      <img src={images[currentIndex]} alt="gallery" />
    </div>
  );
};

export default Gallery;
