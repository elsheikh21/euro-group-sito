import React from "react";
import "./CoreValuesSection.css";

const coreValues = [
  {
    imageSrc: "../icons/support.webp",
    altText: "support",
    title: "Teamwork",
    description:
      "We achieve our best work when we all work together as one team, supporting each other and sharing our knowledge and expertise.",
  },
  {
    imageSrc: "../icons/intersection.webp",
    altText: "intersection",
    title: "Integrity",
    description:
      "We build trust on the foundation of honesty, transparency, and making responsible decisions based on professional standards.",
  },
  {
    imageSrc: "../icons/rating.webp",
    altText: "rating (1)",
    title: "Client Service",
    description:
      "We understand our clients' needs and develop relationships that make a positive impact.",
  },
  {
    imageSrc: "../icons/solar-energy.webp",
    altText: "solar-energy",
    title: "Sustainability",
    description:
      "We are committed to the social, environmental and economic footprint, either through our role as engineers or through our own every day actions.",
  },
  {
    imageSrc: "../icons/business.webp",
    altText: "business",
    title: "Creativity",
    description:
      "We constantly look for new solutions to overcome new challenges and deliver great results.",
  },
  {
    imageSrc: "../icons/handshake.webp",
    altText: "handshake",
    title: "Partnership",
    description:
      "We work closely with partners and clients to achieve our goals and build mutually beneficial relationships.",
  },
  {
    imageSrc: "../icons/network.webp",
    altText: "network",
    title: "Collaboration",
    description:
      "We provide the best client service through shared goals and built relationships.",
  },
  {
    imageSrc: "../icons/list.webp",
    altText: "list",
    title: "Commitment",
    description:
      "We ensure that each project is executed to the highest possible standards.",
  },
];

const CoreValuesSection = () => {
  return (
    <section className="core-values-section">
      <h2 className="section-title">Our Core Values</h2>
      <div className="core-values-grid">
        {coreValues.map((value, index) => (
          <div key={index} className="core-value-item">
            <div className="core-value-imageSrc">
              <img
                src={value.imageSrc}
                alt={value.altText}
                style={{ height: "5rem" }}
              />
            </div>
            <h3 className="core-value-title">{value.title}</h3>
            <p className="core-value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;
