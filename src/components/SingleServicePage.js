import React from "react";
import { useParams } from "react-router-dom";
import "./SingleServicePage.css";

const SingleServicePage = () => {
  const { serviceName } = useParams(); // Access the service_name from the URL

  // Fetch the service details based on serviceName or use static data for demonstration
  const serviceDetails = {
    scientific: {
      title: "GTS Scientific",
      description: "Detailed description of GTS Scientific...",
    },
    executive: {
      title: "GTS Executive",
      description: "Detailed description of GTS Executive...",
    },
  };

  const service = serviceDetails[serviceName] || {
    title: "Service Not Found",
    description: "",
  };

  return (
    <div className="single-service-page">
      {/* Project Main Image */}
      <div className="single-service-main-image">
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
          <br />
          <p>Scope of work includes:</p>
          <ul>
            <li>Access Roads to Shurayrah, North Jetty and Airport Road</li>
            <li>
              Plot Connection Roads which interconnects utilities buildings
            </li>
          </ul>
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
