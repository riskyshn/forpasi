import React from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import "../../styles/supportUs.css";
import QRCode from "../../../assets/qr-code-temp.png"; // ganti ke QR Code asli

const SupportUsSection = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: "Jadilah Pejuang Lingkungan",
      subtitle: "Bersama FORPASI, Wujudkan Bumi Bersih dan Sehat",
      bank: "Transfer Bank AAAA (menyusul)",
      wa: "Konfirmasi ke WA admin (kontak menyusul)",
      merch: "Merchandise: Kaos FORPASI",
      merchLink: "#",
    },
    en: {
      title: "Be a Hero for the Environment",
      subtitle: "Together with FORPASI, Let's Build a Clean and Healthy Earth",
      bank: "Bank Transfer AAAA (coming soon)",
      wa: "Confirm via WhatsApp admin (contact coming soon)",
      merch: "Merchandise: FORPASI T-shirt",
      merchLink: "#",
    },
  };

  const t = content[language] || content.id;

  return (
    <section className="supportus-section">
      <div className="supportus-container">
        <h2 className="supportus-title">{t.title}</h2>
        <p className="supportus-subtitle">{t.subtitle}</p>

        <div className="supportus-main">
          {/* Ilustrasi Kampanye Lingkungan */}
          <div className="supportus-illustration">
            <div className="floating-icons">
              {/* Bumi */}
              <svg className="icon earth" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="#4CAF50" />
                <path d="M30 50 Q50 20 70 50 Q50 80 30 50 Z" fill="#81C784" />
              </svg>

              {/* Pohon */}
              <svg className="icon tree" viewBox="0 0 100 100">
                <rect x="45" y="60" width="10" height="20" fill="#6D4C41" />
                <circle cx="50" cy="50" r="20" fill="#2E7D32" />
              </svg>

              {/* Daun */}
              <svg className="icon leaf" viewBox="0 0 100 100">
                <path d="M50 10 Q90 50 50 90 Q10 50 50 10 Z" fill="#43A047" />
              </svg>

              {/* Tetes Air */}
              <svg className="icon water" viewBox="0 0 100 100">
                <path d="M50 10 Q80 50 50 90 Q20 50 50 10 Z" fill="#29B6F6" />
              </svg>

              {/* Hati */}
              <svg className="icon heart" viewBox="0 0 100 100">
                <path
                  d="M50 30 
                    C 50 10, 80 10, 80 30 
                    C 80 50, 50 70, 50 90
                    C 50 70, 20 50, 20 30 
                    C 20 10, 50 10, 50 30 Z"
                  fill="#E53935"
                />
              </svg>
            </div>
            <p className="illustration-text">{t.title}</p>
          </div>

          {/* QR Code */}
          <div className="supportus-qr">
            <img src={QRCode} alt="QR Code" />
          </div>
        </div>

        {/* Informasi */}
        <div className="supportus-info">
          <p>{t.bank}</p>
          <p>{t.wa}</p>
          <p>
            {t.merch}:{" "}
            <a href={t.merchLink} target="_blank" rel="noopener noreferrer">
              Link
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportUsSection;
