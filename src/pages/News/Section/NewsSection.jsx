import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import '../../styles/newsSection.css';

const NewsSection = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: "Berita Terkini",
      readMore: "Baca Selengkapnya",
      articles: [
        {
          date: "30 Agustus 2025",
          title: "FORPASI Dorong Tata Kelola Sampah Nasional",
          snippet: "FORPASI mengadakan diskusi bersama pemangku kebijakan terkait pentingnya tata kelola sampah nasional yang terintegrasi.",
          link: "#"
        },
        {
          date: "15 Agustus 2025",
          title: "Peluncuran Program Edukasi Sampah",
          snippet: "Program edukasi sampah berbasis komunitas resmi diluncurkan di Jakarta, melibatkan lebih dari 20 organisasi mitra.",
          link: "#"
        },
        {
          date: "5 Agustus 2025",
          title: "Kolaborasi Strategis dengan Pemerintah Daerah",
          snippet: "FORPASI menjalin kerja sama strategis dengan beberapa pemerintah daerah untuk mendukung pengelolaan sampah regional.",
          link: "#"
        }
      ]
    },
    en: {
      title: "Latest News",
      readMore: "Read More",
      articles: [
        {
          date: "30 August 2025",
          title: "FORPASI Pushes for National Waste Governance",
          snippet: "FORPASI held a discussion with policymakers on the importance of integrated national waste management.",
          link: "#"
        },
        {
          date: "15 August 2025",
          title: "Waste Education Programme Launched",
          snippet: "The community-based waste education programme was officially launched in Jakarta, involving over 20 partner organisations.",
          link: "#"
        },
        {
          date: "5 August 2025",
          title: "Strategic Collaboration with Local Governments",
          snippet: "FORPASI partners with several local governments to support regional waste management initiatives.",
          link: "#"
        }
      ]
    }
  };

  const t = content[language] || content.id;

  return (
    <section className="news-section">
      <div className="news-container">
        <h2 className="news-title">{t.title}</h2>
        <div className="news-grid">
          {t.articles.map((art, idx) => (
            <div className="news-card fade-in" key={idx}>
              <div className="news-image-placeholder">
                <p>(Space untuk foto berita menyusul)</p>
              </div>
              <div className="news-content">
                <div className="news-date">{art.date}</div>
                <h3 className="news-headline">{art.title}</h3>
                <p className="news-snippet">{art.snippet}</p>
                {art.link && (
                  <a
                    href={art.link}
                    className="news-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.readMore}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
