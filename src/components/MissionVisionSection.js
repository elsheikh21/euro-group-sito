// src/components/MissionVisionSection.js

import React from 'react';
import './MissionVisionSection.css'; // Import CSS specific to this component

const MissionVisionSection = () => {
  return (
    <section className="mission-vision-section">
      <div className="mission-vision-container">
        <div className="mission-vision-column">
          <h2>Our Mission</h2>
          <p>
            To offer innovative, reliable, and cost-effective engineering solutions, not only to
            meet clients' satisfaction, but also to maintain long-term partnerships with them.
          </p>
        </div>
        <div className="mission-vision-column">
          <h2>Our Vision</h2>
          <p>
            To pursue global leadership, position ourselves within the top engineering consulting
            firms, and take part in improving the society where we live.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
