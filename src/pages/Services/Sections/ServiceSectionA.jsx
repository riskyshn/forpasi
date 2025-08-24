import React from 'react';
import '../../styles/serviceSectionA.css';

const ServiceSectionA = () => {
  return (
    <div className="section-wrapper">
      <section className="service-section">

        <div className="service-hero">
          <h2>Our Services</h2>
          <p>Empowering your growth through strategic funding, tailored consultancy, and tech innovation.</p>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <h3>Funding Solutions</h3>
            <p>Access tailored funding streams that align with your mission and scale your impact sustainably.</p>
          </div>
          <div className="service-card">
            <h3>Consultancy & Strategy</h3>
            <p>Expert advisory to help you craft effective strategies and navigate complex ecosystems.</p>
          </div>
          <div className="service-card">
            <h3>Technology Innovation</h3>
            <p>Leverage cutting-edge platforms and tools designed to enhance project delivery and monitoring.</p>
          </div>
        </div>

        <div className="service-featured redesigned enhanced-layout">
          <div className="featured-image">
            <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh" alt="Featured Service" />
          </div>
          <div className="featured-text">
            <h3>Integrated Platform for End-to-End Solutions</h3>
            <p>Our platform offers you a comprehensive journey from ideation to execution, featuring dynamic dashboards, real-time collaboration spaces, and transparent progress tracking for measurable impact.</p>
            <button>Explore More</button>
          </div>
        </div>

        <div className="service-cta">
          <h3>Ready to Amplify Your Impact?</h3>
          <p>Join the Forpasi network and transform your vision into reality with our comprehensive services.</p>
          <button>Get in Touch</button>
        </div>

      </section>
    </div>
  );
};

export default ServiceSectionA;
