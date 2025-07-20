import React from 'react';
import '../../styles/homeSectionB.css';
import { useLanguage } from '../../../contexts/LanguageContext';

const HomeSectionB = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Empower Impactful Change with Forpasi',
      subtitle: 'At Forpasi, we bridge the gap between visionary ideas and sustainable funding. Join a dynamic platform where organizations and individuals unite to create lasting change within their communities.',
      features: [
        { icon: '🔍', title: 'Transparent Funding Process', desc: 'Ensuring every contribution is accountable and traceable.' },
        { icon: '🤝', title: 'Trusted Partnerships', desc: 'We collaborate with reputable partners to maximize impact.' },
        { icon: '📊', title: 'Data-Driven Impact', desc: 'Measuring success through clear data insights and analytics.' },
      ],
      button: 'Join the Movement'
    },
    id: {
      title: 'Memberdayakan Perubahan yang Berdampak dengan Forpasi',
      subtitle: 'Di Forpasi, kami menjembatani kesenjangan antara ide visioner dan pendanaan berkelanjutan. Bergabunglah dengan platform dinamis di mana organisasi dan individu bersatu untuk menciptakan perubahan yang langgeng di komunitas mereka.',
      features: [
        { icon: '🔍', title: 'Proses Pendanaan Transparan', desc: 'Memastikan setiap kontribusi dapat dipertanggungjawabkan dan dapat dilacak.' },
        { icon: '🤝', title: 'Kemitraan Terpercaya', desc: 'Kami berkolaborasi dengan mitra terpercaya untuk memaksimalkan dampak.' },
        { icon: '📊', title: 'Dampak Berbasis Data', desc: 'Mengukur kesuksesan melalui wawasan dan analitik data yang jelas.' },
      ],
      button: 'Bergabung dengan Gerakan Ini'
    }
  };

  const current = content[language];

  return (
    <section className="home-section-b">
      <div className="section-b-content">
        <div className="text-content">
          <h2 className="fade-in">{current.title}</h2>
          <p className="fade-in-delay">{current.subtitle}</p>

          <div className="features-b">
            {current.features.map((feature, index) => (
              <div className="feature-item zoom-in" key={index}>
                <span role="img" aria-label="icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>

          <button className="cta-button-b fade-in-delay">{current.button}</button>
        </div>

        <div className="image-content slide-in-right">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Empowering Communities" />
        </div>
      </div>
    </section>
  );
};

export default HomeSectionB;
