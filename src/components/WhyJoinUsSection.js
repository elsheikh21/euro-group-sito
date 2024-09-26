import React from "react";
import "./WhyJoinUsSection.css";

const joinValues = [
  {
    imageSrc: "../icons/learning.webp",
    altText: "support",
    title: "Learning never stops",
  },
  {
    imageSrc: "../icons/balance.webp",
    altText: "intersection",
    title: "Work Life Balance",
  },
  {
    imageSrc: "../icons/exposure.webp",
    altText: "rating",
    title: "Global exposure and chance to work abroad",
  },
  {
    imageSrc: "../icons/health.webp",
    altText: "solar-energy",
    title: "Health & Family Benefits",
  },
  {
    imageSrc: "../icons/challenges.webp",
    altText: "business",
    title: "Rising technical and human challenges",
  },
  {
    imageSrc: "../icons/growing.webp",
    altText: "handshake",
    title: "Fast growing company",
  },
  {
    imageSrc: "../icons/exellence.webp",
    altText: "network",
    title: "Take charge and show excellence",
  },
  {
    imageSrc: "../icons/team.webp",
    altText: "list",
    title: "Great colleagues to work with",
  },
];

const WhyJoinUsSection = () => {
  return (
    <section className="join-values-section">
      <h2 className="section-title">Why Join Us</h2>
      <div className="join-values-grid">
        {joinValues.map((value, index) => (
          <div key={index} className="join-value-item">
            <div className="join-value-imageSrc">
              <img
                src={value.imageSrc}
                alt={value.altText}
                style={{ height: "5rem" }}
                className="join-value-image-icon"
              />
            </div>
            <h3 className="join-value-title">{value.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoinUsSection;
