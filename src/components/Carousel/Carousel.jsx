import { useState, useEffect } from 'react';
import '../styles/carousel.css';
import ImageA from '../../assets/forpasi-aset-1.JPEG';
import ImageB from '../../assets/forpasi-aset-1.JPEG';
import ImageC from '../../assets/forpasi-aset-1.JPEG';
import { useLanguage } from '../../contexts/LanguageContext';
const images = [
  { 
    src: ImageA, 
    alt: 'Gambar 1', 
    text: { 
      en: 'Protecting the environment is a form of defending the country', 
      id: 'Jaga lingkungan adalah bentuk bela Negara' 
    }
  },
  { 
    src: ImageB, 
    alt: 'Gambar 2', 
    text: { 
      en: 'Nurturing Hope Towards a Sustainable Indonesia', 
      id: 'Merawat Asa Menuju Indonesia Lestari' 
    }
  },
  { 
    src: ImageC, 
    alt: 'Gambar 3', 
    text: { 
      en: 'Moderate constructive and non-partisan waste discussions', 
      id: 'Memoderasi diskusi persampahan yang konstruktif dan non-partisan' 
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
