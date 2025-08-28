import React from 'react';
import { FaUsers, FaInstagram, FaHandsHelping, FaVideo, FaUserFriends, FaMapMarkedAlt, FaNetworkWired } from 'react-icons/fa';
import { useLanguage } from '../../../contexts/LanguageContext';
import '../../styles/homeSectionB2.css';
import PersebaranForpasiImage from '../../../assets/persebaran-forpasi.jpeg'

const HomeSectionB2 = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: "FORPASI DALAM ANGKA",
      data: [
        { icon: <FaUsers />, value: '950+', label: 'Anggota Komunitas Digital (Whatsapp)' },
        { icon: <FaInstagram />, value: '-', label: 'Pengikut Instagram' },
        { icon: <FaHandsHelping />, value: '30.000+', label: 'Engagement Media Sosial' },
        { icon: <FaVideo />, value: '20', label: 'Rekaman Webinar & Kegiatan' },
        { icon: <FaUserFriends />, value: '45+', label: 'Relawan Terlibat' },
        { icon: <FaMapMarkedAlt />, value: '20', label: 'Area Cakupan Koordinator Wilayah' },
        { icon: <FaNetworkWired />, value: '20+', label: 'Jaringan Lembaga Kolaborator' },
      ]
    },
    en: {
      title: "FORPASI IN NUMBERS",
      data: [
        { icon: <FaUsers />, value: '950+', label: 'Digital Community Members (Whatsapp)' },
        { icon: <FaInstagram />, value: '-', label: 'Instagram Followers' },
        { icon: <FaHandsHelping />, value: '30,000+', label: 'Social Media Engagement' },
        { icon: <FaVideo />, value: '20', label: 'Webinar & Event Recordings' },
        { icon: <FaUserFriends />, value: '45+', label: 'Volunteers Involved' },
        { icon: <FaMapMarkedAlt />, value: '20', label: 'Regional Coordinator Areas' },
        { icon: <FaNetworkWired />, value: '20+', label: 'Collaborating Institutions Network' },
      ]
    }
  };

  const currentContent = content[language] || content.id;

  return (
    <section className="home-sectionB2">
      <h2>{currentContent.title}</h2>
      <div className="impact-grid">
        {currentContent.data.map((item, idx) => (
          <div className="impact-card" key={idx}>
            <div className="impact-icon">{item.icon}</div>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="impact-full-image">
        <img src={PersebaranForpasiImage} alt="FORPASI Impact" />
    </div>
    </section>
  );
};

export default HomeSectionB2;
