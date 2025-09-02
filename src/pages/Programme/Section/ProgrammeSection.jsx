import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import '../../styles/programme.css';

const ProgrammeSection = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      heroTitle: "Program",
      strapline: "MENDORONG PERUBAHAN SISTEM PERSAMPAHAN MELALUI AKTIVITAS KERELAWANAN",
      focusTitle: "FOKUS KEGIATAN",
      focusList: [
        "Komunitas Digital dan Jaringan Persampahan Nasional",
        "Riset dan Advokasi Kebijakan",
        "Edukasi, Kampanye, dan Program Strategis",
      ],
      impactTitle: "FORPASI DALAM ANGKA",
      impacts: [
        { value: "950+", label: "Anggota komunitas digital (WhatsApp)" },
        { value: "—", label: "Pengikut Instagram" },
        { value: "30.000+", label: "Engagement media sosial" },
        { value: "20", label: "Rekaman webinar & kegiatan" },
        { value: "45+", label: "Relawan terlibat" },
        { value: "20", label: "Area cakupan koordinator wilayah" },
        { value: "20+", label: "Lembaga kolaborator" },
      ],
      mapTitle: "Peta Program & Jaringan Kolaborasi (Tentatif)",
      mapNote: "Peta akan ditambahkan kemudian (tentatif). Sementara ini, gunakan placeholder/embedding bila sudah tersedia.",
      ctaTitle: "Ingin berpartisipasi langsung?",
      ctaText:
        "Kami mempersiapkan kegiatan bagi kalian yang berminat berkontribusi untuk mendorong sistem persampahan.",
      ctas: [
        { href: "https://www.indorelawan.org/organization/64f53040c147a300219891ec", text: "Jadi Relawan via Indorelawan" },
        { href: "https://forms.gle/nLXwtjaML9hYB9iz8", text: "Jadi Koordinator Wilayah" },
        { href: "https://www.instagram.com/forpasi_id/?hl=en", text: "Join Grup WA (DM Instagram)" },
      ],
    },
    en: {
      heroTitle: "Programme",
      strapline: "DRIVING WASTE-SYSTEM CHANGE THROUGH VOLUNTEER ACTION",
      focusTitle: "FOCUS AREAS",
      focusList: [
        "Digital Community & National Waste Network",
        "Research & Policy Advocacy",
        "Education, Campaigns & Strategic Programmes",
      ],
      impactTitle: "FORPASI IN NUMBERS",
      impacts: [
        { value: "950+", label: "Digital community members (WhatsApp)" },
        { value: "—", label: "Instagram followers" },
        { value: "30,000+", label: "Social media engagement" },
        { value: "20", label: "Webinar & event recordings" },
        { value: "45+", label: "Active volunteers" },
        { value: "20", label: "Regions covered by coordinators" },
        { value: "20+", label: "Partner organisations" },
      ],
      mapTitle: "Programme Map & Collaboration Network (Tentative)",
      mapNote:
        "Map to be added (tentative). For now, use a placeholder or embed when available.",
      ctaTitle: "Want to participate directly?",
      ctaText:
        "We prepare activities for anyone who wants to contribute to advancing Indonesia’s waste-management system.",
      ctas: [
        { href: "https://www.indorelawan.org/organization/64f53040c147a300219891ec", text: "Become a Volunteer (Indorelawan)" },
        { href: "https://forms.gle/nLXwtjaML9hYB9iz8", text: "Become a Regional Coordinator" },
        { href: "https://www.instagram.com/forpasi_id/?hl=en", text: "Join WhatsApp Group (DM Instagram)" },
      ],
    },
  };

  const t = content[language] || content.id;

  return (
    <section className="programme-section">
      <div className="programme-container">
        {/* Hero */}
        <div className="programme-hero fade-in">
          <h2>{t.heroTitle}</h2>
          <p className="programme-strapline">{t.strapline}</p>
        </div>

        {/* Focus Areas */}
        <div className="programme-focus fade-in">
          <h3>{t.focusTitle}</h3>
          <div className="focus-grid">
            {t.focusList.map((item, idx) => (
              <div className="focus-card" key={idx}>
                <div className="focus-index">{String(idx + 1).padStart(2, '0')}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="programme-map fade-in">
          <h3>{t.mapTitle}</h3>
          <div className="map-box">
            {/* Ganti elemen di bawah dengan <img src="..." /> atau <iframe ... /> ketika peta siap */}
            <div className="map-placeholder">
              <span>{t.mapNote}</span>
            </div>
          </div>
        </div>

        {/* Impact Tracker */}
        <div className="programme-impact fade-in">
          <h3>{t.impactTitle}</h3>
          <div className="impact-grid">
            {t.impacts.map((m, i) => (
              <div className="impact-item" key={i}>
                <div className="impact-value">{m.value}</div>
                <div className="impact-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="programme-cta fade-in">
          <h3>{t.ctaTitle}</h3>
          <p>{t.ctaText}</p>
          <div className="cta-buttons">
            {t.ctas.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="cta-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
