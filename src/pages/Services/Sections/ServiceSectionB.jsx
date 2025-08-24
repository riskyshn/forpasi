import React from 'react';
import '../../styles/serviceSectionB.css';
import { useLanguage } from '../../../contexts/LanguageContext';

const ServiceSectionB = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Why Choose Forpasi Services?',
      description: 'We deliver futuristic and adaptive services designed to accelerate your mission with innovation and strategic precision.',
      features: [
        {
          icon: '🚀',
          title: 'Future-Proof Strategies',
          desc: 'Stay ahead with solutions designed to adapt to evolving challenges and opportunities.'
        },
        {
          icon: '🔒',
          title: 'Secure & Transparent',
          desc: 'Every process is backed with transparency and cutting-edge security protocols.'
        },
        {
          icon: '⚙️',
          title: 'Customizable Tools',
          desc: 'Tailored tools that align perfectly with your organizational needs.'
        }
      ]
    },
    id: {
      title: 'Mengapa Memilih Layanan Forpasi?',
      description: 'Kami menyediakan layanan futuristik dan adaptif yang dirancang untuk mempercepat misi Anda dengan inovasi dan presisi strategis.',
      features: [
        {
          icon: '🚀',
          title: 'Strategi Tahan Masa Depan',
          desc: 'Tetap terdepan dengan solusi yang dirancang untuk menghadapi tantangan dan peluang yang terus berkembang.'
        },
        {
          icon: '🔒',
          title: 'Aman & Transparan',
          desc: 'Setiap proses didukung dengan transparansi dan protokol keamanan terkini.'
        },
        {
          icon: '⚙️',
          title: 'Alat yang Dapat Disesuaikan',
          desc: 'Alat yang disesuaikan sempurna dengan kebutuhan organisasi Anda.'
        }
      ]
    }
  };

  const current = content[language];

  return (
    <section className="service-b-section">
      <div className="glass-panel">
        <h2>{current.title}</h2>
        <p>{current.description}</p>

        <div className="features-b">
          {current.features.map((feature, idx) => (
            <div className="feature-b-card" key={idx}>
              <span className="icon-b">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionB;
