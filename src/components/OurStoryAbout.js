// src/components/OurStoryAbout.js

import React from 'react';
import './OurStoryAbout.css'; // Import CSS specific to this component

const OurStoryAbout = () => {
  return (
    <section className="our-story-section">
      <div className="story-box">
        <h2>Our Story</h2>
        <p>
        We believe that dynamic interaction with clients is the fundamental aspect that leads the firm to success
        <br/>
          <span class="not-bold-text">We deliver dynamic, creative and cost effective engineering solutions, giving top priority for ensuring quality, safety and environmental solutions.</span></p>
        <p>
        We provide the highest quality of engineering consulting services that meets your expectations
        <br/>
          <span class="not-bold-text">We help clients from both public and private development sectors to meet their design and construction needs and provide them with expertise and knowledge.</span></p>
        <p>
        We look for solutions that can have an impact beyond the project
        <br/>
        <span class="not-bold-text">We measure success of our projects based on the impact they deliver. We are committed to the social, environmental and economic performance of our projects.</span></p>
      </div>
      <blockquote className="quote">
        Quality, Creativity, Innovation and Professional Excellence
      </blockquote>
    </section>
  );
};

export default OurStoryAbout;
