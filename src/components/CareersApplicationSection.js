import React from "react";
import "./CareersApplicationSection.css";

const CareersApplicationSection = () => {
  return (
    <section className="careers-application-section">
      <div className="application-container">
        <h2>Join Our Team</h2>
        <p>
          We are always looking for talented individuals to join our team. If
          you are passionate about creating an impact, apply for a position at
          Euro Group
        </p>
        <p>
          Send us your CV at{" "}
          <a
            href={`mailto:recruitment@eurogroup.org?subject=Job%20Opportunity`}
            className="email-link"
          >
            recruitment@eurogroup.org
          </a>
        </p>
      </div>
    </section>
  );
};

export default CareersApplicationSection;
