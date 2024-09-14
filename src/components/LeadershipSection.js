// src/components/LeadershipSection.js

import React from 'react';
import './LeadershipSection.css'; // Import CSS specific to this component

const LeadershipSection = () => {
  return (
    <section className="leadership-section">
      <h2 className="section-title">Meet our Leadership</h2>
      <p className="section-description">
        The leadership team at Euro Group has the breadth of expertise and depth of experience necessary
        to drive our strategy and continue to deliver profitable performance.
      </p>
      <div className="leadership-cards-container">
        {/* Card 1 */}
        <div className="leadership-card">
          <div
            className="card-image"
            style={{ backgroundImage: "url('https://picsum.photos/220/200?random=1')" }} // Random image
          ></div>
          <h3 className="card-name">Ibrahim Mourad</h3>
          <p className="card-position">Managing Director</p>
        </div>
        {/* Card 2 */}
        <div className="leadership-card">
          <div
            className="card-image"
            style={{ backgroundImage: "url('https://picsum.photos/220/200?random=2')" }} // Random image
          ></div>
          <h3 className="card-name">Dr. Ayman Abourgila</h3>
          <p className="card-position">Chief Executive Officer</p>
        </div>
        {/* Card 3 */}
        <div className="leadership-card">
          <div
            className="card-image"
            style={{ backgroundImage: "url('https://picsum.photos/220/200?random=3')" }} // Random image
          ></div>
          <h3 className="card-name">Hassan Mahrani</h3>
          <p className="card-position">Chief Projects Officer</p>
        </div>
        {/* Card 4 */}
        <div className="leadership-card">
          <div
            className="card-image"
            style={{ backgroundImage: "url('https://picsum.photos/220/200?random=4')" }} // Random image
          ></div>
          <h3 className="card-name">Mansour Sahne</h3>
          <p className="card-position">Vice President</p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
