import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BASE_API_URL } from "./ProjectsSection";
import FilteredProjects from "./FilteredProjects";
import axios from "axios";
import "./SingleProjectPage.css";

const SingleProjectPage = () => {
  /* eslint-disable no-unused-vars */
  const { projectId } = useParams(); // Extract projectId from URL
  const location = useLocation(); // Get the location object to access passed state
  // Access the project data passed via navigate
  // const project = location.state?.project;
  // State to hold the fetched projects
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setRelatedProjects] = useState([]);

  const [project, setProject] = useState(location.state?.project || null);
  const [loading, setLoading] = useState(!location.state?.project);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}projects/`) // Use the correct API URL
      .then((response) => {
        setProjects(response.data.data); // Set the projects data
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
    }, []);

  // Step 2: Filter projects based on the first sector of the current project
  useEffect(() => {
    if (project?.id) { // This check is now inside the hook
      axios
        .get(`${BASE_API_URL}projects/related/${project.id}`)
        .then((response) => {
          setRelatedProjects(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching related projects:", error);
        });
    }
  }, [project]);

  useEffect(() => {
  // Handle case where project is not found
  if (!project) {
    setLoading(true);
    axios
      .get(`${BASE_API_URL}projects/${projectId}`)
      .then(response => {
         setProject(response.data.data);
         setLoading(false);
      })
      .catch(err => {
         setError("Project Not Found!");
         setLoading(false);
     });
   }
  }, [projectId, project]);

  if (loading) return <div>Loading</div>
  if (error || !project) return <div>Project Not Found!</div>



  return (
    <div className="project-page">
      {/* Project Main Image */}
      <div
        className="project-main-image"
        style={{
          backgroundImage: `url(https://api.eurogroup.org${project.cover_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="project-main-overlay">
          <div className="project-title-container">
            <h1 className="project-title">
              {project.name || "Name Unavailable"}
            </h1>
            <p className="single-project-location">
              {project.location || "Location Unavailable"}
            </p>
          </div>
        </div>
      </div>

      <div className="project-info-section">
        {/* Left Column: Main Project Information */}
        <div className="project-info-left">
          <div
            dangerouslySetInnerHTML={{
              __html: project.description || "<p>Desc Unavailable</p>",
            }}
          />
        </div>

        <div className="project-info-right">
          <div className="proj-info-item">
            <div className="info-label">
              <img
                src="../icons/customer.webp"
                alt="Client Icon"
                className="info-icon"
              />
              <span>Client</span>
            </div>
            <ul className="no-mb">
              <li className="services-list-li">
                {project.client.name || "Client Name Unavailable"}
              </li>
            </ul>
          </div>
          <div className="proj-info-item">
            <div className="info-label">
              <img
                src="../icons/gears.webp"
                alt="Service Icon"
                className="info-icon"
              />
              <span>Service</span>
            </div>
            <div className="service-list">
              <ul className="no-mb">
                {project.service.map((service, index) => (
                  <li className="services-list-li" key={index}>
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="proj-info-item">
            <div className="info-label">
              <img
                src="../icons/engineer.webp"
                alt="Sector Icon"
                className="info-icon"
              />
              <span>Sector</span>
            </div>
            <ul className="no-mb">
              {project.sector && project.sector.length > 0 ? (
                project.sector.map((sector) => (
                  <li key={sector.id} className="services-list-li">
                    {sector.name}
                  </li>
                ))
              ) : (
                <li className="services-list-li">Sector Unavailable</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Project Images Section */}
      <div className="project-images-section">
        <div className="project-image-main">
          <img
            src={
              project.landscape_image1
                ? `https://api.eurogroup.org${project.landscape_image1}`
                : "../images/team.webp"
            }
            alt="Main Project"
          />
        </div>
        <div className="project-images-row">
          <div className="portrait-project-image">
            <img
              src={
                project.portrait_image1
                  ? `https://api.eurogroup.org${project.portrait_image1}`
                  : "../images/team.webp"
              }
              alt="Project Detail 1"
            />
          </div>
          <div className="portrait-project-image">
            <img
              src={
                project.portrait_image2
                  ? `https://api.eurogroup.org${project.portrait_image2}`
                  : "../images/team.webp"
              }
              alt="Project Detail 2"
            />
          </div>
        </div>
        <div className="project-image-main">
          <img
            src={
              project.landscape_image2
                ? `https://api.eurogroup.org${project.landscape_image2}`
                : "../images/team.webp"
            }
            alt="Final Project"
          />
        </div>
      </div>

      {/* Related Projects Section */}
      <div className="related-projects-section">
        <h3>
          <strong>Related Projects</strong>
        </h3>
        <FilteredProjects projects={filteredProjects} />
      </div>
    </div>
  );
};

export default SingleProjectPage;
