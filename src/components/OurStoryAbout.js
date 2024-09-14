// src/components/OurStoryAbout.js

import React from 'react';
import './OurStoryAbout.css'; // Import CSS specific to this component

const OurStoryAbout = () => {
  return (
    <section className="our-story-section">
      <div className="story-box">
        <h2>Our Story</h2>
        <p>
          Euro Group was founded in 2003 under the name of Resources Technology Bureau, and was
          registered as a Saudi company with local partnership in 2014 under the name of “Euro Group
          for Engineering Consultancy”.
        </p>
        <p>
          The firm grew over the past few years and diversified following the market need by
          enlarging its scope of work from infrastructure and roads only to multidisciplinary
          engineering services. By acquiring the best professional expertise in engineering and
          management, Euro Group was able to exceed clients' expectations. With main operations in
          Gulf areas, Euro Group technical offices and supporting facilities are located in Riyadh,
          Cairo, Dubai with sister company in Chicago, USA.
        </p>
        <p>
          We believe that our highly qualified professionals are the key to any achievement and
          success. Therefore, we keep working on staffing these professional skills, updating and
          upgrading their knowledge in order to address the daily growing complex challenge and
          evolution.
        </p>
      </div>
      <blockquote className="quote">
        Quality, Creativity, Innovation and Professional Excellence
      </blockquote>
    </section>
  );
};

export default OurStoryAbout;
