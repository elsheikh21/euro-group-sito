// src/components/CoreValuesSection.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faShieldAlt, faHandshake, faGlobe, faLightbulb, faUserFriends, faChartLine, faTrophy } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import './CoreValuesSection.css'; // Import CSS specific to this component

const coreValues = [
  { icon: faUsers, title: 'Teamwork', description: 'We achieve our best work when we all work together as one team, supporting each other and sharing our knowledge and expertise.' },
  { icon: faShieldAlt, title: 'Integrity', description: 'We build trust on the foundation of honesty, transparency, and making responsible decisions based on professional standards.' },
  { icon: faHandshake, title: 'Client Service', description: "We understand our clients' needs and develop relationships that make a positive impact." },
  { icon: faGlobe, title: 'Sustainability', description: 'We are committed to the social, environmental, and economic factors, whether through our role as engineers or through our own everyday actions.' },
  { icon: faLightbulb, title: 'Creativity', description: 'We constantly look for new solutions to overcome new challenges and deliver great results.' },
  { icon: faUserFriends, title: 'Partnership', description: 'We work closely with partners and clients to achieve our goals and build mutually beneficial relationships.' },
  { icon: faChartLine, title: 'Collaboration', description: 'We provide the best outcomes through shared goals and built relationships.' },
  { icon: faTrophy, title: 'Commitment', description: 'We ensure that each project is executed to the highest possible standards.' }
];

const CoreValuesSection = () => {
  return (
    <section className="core-values-section">
      <h2 className="section-title">Our Core Values</h2>
      <div className="core-values-grid">
        {coreValues.map((value, index) => (
          <div key={index} className="core-value-item">
            <div className="core-value-icon">
              <FontAwesomeIcon icon={value.icon} />
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
