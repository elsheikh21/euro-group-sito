import React from "react";
import "./HighlightSection.css"; // Import the CSS file for custom styles

const HighlightSection = () => {
  return (
    <section className="highlight-section">
      {/* Introduction Section */}
      <div className="introduction-content padding-bottom-120">
        <h2>
          We believe that <strong>dynamic interaction with clients</strong> is
          the fundamental aspect that leads the firm to success.
        </h2>
        <p>
          We deliver dynamic, creative and cost-effective engineering solutions,
          giving top priority to ensuring quality, safety, and environmental
          standards.
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* First Row: Image Left, Text Right */}
        <div className="content-row">
          <div className="content-image">
            <img
              src="../images/home3.webp"
              class="no-margin-left"
              alt="Construction work"
            />
          </div>
          <div className="content-text left-align">
            <h3>
              We provide the{" "}
              <strong>
                highest quality of engineering consulting services
              </strong>{" "}
              that meet your expectations.
            </h3>
            <p>
              We help clients from both public and private development sectors
              to meet their design and construction needs and execute them with
              creativity and knowledge.
            </p>
          </div>
        </div>

        {/* Second Row: Text Left, Image Right */}
        <div className="content-row">
          <div className="content-text">
            <h3>
              We look for <strong>solutions</strong> that can have an impact
              beyond the project.
            </h3>
            <p>
              We elevate the power of your projects beyond the impact they
              deliver. We are committed to the social, technological, and
              economic performance of our projects.
            </p>
          </div>
          <div className="content-image img right-aligned">
            <img
              src="../images/home9.jpg"
              class="no-margin-right"
              alt="Machinery in action"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
