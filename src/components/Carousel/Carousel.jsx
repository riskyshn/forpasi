import { useState, useEffect } from 'react';
import '../styles/carousel.css';
import ImageA from '../../assets/carousel-1.jpg';
import ImageB from '../../assets/carousel-2.jpg';
import ImageC from '../../assets/carousel-3.jpg';
import { useLanguage } from '../../contexts/LanguageContext';
const images = [
  { 
    src: ImageA, 
    alt: 'Gambar 1', 
    text: { 
      en: 'Welcome to Forpasi', 
      id: 'Selamat Datang di Forpasi' 
    }
  },
  { 
    src: ImageB, 
    alt: 'Gambar 2', 
    text: { 
      en: 'Explore Our Services', 
      id: 'Jelajahi Layanan Kami' 
    }
  },
  { 
    src: ImageC, 
    alt: 'Gambar 3', 
    text: { 
      en: 'Join Us Now', 
      id: 'Bergabunglah Bersama Kami' 
    }
  }
];

const Carousel = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="carousel-image"
        />

        <div className="carousel-text">
          {images[currentIndex].text[language]}
        </div>

        <button className="carousel-btn prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-btn next" onClick={nextSlide}>&#10095;</button>
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
