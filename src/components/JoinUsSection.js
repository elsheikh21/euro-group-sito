import React from 'react';
import './JoinUsSection.css'; // Import the CSS file for custom styles

const JoinUsSection = () => {
  return (
    <section className="join-us-section">
      {/* Left part with image */}
      <div className="join-us-image">
        <img src="https://picsum.photos/seed/joinus/600/400" alt="Join Us" /> {/* Replace with your actual image path */}
      </div>

      {/* Right part with text and button */}
      <div className="join-us-content">
        <h2>Even Group offers opportunities for career advancements and more.</h2>
        <p>Start in a role. Build a career.</p>
        <button className="join-us-button">Apply Now</button>
      </div>
    </section>
  );
};

export default JoinUsSection;
