import React from 'react';
import './ContentSection.css'; // Import the CSS file for custom styles

const ContentSection = () => {
  return (
    <section className="content-section">
      {/* First Row: Image Left, Text Right */}
      <div className="content-row">
        <div className="content-image">
          <img src="https://picsum.photos/seed/industry/600/720" alt="Construction work" /> {/* Replace with your image path */}
        </div>
        <div className="content-text">
          <h3>We provide the highest quality of engineering consulting services that meet your expectations.</h3>
          <p>We help clients from both public and private development sectors to meet their design and construction needs and execute them with creativity and knowledge.</p>
        </div>
      </div>

      {/* Second Row: Text Left, Image Right */}
      <div className="content-row">
        <div className="content-text">
          <h3>We look for solutions that can have an impact beyond the project.</h3>
          <p>We elevate the power of your projects beyond the impact they deliver. We are committed to the social, technological, and economic performance of our projects.</p>
        </div>
        <div className="content-image right-aligned">
          <img src="https://picsum.photos/seed/industry/600/300" alt="Machinery in action" /> {/* Replace with your image path */}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
