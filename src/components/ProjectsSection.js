import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./ProjectsSection.css";

export const BASE_API_URL = "https://euro-group-5011e47364b0.herokuapp.com/";

const ProjectsSection = () => {
  /* eslint-disable no-unused-vars */
  const navigate = useNavigate(); // Hook to navigate between pages
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState("all");
  const [selectedSector, setSelectedSector] = useState(null);
  const [pageNumber, setPageNumber] = useState(0); // New state for pagination
  const projectsPerPage = 12;

  // Fetch projects from the backend API
  useEffect(() => {
    axios
      .get(`${BASE_API_URL}projects/`)
      .then((response) => {
        setProjects(response.data.data);
        setError(null);
      })
      .catch((error) => {
        setError("Failed to fetch projects due to " + error);
      });
  }, []);

  // Pagination logic
  const filteredProjects = projects
    .filter(
      (project) =>
        selectedService === "all" || project.service === selectedService
    )
    .filter((project) => !selectedSector || project.sector === selectedSector);

  const pagesVisited = pageNumber * projectsPerPage;
  const displayProjects = filteredProjects.slice(
    pagesVisited,
    pagesVisited + projectsPerPage
  );
  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className="projects-section">
      {/* Projects Grid */}
      <div className="projects-grid">
        {displayProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={
              () =>
                navigate(`/project/${project.id}`, {
                  state: { project },
                }) // Pass project data to the next page
            }
          >
            <img
              src={`${BASE_API_URL}${project.cover_image}`}
              alt={project.name}
              className="projects-image"
            />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-location">{project.location}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination-container"}
        previousLinkClassName={"pagination-link"}
        nextLinkClassName={"pagination-link"}
        disabledClassName={"pagination-disabled"}
        activeClassName={"pagination-active"}
        pageClassName={"page-number"}
        pageLinkClassName={"page-number"}
        activeLinkClassName={"page-number-active"}
      />
    </section>
  );
};

export default ProjectsSection;
