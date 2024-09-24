import React from "react";
import "./JoinUsSection.css";

const JoinUsSection = () => {
  return (
    <section className="join-us-container">
      {/* First Join Us Section with default layout */}
      <div className="join-us-section">
        <div className="join-us-image">
          <lazyload>
            <img src="../images/home7.webp" alt="Join Us" />
          </lazyload>{" "}
          {/* Replace with your actual image path */}
        </div>
        <div className="join-us-content">
          <h2>
            Even Group offers opportunities for career advancements and more.
          </h2>
          <p>Don’t do a job, build a career.</p>
          <button className="join-us-button">Join Our Team</button>
        </div>
      </div>

      {/* Second Join Us Section with reversed layout */}
      <div className="join-us-section reverse-layout">
        <div className="join-us-image">
          <lazyload>
            <img src="../images/team.webp" alt="Join Us" />
          </lazyload>{" "}
          {/* Replace with another actual image path */}
        </div>
        <div className="join-us-content">
          <h2>Join a dynamic team that values innovation and creativity.</h2>
          <p>Contribute to impactful projects and make a difference.</p>
          <button className="join-us-button">Join the Team</button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
