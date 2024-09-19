import React from 'react';
import './ServicesSection.css'; // Import the CSS file for custom styles

const ServicesSection = () => {
  const yearsOfExperience = new Date().getFullYear() - 2003;
  
  return (
    <section className="services-section">
      {/* Section Title and Subtitle */}
      <div className="section-header">
        <h3>We offer wide span of service to help you <br/> turn your ambitions <strong>concept into reality</strong></h3>
        <p>We provide best value services by focusing on quality, creativity, innovation and <br/> professional exellence</p>
      </div>
      {/* Top part with service cards */}
      <div className="services-cards">
        <div className="service-card" style={{ top: '0%' }}>
        <img src='../icons/planning.png' alt="Planning Icon" className="service-icon" />
            <p class="service-card-text">Planning</p>
        </div>
        <div className="service-card" style={{ top: '5%' }}>
        <img src='../icons/engineer.png' alt="Planning Icon" className="service-icon" />
          <p class="service-card-text">Engineering</p>
        </div>
        <div className="service-card" style={{ top: '2%' }}>
        <img src='../icons/architect.png' alt="Planning Icon" className="service-icon" />
          <p class="service-card-text">Architecture & Sustainability</p>
        </div>
        <div className="service-card" style={{ top: '8%' }}>
        <img src='../icons/directions.png' alt="Planning Icon" className="service-icon" />
          <p class="service-card-text">Transportation</p>
        </div>
        <div className="service-card" style={{ top: '4%' }}>
        <img src='../icons/winch.png' alt="Planning Icon" className="service-icon" />
          <p class="service-card-text">Project Management & Construction Supervision</p>
        </div>
      </div>

      {/* Bottom part with statistics */}
      <div className="statistics-section">
        <div className="statistics-text">
          <h2>We are always ready to help you.</h2>
          <div className="statistics-info">
            <div className="stat-item">
              <h1>60<span class="superscript">+</span></h1>
              <p>ENGINEERING PROJECTS</p>
            </div>
            <div className="stat-item">
              <h1>10<span class="superscript">+</span></h1>
              <p>DIFFERENT COUNTRIES</p>
            </div>
            <div className="stat-item">
              <h1>{yearsOfExperience}<span class="superscript">+</span></h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
          </div>
        </div>
        <div className="experience-box">
          <h1>#142</h1>
          <p>ENR Ranking</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
