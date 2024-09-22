import React from "react";
import "./OverlaySection.css";
import { Link } from "react-router-dom";

const OverlaySection = () => {
  return (
    <section className="overlay-section">
      {/* Overlay to cover the entire image */}
      <div className="overlay">
        <div className="overlay-content">
          <h2>
            We build projects on foundations that will stand the <br /> test of
            time.
          </h2>
          <Link to={"/About"} class="overlay-button">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OverlaySection;
