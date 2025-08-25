import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>
            FORPASI (Forum Peduli Sampah Seluruh Indonesia)
          </h2>
          <br />
          <p>Manajemen oleh: Yayasan Asa Indonesia Lestari</p>
          <br />
          <p>All rights reserved</p>
        </div>

        <div className="footer-social">
          <div className="social-icon-wrapper">
            <h2>Follow us on Social Media</h2>
            <div className="social-wrapper">
              <a href="https://www.linkedin.com/company/forpasi/" aria-label="LinkedIn" target="_blank"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/forpasi_id" aria-label="Instagram" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="https://www.youtube.com/@forpasi_id" aria-label="Youtube"><i className="fab fa-youtube"></i></a>
              <a href="mailto:yayasanasaindonesialestari@gmail.com" aria-label="Email"><i className="fab fa-envelope"></i></a>
            </div>
          </div>
          <div className="subscribe-email">
            <h2>Enter your email</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="email-input"
              />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Forpasi. All rights reserved.</p>
      </div>
      <div className="footer-hashtag">
          <h2>
            #IndonesiaLestari
          </h2>
        </div>
    </footer>
  );
};

export default Footer;
