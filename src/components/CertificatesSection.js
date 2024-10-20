import React from "react";
import "./CertificatesSection.css";

const CertificatesSection = () => {
  const certificates = [
    {
      imageSrc: "../images/bv.png",
      altText: "ISO 14001 Certificate",
    },
    {
      imageSrc: "../images/IRF-Logo-2015.png",
      altText: "ISO 9001:2015 Certificate",
    },
    {
      imageSrc: "../images/375684.png",
      altText: "ISO 45001 Certificate",
    },
  ];

  return (
    <section className="certificates-section">
      <h2 className="certificates-title">Our Certificates</h2>
      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-item">
            <img
              src={certificate.imageSrc}
              alt={certificate.altText}
              className="certificate-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
