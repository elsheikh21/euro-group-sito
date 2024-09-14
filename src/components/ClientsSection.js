// src/components/ClientsSection.js

import React from 'react';
import './ClientsSection.css'; // Import CSS specific to this component

const ClientsSection = () => {
  // Sample list of client logos - Replace the image URLs with the actual logo URLs you have
  const clients = [
    'https://picsum.photos/100/100?random=1',
    'https://picsum.photos/100/100?random=2',
    'https://picsum.photos/100/100?random=3',
    'https://picsum.photos/100/100?random=4',
    'https://picsum.photos/100/100?random=5',
    'https://picsum.photos/100/100?random=6',
    'https://picsum.photos/100/100?random=7',
    'https://picsum.photos/100/100?random=8',
    'https://picsum.photos/100/100?random=9',
    'https://picsum.photos/100/100?random=10',
    'https://picsum.photos/100/100?random=11',
    'https://picsum.photos/100/100?random=12',
    'https://picsum.photos/100/100?random=10',
    'https://picsum.photos/100/100?random=11',
    'https://picsum.photos/100/100?random=12',
    'https://picsum.photos/100/100?random=10',
    'https://picsum.photos/100/100?random=11',
    'https://picsum.photos/100/100?random=12',
  ];

  return (
    <section className="clients-section">
      <h2 className="clients-section-title">Our Clients & Partners</h2>
      <div className="clients-logos-container">
        {clients.map((client, index) => (
          <div key={index} className="client-logo">
            <img src={client} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
