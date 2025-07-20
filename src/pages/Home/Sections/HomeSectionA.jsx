import React, { useEffect } from 'react';
import '../../styles/homeSectionA.css';
import { useLanguage } from '../../../contexts/LanguageContext';

const HomeSectionA = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const content = {
    en: {
      heading: 'Welcome to Forpasi Funding Initiative',
      paragraphs: [
        'We empower communities through sustainable funding and collaborative projects. By connecting organizations, communities, and individuals, we create real-world solutions for environmental and social challenges.',
        'Our funding programs are designed to foster innovation, support local initiatives, and scale impactful ideas. Through strategic partnerships and collective effort, we envision a future where every contribution drives lasting change.',
        'Join a network of changemakers and stakeholders who believe in building a better world through impactful funding and community empowerment.'
      ],
      features: [
        { icon: '🤝', title: 'Collaborative Partnerships', desc: 'We build bridges between sectors to maximize impact.' },
        { icon: '💡', title: 'Innovation Support', desc: 'Funding innovative ideas that address environmental and social needs.' },
        { icon: '🌍', title: 'Sustainable Impact', desc: 'Creating solutions that benefit communities and the planet.' },
        { icon: '📈', title: 'Capacity Building', desc: 'Strengthening local capacities to sustain long-term growth.' }
      ],
      button: 'Join Us Now'
    },
    id: {
      heading: 'Selamat Datang di Inisiatif Pendanaan Forpasi',
      paragraphs: [
        'Kami memberdayakan komunitas melalui pendanaan berkelanjutan dan proyek kolaboratif. Dengan menghubungkan organisasi, komunitas, dan individu, kami menciptakan solusi nyata bagi tantangan lingkungan dan sosial.',
        'Program pendanaan kami dirancang untuk mendorong inovasi, mendukung inisiatif lokal, dan memperbesar dampak ide-ide yang berpengaruh. Melalui kemitraan strategis dan upaya kolektif, kami membayangkan masa depan di mana setiap kontribusi mendorong perubahan yang berkelanjutan.',
        'Bergabunglah dalam jaringan pembuat perubahan dan pemangku kepentingan yang percaya pada pembangunan dunia yang lebih baik melalui pendanaan yang berdampak dan pemberdayaan masyarakat.'
      ],
      features: [
        { icon: '🤝', title: 'Kemitraan Kolaboratif', desc: 'Membangun jembatan antar sektor untuk memaksimalkan dampak.' },
        { icon: '💡', title: 'Dukungan Inovasi', desc: 'Mendanai ide-ide inovatif untuk kebutuhan lingkungan dan sosial.' },
        { icon: '🌍', title: 'Dampak Berkelanjutan', desc: 'Menciptakan solusi yang bermanfaat bagi komunitas dan planet.' },
        { icon: '📈', title: 'Penguatan Kapasitas', desc: 'Menguatkan kapasitas lokal untuk pertumbuhan jangka panjang.' }
      ],
      button: 'Bergabung Sekarang'
    }
  };

  const currentContent = content[language];

  return (
    <section className="home-section reveal">
      <div className="glass-card">
        <h1>{currentContent.heading}</h1>
        {currentContent.paragraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}

        <div className="features">
          {currentContent.features.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        <button className="cta-button">{currentContent.button}</button>
      </div>
    </section>
  );
};

export default HomeSectionA;
