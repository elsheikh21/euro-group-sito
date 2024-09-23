import React from "react";
import "./CareersApplicationSection.css";

const CareersApplicationSection = () => {
  return (
    <section className="careers-application-section">
      <div className="application-container">
        <h2>Join Our Team</h2>
        <p>
          We are always looking for talented individuals to join our team.
          Please fill out the form below to apply for a position at Euro Group.
        </p>
        <p>
          Send us your CV at{" "}
          <a
            href={`mailto:info@eurogroup.org?subject=Job%20Opportunity`}
            className="email-link"
          >
            info@eurogroup.org
          </a>
        </p>
      </div>
    </section>
  );
};

export default CareersApplicationSection;
