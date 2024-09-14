// src/components/MainProjectSection.js

import React from 'react';
import './MainProjectSection.css'; // Import the CSS specific to this component

const MainProjectSection = ({ heading, backgroundImage }) => {
  return (
    <section
      className="main-project-section"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Dynamic background image
    >
      <h1 className="main-project-section-heading">{heading}</h1>
    </section>
  );
};

export default MainProjectSection;
