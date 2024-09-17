import React from 'react';
import './CertificatesSection.css'; // Import CSS specific to this component

const CertificatesSection = () => {
  // Array of certificates with image sources and alt texts
  const certificates = [
    {
      imageSrc: '../images/iso45001-black.png',
      altText: 'ISO 14001 Certificate',
    },
    {
        imageSrc: '../images/iso45001-black.png',
        altText: 'ISO 45001 Certificate',
    },
    {
        imageSrc: '../images/iso45001-black.png',
      altText: 'ISO 9001:2015 Certificate',
    },
  ];

  return (
    <section className="certificates-section">
      <h2 className="certificates-title">Our Certificates</h2>
      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-item">
            <img src={certificate.imageSrc} alt={certificate.altText} className="certificate-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
