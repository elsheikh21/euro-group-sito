import React from "react";
import "./LeadershipSection.css";

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Ibrahim Mourad",
      title: "Managing Director",
      imageUrl: "../images/leadership/ibrahim.webp",
    },
    {
      name: "Ayman Abourgila",
      title: "Executive Director",
      imageUrl: "../images/leadership/ayman.webp",
    },
    {
      name: "Hassan Maltawi",
      title: "Projects Manager",
      imageUrl: "../images/leadership/hassan.webp",
    },
  ];

  return (
    <section className="leadership-section">
      <h2 className="leadership-title">Meet our Leadership</h2>
      <p className="leadership-description">
        Implementation of quality plan and procedures is directed, fully
        controlled and assured by the quality council formed by top management
        representatives, to ensure that quality of work meets each assignment
        requirements and address client’s satisfaction.
      </p>
      <div className="leadership-cards">
        {leaders.map((leader, index) => (
          <div className="leadership-card" key={index}>
            <div className="card-image">
              <lazyload>
                <img src={leader.imageUrl} alt={leader.name} />
              </lazyload>
            </div>
            <h3 className="leader-name">{leader.name}</h3>
            <p className="leader-title">{leader.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
