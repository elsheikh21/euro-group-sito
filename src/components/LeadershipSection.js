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
      title: "Chief Executive Officer",
      imageUrl: "../images/leadership/ayman.webp",
    },
    {
      name: "Hassan Maltawi",
      title: "Chief Projects Officer",
      imageUrl: "../images/leadership/hassan.webp",
    },
  ];

  return (
    <section className="leadership-section">
      <h2 className="leadership-title">Meet our Leadership</h2>
      <p className="leadership-description">
        The leadership team at Euro Group has the breadth of expertise and depth
        of experience necessary to drive our strategy and continue to deliver
        profitable performances.
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
