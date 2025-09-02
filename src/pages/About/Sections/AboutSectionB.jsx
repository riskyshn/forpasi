import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import '../../styles/aboutSectionB.css';

const AboutSectionB = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: "Mengapa Memilih Forpasi?",
      desc: "Kami memadukan kepemimpinan visioner dengan teknologi mutakhir untuk mendorong pertumbuhan berkelanjutan dan dampak sosial.",
      grid: [
        {
          title: "Solusi Inovatif",
          desc: "Kami menghadirkan platform pendanaan generasi berikutnya untuk para pemikir maju.",
        },
        {
          title: "Kolaborasi Tanpa Batas",
          desc: "Terhubung dengan mitra, pemangku kepentingan, dan komunitas di seluruh dunia dengan mudah.",
        },
        {
          title: "Analitik Real-Time",
          desc: "Insight berbasis data untuk memantau, mengevaluasi, dan meningkatkan dampak Anda secara efektif.",
        },
      ],
      cta: "Ubah Visi Anda Menjadi Kenyataan Bersama Forpasi",
      btn: "Mulai Sekarang",
    },
    en: {
      title: "Why Choose Forpasi?",
      desc: "We combine visionary leadership with cutting-edge technology to drive sustainable growth and social impact.",
      grid: [
        {
          title: "Innovative Solutions",
          desc: "We deliver next-gen funding platforms tailored for forward-thinkers.",
        },
        {
          title: "Seamless Collaboration",
          desc: "Connect with partners, stakeholders, and communities worldwide effortlessly.",
        },
        {
          title: "Real-Time Analytics",
          desc: "Data-driven insights to monitor, evaluate, and scale your impact effectively.",
        },
      ],
      cta: "Transform Your Vision into Reality with Forpasi",
      btn: "Get Started",
    },
  };

  const t = content[language] || content.en;

  return (
    <section className="about-section-b">
      <div className="about-b-hero">
        <h2>{t.title}</h2>
        <p>{t.desc}</p>
      </div>

      <div className="about-b-grid">
        {t.grid.map((item, idx) => (
          <div key={idx} className="grid-item">
            <div className="image-placeholder">
              <p>(Space untuk foto di section ini menyusul)</p>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="about-b-cta">
        <h3>{t.cta}</h3>
        <button className="about-b-btn">{t.btn}</button>
      </div>
    </section>
  );
};

export default AboutSectionB;
