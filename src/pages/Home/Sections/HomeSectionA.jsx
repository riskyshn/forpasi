import React, { useEffect } from 'react';
import '../../styles/homeSectionA.css';
import { useLanguage } from '../../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';  // <--- Tambahkan ini


const HomeSectionA = () => {
  const { language } = useLanguage();
  const navigate = useNavigate(); // <--- Hook untuk navigasi

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
      heading: 'FORPASI: Forum for a Sustainable Indonesia',
      paragraphs: [
        'FORPASI is a non-partisan platform for discussions and for voicing opinions from all stakeholders in Indonesia to decision-makers, aiming to raise awareness on waste issues and create better waste management systems.',
        'It moderates constructive and non-partisan discussions on waste management, ensuring diverse perspectives are heard.',
        'FORPASI is the first forum to bring ideas from the three presidential candidates in the 2024 election regarding waste issues.',
        'Through collaboration and active participation, FORPASI works to drive initiatives and policies for sustainable waste solutions.',
        'Together, we move towards a Cleaner and Sustainable Indonesia.'
      ],
      subheading: 'DRIVING WASTE SYSTEM CHANGE THROUGH VOLUNTEER ACTIVITIES',
      ourWork: 'Our Work',
      features: [
        { icon: '🌐', title: 'Digital Community & National Waste Network', image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-nature-helping-people-nature-s-concept-environment-earth-day-hands-nature-helping-159361634.jpg' },
        { icon: '📊', title: 'Research & Policy Advocacy', image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-nature-helping-people-nature-s-concept-environment-earth-day-hands-nature-helping-159361634.jpg' },
        { icon: '🎓', title: 'Education, Campaigns & Strategic Programs', image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-nature-helping-people-nature-s-concept-environment-earth-day-hands-nature-helping-159361634.jpg' }
      ],
      button: 'Join Us Now'
    },

    id: {
      heading: 'FORPASI: Forum Menuju Indonesia Lestari',
      paragraphs: [
        'FORPASI adalah wadah non-partisan untuk berdiskusi dan menyuarakan pendapat dari seluruh pihak di Indonesia kepada para pemangku kepentingan, guna meningkatkan kepedulian terhadap isu sampah dan menciptakan sistem pengelolaan sampah yang lebih baik.',
        'Memoderasi diskusi persampahan yang konstruktif dan non-partisan, memastikan berbagai sudut pandang dapat tersampaikan.',
        'FORPASI adalah forum pertama yang menghadirkan gagasan dari 3 calon presiden pada pemilu 2024 terkait isu persampahan.',
        'Melalui kolaborasi dan partisipasi aktif, FORPASI mendorong inisiatif dan kebijakan untuk solusi persampahan yang berkelanjutan.',
        'Bersama, kita bergerak menuju Indonesia yang Bersih dan Lestari.'
      ],
      subheading: 'MENDORONG PERUBAHAN SISTEM PERSAMPAHAN MELALUI AKTIVITAS KERELAWANAN',
      ourWork: 'Fokus Kegiatan',
      features: [
        { icon: '🌐', title: 'Komunitas Digital & Jaringan Persampahan Nasional', image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-nature-helping-people-nature-s-concept-environment-earth-day-hands-nature-helping-159361634.jpg' },
        { icon: '📊', title: 'Riset & Advokasi Kebijakan', image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-nature-helping-people-nature-s-concept-environment-earth-day-hands-nature-helping-159361634.jpg' },
        { icon: '🎓', title: 'Edukasi, Kampanye & Program Strategis', image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-nature-helping-people-nature-s-concept-environment-earth-day-hands-nature-helping-159361634.jpg' }
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

        {/* Subheading before features */}
        <h2 className="subheading">{currentContent.subheading}</h2>

        {/* Our Work Section */}
        <h2 className="our-work">{currentContent.ourWork}</h2>
        <div className="features">
          {currentContent.features.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <img src={feature.image} alt={feature.title} className="feature-image" />
            </div>
          ))}
        </div>

        <button 
        className="cta-button"
        onClick={() => navigate('/support-us')}
        >{currentContent.button}</button>
      </div>
    </section>
  );
};

export default HomeSectionA;
