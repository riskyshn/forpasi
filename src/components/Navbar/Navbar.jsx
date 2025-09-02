import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Navbar = () => {

  const { language, setLanguage } = useLanguage(); // akses context

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className="forpasi">
          <Link to="/"></Link>
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
          &#9776;
        </div>

        <ul className={`flex menu ${isMobileMenuOpen ? 'show' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
              {language === 'en' ? 'Home' : 'Beranda'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
              {language === 'en' ? 'About Us' : 'Tentang Kami'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/strategic-issues" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
              {language === 'en' ? 'Strategic Issues' : 'Isu Strategis'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/programme" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
              {language === 'en' ? 'Programme' : 'Program'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/news" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
              {language === 'en' ? 'News' : 'Berita'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/support-us" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
              {language === 'en' ? 'Support Us' : 'Dukung Kami'}
            </NavLink>
          </li>
        </ul>

        <div className="language">
          <button onClick={() => handleLanguageChange('en')} className={language === 'en' ? 'active' : ''}>EN</button>
          <span>|</span>
          <button onClick={() => handleLanguageChange('id')} className={language === 'id' ? 'active' : ''}>ID</button>
        </div>
      </nav>
    </>
    
  );
};

export default Navbar;
