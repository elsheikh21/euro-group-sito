import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "./ServicesCarousel"; // Import the data
import "./SingleServicePage.css";

const SingleServicePage = () => {
  const { serviceName } = useParams(); // Get the service_name from the URL

  // Find the service in servicesData based on the serviceName from the URL
  const service = servicesData.find(
    (service) => service.service_name === serviceName
  );

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <div className="single-service-page">
      {/* Project Main Image with dynamic background */}
      <div
        className="single-service-main-image"
        style={{
          backgroundImage: `url(${service.imageUrl})`, // Use the image URL dynamically
          backgroundSize: "cover", // Make sure the image covers the container
          backgroundPosition: "center", // Center the image
        }}
      >
        <div className="single-service-main-overlay">
          <div className="single-service-title-container">
            <h1 className="single-service-title">{service.title}</h1>
          </div>
        </div>
      </div>

      <div className="single-service-info-section">
        {/* Left Column: Main Project Information */}
        <div className="single-service-info-left">
          <p>{service.description}</p>
        </div>
      </div>

      {/* Related Projects Section */}
      <div className="related-projects-section">
        <h3>
          <strong>Related Projects</strong>
        </h3>
        <div className="related-projects-carousel">
          {/* Add related projects here */}
        </div>
      </div>
    </div>
  );
};

export default SingleServicePage;
