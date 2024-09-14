import React from 'react';
import './ServicesSection.css'; // Import the CSS file for custom styles

const ServicesSection = () => {
  return (
    <section className="services-section">
      {/* Section Title and Subtitle */}
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Take the world’s best services for you</p>
      </div>
      {/* Top part with service cards */}
      <div className="services-cards">
        <div className="service-card" style={{ top: '0%' }}>
          <i className="fas fa-cogs service-icon"></i> {/* Icon for Planning */}
          <p>Planning</p>
        </div>
        <div className="service-card" style={{ top: '5%' }}>
          <i className="fas fa-wrench service-icon"></i> {/* Icon for Engineering */}
          <p>Engineering</p>
        </div>
        <div className="service-card" style={{ top: '2%' }}>
          <i className="fas fa-tree service-icon"></i> {/* Icon for Architecture & Sustainability */}
          <p>Architecture & Sustainability</p>
        </div>
        <div className="service-card" style={{ top: '8%' }}>
          <i className="fas fa-shipping-fast service-icon"></i> {/* Icon for Transportation */}
          <p>Transportation</p>
        </div>
        <div className="service-card" style={{ top: '4%' }}>
          <i className="fas fa-hard-hat service-icon"></i> {/* Icon for Project Management & Construction Supervision */}
          <p>Project Management & Construction Supervision</p>
        </div>
      </div>

      {/* Bottom part with statistics */}
      <div className="statistics-section">
        <div className="statistics-text">
          <h2>WE ARE ALWAYS READY TO HELP YOU.</h2>
          <div className="statistics-info">
            <div className="stat-item">
              <h3>60+</h3>
              <p>ENGINEERING PROJECTS</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>TALENTED EMPLOYEES</p>
            </div>
            <div className="stat-item">
              <h3>10</h3>
              <p>DIFFERENT COUNTRIES</p>
            </div>
          </div>
        </div>
        <div className="experience-box">
          <h1>17</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
