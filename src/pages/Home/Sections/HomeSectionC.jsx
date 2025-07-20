import React from 'react';
import '../../styles/homeSectionC.css';

const HomeSectionC = () => {
  return (
    <section className="home-section-c">
      <div className="parallax-bg">
        <div className="cta-overlay">
          <div className="cta-content">
            <h2 className="cta-title">Join the Movement of Change</h2>
            <p className="cta-subtitle">
              Be a catalyst in transforming communities with Forpasi. Together, we drive sustainable and meaningful impact across the globe.
            </p>

            <div className="cta-buttons">
              <button className="cta-button-primary">Get Started</button>
              <button className="cta-button-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionC;
