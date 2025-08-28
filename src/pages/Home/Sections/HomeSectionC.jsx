import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import '../../styles/homeSectionC.css';

const HomeSectionC = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: "Ingin berpartisipasi langsung?",
      subtitle: "Kami mempersiapkan kegiatan bagi kalian yang berminat berkontribusi untuk mendorong sistem persampahan.",
      buttons: [
        { text: "Jadi Relawan Umum", link: "https://www.indorelawan.org/organization/64f53040c147a300219891ec", primary: true },
        { text: "Jadi Koordinator Wilayah", link: "https://docs.google.com/forms/d/e/1FAIpQLSe01Zv2iMHGXXNeM7qbJNxSGIOIXD2LCTVGwg5x9kMnIBsZmA/viewform" },
        { text: "Join Grup WA", link: "https://www.instagram.com/forpasi_id/?hl=en" }
      ]
    },
    en: {
      title: "Want to participate directly?",
      subtitle: "We provide activities for those who want to contribute to improving the waste management system.",
      buttons: [
        { text: "Become a Volunteer", link: "https://www.indorelawan.org/organization/64f53040c147a300219891ec", primary: true },
        { text: "Become a Regional Coordinator", link: "https://docs.google.com/forms/d/e/1FAIpQLSe01Zv2iMHGXXNeM7qbJNxSGIOIXD2LCTVGwg5x9kMnIBsZmA/viewform" },
        { text: "Join WhatsApp Group", link: "https://www.instagram.com/forpasi_id/?hl=en" }
      ]
    }
  };

  const currentContent = content[language] || content.id;

  return (
    <section className="home-section-c">
      <div className="parallax-bg">
        <div className="cta-overlay">
          <div className="cta-content">
            <h2 className="cta-title">{currentContent.title}</h2>
            <p className="cta-subtitle">{currentContent.subtitle}</p>

            <div className="cta-buttons">
              {currentContent.buttons.map((btn, index) => (
                <a
                  key={index}
                  href={btn.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btn.primary ? "cta-button-primary" : "cta-button-secondary"}
                >
                  {btn.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionC;
