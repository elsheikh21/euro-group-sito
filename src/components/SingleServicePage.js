import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { servicesData } from "./ServicesCarousel"; // Import the data
import FilteredProjects from "./FilteredProjects";
import { BASE_API_URL } from "./ProjectsSection";
import axios from "axios";
import "./SingleServicePage.css";

const SingleServicePage = () => {
  const { serviceName } = useParams(); // Get the service_name from the URL
  const location = useLocation();
  // eslint-disable-next-line
  const { service_name, service_title, service_image } = location.state || {}; 
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}projects/`) // Use the correct API URL
      .then((response) => {
        setProjects(response.data.data);
        setError(null);
      })
      .catch((error) => {
        setError("Failed to fetch projects due to " + error);
      });
  }, []);

  // Find the service in servicesData based on the serviceName from the URL
  const service = servicesData.find(
    (service) => service.service_name === serviceName
  );

  const filteredProjects = projects.filter((proj) => {
    const hasService = proj.service.some((serv) => {
      const servName = serv.name.trim().toLowerCase();
      const servTitle = service_title.trim().toLowerCase();
      const isMatch = servName === servTitle;
      return isMatch;
    });

    return hasService; // Return true if the project has a matching service
  });

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <div className="single-service-page">
      {/* Project Main Image with dynamic background */}
      <div
        className="single-service-main-image"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          ...(service_image ? { backgroundImage: `url(${service_image})` } : {}),        }}
      >
        <div className="single-service-main-overlay">
          <div className="single-service-title-container">
            <h1 className="single-service-title">
              {service_title}
            </h1>
          </div>
        </div>
      </div>
      <div className="single-service-info-section">
        {/* Left Column: Main Project Information */}
        <div className="single-service-info-left">
          <p>{service.description}</p>
        </div>
      </div>
      <div className="related-projects-section">
        <h3>
          <strong>Related Projects</strong>
        </h3>
        {filteredProjects.length > 0 ? (
          <FilteredProjects projects={filteredProjects} />
        ) : (
          <p>
            No Projects added yet to this Service, Please revisit our website
            later.
          </p>
        )}
      </div>
    </div>
  );
};

export default SingleServicePage;
