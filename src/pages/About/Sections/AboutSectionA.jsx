import React from 'react';
import '../../styles/aboutSectionA.css';

const AboutSectionA = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Forpasi</h2>
          <p>
            We are committed to providing the best services and experiences. Our mission is to empower communities
            with innovative solutions and a passion for excellence.
          </p>
          <p>
            With a dedicated team and a forward-thinking approach, Forpasi continues to grow and deliver value to our partners
            and clients.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80" alt="About Forpasi" />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionA;
