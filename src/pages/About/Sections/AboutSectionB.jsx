import React from 'react';
import '../../styles/aboutSectionB.css';

const AboutSectionB = () => {
  return (
    <section className="about-section-b">
      <div className="about-b-hero">
        <h2>Why Choose Forpasi?</h2>
        <p>We combine visionary leadership with cutting-edge technology to drive sustainable growth and social impact.</p>
      </div>

      <div className="about-b-grid">
        <div className="grid-item">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Innovation" />
          <h3>Innovative Solutions</h3>
          <p>We deliver next-gen funding platforms tailored for forward-thinkers.</p>
        </div>
        <div className="grid-item">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/051/778/475/small_2x/an-orange-kitten-sitting-on-a-blanket-photo.jpeg" alt="Collaboration" />
          <h3>Seamless Collaboration</h3>
          <p>Connect with partners, stakeholders, and communities worldwide effortlessly.</p>
        </div>
        <div className="grid-item">
          <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" alt="Analytics" />
          <h3>Real-Time Analytics</h3>
          <p>Data-driven insights to monitor, evaluate, and scale your impact effectively.</p>
        </div>
      </div>

      <div className="about-b-cta">
        <h3>Transform Your Vision into Reality with Forpasi</h3>
        <button className="about-b-btn">Get Started</button>
      </div>
    </section>
  );
};

export default AboutSectionB;
