import React from "react";
import "./HighlightSection.css";

const HighlightSection = () => {
  return (
    <section className="highlight-section">
      {/* Introduction Section */}
      <div className="introduction-content padding-bottom-120">
        <h2>
          We believe that <strong>dynamic interaction with clients</strong> is
          the fundamental aspect that leads our firm to success.
        </h2>
        <p>
          We deliver dynamic, creative and cost-effective engineering solutions,
          giving top priority to ensuring quality, safety, and environmental
          solutions.
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* First Row: Image Left, Text Right */}
        <div className="content-row">
          <div className="content-image">
            <lazyload>
              <img
                src="../images/home3.webp"
                class="no-margin-left"
                alt="Construction work"
              />
            </lazyload>
          </div>
          <div className="content-text left-align pl-2-5">
            <h3>
              We provide the{" "}
              <strong>
                highest quality of engineering consulting services
              </strong>{" "}
              that meet your expectations.
            </h3>
            <p>
              We help clients from both public and private development sectors
              to meet their design and construction needs and provide them with
              expertise and knowledge.
            </p>
          </div>
        </div>

        {/* Second Row: Text Left, Image Right */}
        <div className="content-row">
          <div className="content-image right-aligned">
            <lazyload>
              <img
                src="../images/road-construction-with-road-transport-equipment-top-view.webp"
                class="no-margin-right"
                alt="Machinery in action"
              />
            </lazyload>
          </div>
          <div className="content-text">
            <h3>
              We look for <strong>solutions</strong> that can have an{" "}
              <strong>impact </strong>
              beyond the project.
            </h3>
            <p>
              We measure success of our projects based on the impact they
              deliver. We are committed to the social, environmental and
              economic performance of our projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
