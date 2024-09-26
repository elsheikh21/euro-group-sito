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
            Euro Group offers opportunities for career <br />
            advancements and more.{" "}
          </h2>
          <p>
            Don’t do a job, build a career <br /> Join our Team
          </p>
          <button className="join-us-button">Apply Now</button>
        </div>
      </div>

      {/* Second Join Us Section with reversed layout */}
      <div className="join-us-section reverse-layout">
        <div className="join-us-image">
          <lazyload>
            <img src="../images/unnamed.webp" alt="Join Us" />
          </lazyload>{" "}
          {/* Replace with another actual image path */}
        </div>
        <div className="join-us-content">
          <h2>
            We build a lasting long-term relation <br /> with clients.
          </h2>
          <p>
            Our staff is always happy to help. <br />
            We are just a click away
          </p>
          <button className="join-us-button">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
