import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import FilteredProjects from "./FilteredProjects";
import { BASE_API_URL } from "./ProjectsSection";
import axios from "axios";
import "./SingleServicePage.css";

const SingleServicePage = () => {
  const { serviceName } = useParams(); // Get the service_name from the URL
  const location = useLocation();
  // eslint-disable-next-line
  const { servicesData, service_id, service_desc, service_name, service_title, service_image } = location.state || {}; 
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);
  // Find the service in servicesData based on the serviceName from the URL
  const service = servicesData.find(
    (service) => service.service_name.split(' ')[0].toLowerCase() === serviceName.split(' ')[0].toLowerCase()
  );

  useEffect(() => {
    if (service) {
      axios
        .get(`${BASE_API_URL}projects/serviceprojects/${service_id}`) // Fetch projects by service ID
        .then((response) => {
          setFilteredProjects(response.data.data);
          setError(null);
        })
        .catch((error) => {
          setError("Failed to fetch projects due to " + error);
        });
    }
  }, [service, service_id]);


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
        <div dangerouslySetInnerHTML={{ __html: service_desc }} />
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
