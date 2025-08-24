import React from 'react';
import '../../styles/aboutSectionA.css';

const AboutSectionA = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-intro">
          <div className="intro-text">
            <h2>About Forpasi</h2>
            <p>We are on a mission to connect visionary ideas with impactful funding. Our dedication lies in building a community where social impact thrives, and where innovation meets purpose.</p>
            <p>Driven by sustainability, transparency, and data-driven insights, Forpasi partners with organizations, communities, and individuals to craft solutions that matter.</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="intro-image">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/051/778/475/small_2x/an-orange-kitten-sitting-on-a-blanket-photo.jpeg" alt="Forpasi Vision" />
          </div>
        </div>

        <div className="about-mission">
          <div className="mission-image">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/051/778/475/small_2x/an-orange-kitten-sitting-on-a-blanket-photo.jpeg" alt="Our Mission" />
          </div>
          <div className="mission-text">
            <h3>Our Mission & Values</h3>
            <p>At Forpasi, we believe in fostering an inclusive ecosystem where every stakeholder plays a vital role in shaping the future. Our core values are:</p>
            <div className="animated-values">
              <div className="value-item">
                <span role="img" aria-label="Transparency">🔍</span>
                <p>Transparency in all processes</p>
              </div>
              <div className="value-item">
                <span role="img" aria-label="Sustainability">🌱</span>
                <p>Sustainability in every initiative</p>
              </div>
              <div className="value-item">
                <span role="img" aria-label="Collaboration">🤝</span>
                <p>Collaborative growth and partnerships</p>
              </div>
            </div>
            <p>We envision a world where funding is not just financial support but a catalyst for transformative change.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSectionA;
