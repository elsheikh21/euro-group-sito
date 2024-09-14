import React from 'react';
import './OverlaySection.css'; // Import the CSS file for custom styles

const OverlaySection = () => {
  return (
    <section className="overlay-section">
      {/* Overlay to cover the entire image */}
      <div className="overlay">
        <div className="overlay-content">
          <h2>We build projects on foundations that will stand the test of time.</h2>
          <button className="overlay-button">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default OverlaySection;
