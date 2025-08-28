import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import '../../styles/aboutSectionA.css';

const AboutSectionA = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      introTitle: "Latar Belakang Forum",
      situasi: "Minimnya kesadaran dan kepedulian masyarakat di isu sampah padahal bertemu sampah setiap hari.",
      komplikasiTitle: "KOMPLIKASI / DAMPAK UMUM:",
      komplikasiList: [
        "Rendahnya kesadaran berimplikasi kepada minimnya keberpihakan politik (political will) di isu sampah – terlihat dari sistem dan anggaran yang kurang di tingkat pemerintah pusat maupun daerah.",
        "Darurat sampah kerap terjadi di berbagai daerah, yang bisa dilihat hanya dampak, bukan akar masalah.",
        "Belum ada penyelesaian yang komprehensif dan penegakan aturan, sehingga penyelesaian bersifat sporadis."
      ],
      solusiTitle: "SOLUSI: FORPASI SEBAGAI WADAH BERSAMA UNTUK MENDORONG KEBIJAKAN PUBLIK YANG LEBIH BAIK:",
      solusiList: [
        "Meningkatkan kesadaran dan kepedulian tentang isu sampah.",
        "Menghimpun opini, pengalaman, dan keresahan publik di seluruh Indonesia mengenai isu persampahan.",
        "Mendorong kebijakan peningkatan sistem persampahan."
      ],
      visiMisiTitle: "Visi, Misi, dan Tujuan FORPASI",
      visi: "Mewujudkan INDONESIA LESTARI dimulai dari isu lingkungan yang paling nyata di kehidupan masyarakat yaitu isu sampah.",
      misiList: [
        "Membagikan konsep INDONESIA LESTARI kepada segenap warga negara Indonesia.",
        "Meningkatkan kesadaran dan kepedulian publik dalam isu sampah dan lingkungan, sehingga menjadi bagian dari prioritas.",
        "Mendorong terbentuknya produk kebijakan publik untuk meningkatkan sistem persampahan kepada pemangku kebijakan terkait dan calon pemimpin negeri."
      ],
      tujuanList: [
        "Melakukan diskusi publik untuk meningkatkan kesadaran dan kepedulian tentang persampahan nasional.",
        "Menghimpun pertanyaan dari publik dan menanyakan langsung kepada pemangku kebijakan dan calon pemimpin negeri.",
        "Terciptanya tindakan konkrit sebagai bentuk partisipasi publik dengan prinsip non-partisan untuk mendukung kemajuan pengelolaan sampah nasional."
      ],
      lestariTitle: "Konsep Indonesia Lestari",
      lestariText: `INDONESIA LESTARI adalah sebuah konsep nasionalisme lingkungan, yaitu bentuk kecintaan
      terhadap Tanah Air dan Ibu Pertiwi Indonesia demi kelangsungan generasi kedepan, dan
      diejahwantahkan dalam perbuatan nyata yang bertujuan untuk menjaga lingkungan berdasarkan
      nilai gotong royong yang sudah terkandung dalam urat nadi segenap warga negara Indonesia.`,
      lestariQuote: "~(Hadohoan Satyalen Simaremare, Pendiri dan Inisiator FORPASI)"
    },
    en: {
      introTitle: "Forum Background",
      situasi: "The lack of public awareness and concern about waste issues, even though people encounter waste every day.",
      komplikasiTitle: "COMPLICATIONS / GENERAL IMPACTS:",
      komplikasiList: [
        "Low awareness leads to minimal political will on waste issues – visible from the lack of systems and budgets at the central and local government levels.",
        "Waste emergencies often occur in various regions, with only the impacts visible, not the root causes.",
        "No comprehensive solutions or law enforcement exist, so efforts remain sporadic."
      ],
      solusiTitle: "SOLUTION: FORPASI AS A JOINT PLATFORM TO DRIVE BETTER PUBLIC POLICIES:",
      solusiList: [
        "Raising awareness and concern about waste issues.",
        "Gathering public opinions, experiences, and concerns across Indonesia about waste management.",
        "Advocating for improved waste management policies."
      ],
      visiMisiTitle: "Vision, Mission, and Goals of FORPASI",
      visi: "To realize a SUSTAINABLE INDONESIA starting from the most tangible environmental issue in people's lives: waste.",
      misiList: [
        "Sharing the concept of SUSTAINABLE INDONESIA with all Indonesian citizens.",
        "Increasing public awareness and concern about waste and environmental issues so they become priorities.",
        "Encouraging the creation of public policies to improve waste management systems for policymakers and future leaders."
      ],
      tujuanList: [
        "Holding public discussions to increase awareness and concern about national waste issues.",
        "Collecting questions from the public and addressing them directly to policymakers and future leaders.",
        "Creating concrete actions as public participation in a non-partisan spirit to support national waste management progress."
      ],
      lestariTitle: "Sustainable Indonesia Concept",
      lestariText: `SUSTAINABLE INDONESIA is a concept of environmental nationalism, a form of love for the
      Indonesian Motherland to ensure future generations' survival, realized through concrete actions
      to protect the environment based on the spirit of mutual cooperation rooted in all Indonesian citizens.`,
      lestariQuote: "~(Hadohoan Satyalen Simaremare, Founder and Initiator of FORPASI)"
    }
  };

  const current = content[language] || content.id;

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Intro */}
        <div className="about-intro fade-in">
          <div className="intro-text">
            <h2>{current.introTitle}</h2>
            <p><strong>SITUASI:</strong> {current.situasi}</p>

            <p><strong>{current.komplikasiTitle}</strong></p>
            <ul>
              {current.komplikasiList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>

            <p><strong>{current.solusiTitle}</strong></p>
            <ul>
              {current.solusiList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>

            <div className="negative-news-space">
              <p>[Space untuk Foto-foto Berita Negatif]</p>
            </div>
          </div>
          <div className="intro-image">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/051/778/475/small_2x/an-orange-kitten-sitting-on-a-blanket-photo.jpeg"
              alt="Forpasi Background"
            />
          </div>
        </div>

        {/* Visi Misi */}
        <div className="about-mission fade-in">
          <div className="mission-image">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/051/778/475/small_2x/an-orange-kitten-sitting-on-a-blanket-photo.jpeg"
              alt="Visi Misi"
            />
          </div>
          <div className="mission-text">
            <h3>{current.visiMisiTitle}</h3>
            <p><strong>VISI:</strong> {current.visi}</p>
            <p><strong>MISI:</strong></p>
            <ul>
              {current.misiList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <p><strong>TUJUAN FORPASI:</strong></p>
            <ul>
              {current.tujuanList.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        </div>

        {/* Konsep Indonesia Lestari */}
        <div className="about-lestari fade-in">
          <div className="lestari-image">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="Indonesia Lestari"
            />
          </div>
          <div className="lestari-text">
            <h3>{current.lestariTitle}</h3>
            <p>{current.lestariText}</p>
            <p className="lestari-quote">{current.lestariQuote}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionA;
