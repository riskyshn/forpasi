import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import '../../styles/strategicIssues.css';

// Import gambar
import IssueImage1 from '../../../assets/forpasi-isu-1.jpg';
import IssueImage2 from '../../../assets/forpasi-isu-2.jpg';
import IssueImage3 from '../../../assets/forpasi-isu-3.jpg';

const StrategicIssue = () => {
  const { language } = useLanguage();

  const images = [IssueImage1, IssueImage2, IssueImage3, IssueImage1, IssueImage1];

  const content = {
    id: [
      {
        title: "Tata Kelola Persampahan Nasional masih Sporadis",
        desc: "Pengelolaan sampah di Indonesia dinilai masih bersifat sporadis. FORPASI mendorong rekomendasi kebijakan untuk meningkatkan tata kelola persampahan nasional agar lebih terstruktur.",
        note: "Tanggapan FORPASI mengenai sporadisnya pengelolaan sampah:",
        pdfLink: "/pdf/rekomendasi-kebijakan.pdf",
        btnText: "Unduh Rekomendasi"
      },
      {
        title: "Segera Bentuk BPSN (Badan Pengelolaan Sampah Nasional)",
        desc: "FORPASI mengusulkan pembentukan BPSN untuk menangani persoalan persampahan secara menyeluruh di Indonesia.",
        img: images[1]
      },
      {
        title: "Isu Sampah Pariwisata",
        desc: "Sampah di kawasan pariwisata berpotensi lebih tinggi dibandingkan perkotaan. Diperlukan tata kelola dan edukasi yang lebih baik untuk dampak berkelanjutan.",
        img: images[2]
      },
      {
        title: "Kebersihan adalah Investasi, Sampah adalah Tanggung Jawab",
        desc: "FORPASI menekankan bahwa kebersihan merupakan bentuk investasi jangka panjang bagi masyarakat dan lingkungan.",
        img: images[3]
      },
      {
        title: "Geopolitik Persampahan Nasional dan Internasional",
        desc: "Isu persampahan juga berkaitan dengan geopolitik di tingkat nasional dan internasional yang perlu dikelola secara strategis.",
        img: images[4]
      }
    ],
    en: [
      {
        title: "National Waste Management is Still Sporadic",
        desc: "Waste management in Indonesia is still considered sporadic. FORPASI advocates policy recommendations to improve the national waste management system.",
        note: "FORPASI's response to the sporadic waste management issue:",
        pdfLink: "/pdf/policy-recommendations.pdf",
        btnText: "Download Recommendations"
      },
      {
        title: "Establish the National Waste Management Agency",
        desc: "FORPASI proposes the establishment of BPSN to comprehensively address Indonesia's waste problems.",
        img: images[1]
      },
      {
        title: "Tourism Waste Issue",
        desc: "Waste in tourism areas is potentially higher than in urban areas. Better management and visitor education are needed for sustainable impact.",
        img: images[2]
      },
      {
        title: "Cleanliness is an Investment, Waste is a Responsibility",
        desc: "FORPASI emphasizes that cleanliness is a long-term investment for society and the environment.",
        img: images[3]
      },
      {
        title: "National and International Waste Geopolitics",
        desc: "Waste issues are also linked to national and international geopolitics that need to be managed strategically.",
        img: images[4]
      }
    ]
  };

  const issues = content[language] || content.id;

  return (
    <section className="strategic-section">
      <div className="strategic-container">
        <h2 className="strategic-title">{language === 'id' ? "Isu Strategis" : "Strategic Issues"}</h2>
        {issues.map((issue, idx) => (
          <div key={idx} className={`strategic-item fade-in ${idx % 2 === 0 ? "left" : "right"}`}>
            <div className="strategic-text">
              <h3>{issue.title}</h3>
              <p>{issue.desc}</p>
              {issue.note && <p className="strategic-note">{issue.note}</p>}
              {issue.pdfLink && (
                <a href={issue.pdfLink} className="strategic-btn" download>
                  {issue.btnText}
                </a>
              )}
            </div>
            <div className="strategic-image">
              <img src={issue.img || images[idx]} alt={issue.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategicIssue;
