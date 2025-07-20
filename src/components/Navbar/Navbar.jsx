import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.css';
import Carousel from '../Carousel/Carousel';
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
              {language === 'en' ? 'About' : 'Tentang'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
              {language === 'en' ? 'Services' : 'Layanan'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-bold underline' : ''}>
              {language === 'en' ? 'Contact' : 'Kontak'}
            </NavLink>
          </li>
        </ul>

        <div className="language">
          <button onClick={() => handleLanguageChange('en')} className={language === 'en' ? 'active' : ''}>EN</button>
          <span>|</span>
          <button onClick={() => handleLanguageChange('id')} className={language === 'id' ? 'active' : ''}>ID</button>
        </div>
      </nav>
      <Carousel language={language}/>
    </>
    
  );
};

export default Navbar;
