import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./ProjectsSection.css";

export const BASE_API_URL = "https://api.eurogroup.org/";

const ProjectsSection = () => {
  /* eslint-disable no-unused-vars */
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState("all");
  const [selectedSector, setSelectedSector] = useState(null);
  // const [pageNumber, setPageNumber] = useState(0); // New state for pagination
  const projectsPerPage = 12;

  // get current page from URL query params, default to 0
  const pageNumber = parseInt(searchParams.get("page") || "1", 10);

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
      selectedService === "all" || 
      (project.service && 
       Array.isArray(project.service) && 
       project.service.some(svc => svc.id === selectedService))
  )
  .filter((project) => !selectedSector || project.sector === selectedSector);

  const pageIndex = pageNumber - 1;

  const pagesVisited = pageIndex * projectsPerPage;
  const displayProjects = filteredProjects.slice(
    pagesVisited,
    pagesVisited + projectsPerPage
  );
  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);

  const changePage = ({ selected }) => {
    setSearchParams({ page: selected + 1});
  };

//  useEffect(() => {
//    if (parseInt(searchParams.get("page") || "1", 10) !== 1) {
//      setSearchParams({ page: 1 });
//    }
    // setSearchParams({ page: 1 });
   // eslint-disable-next-line
// }, [selectedService, selectedSector]);

const [services, setServices] = useState([]);

useEffect(() => {
  axios
    .get(`${BASE_API_URL}projects/mainservices`)
    .then((response) => {
      const allServices = {
        id: "all",
        name: "All",
      };
      setServices([allServices, ...response.data.data.filter(service => service.id !== "all")]);
      setError(null);
    })
    .catch((error) => {
      setError("Failed to fetch services due to " + error);
    });
}, []);

  // Handle service filter click
  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
    setSelectedSector(null); // Reset sector filter when changing service
    // setPageNumber(0); // Reset to first page when filters change
   setSearchParams({ page: 1 });
  };

    // Extract unique sectors from projects for secondary filter (only for 'sectors')
  const sectors = [
    ...new Set(
      projects
        .filter((project) => project.service === "sectors")
        .map((project) => project.sector)
    ),
  ];

  return (
    <section className="projects-section">
        {/* Primary Service Filters */}
        <div className="proj-filters">
        {services.map((service) => (
          <button
            key={service.id}
            className={`feat-proj-filter-button ${
              selectedService === service.id ? "active" : ""
            }`}
            onClick={() => handleServiceClick(service.id)}
          >
            {service.name}
            {service.id === "sectors" && selectedService === "sectors"}
          </button>
        ))}
      </div>

      {/* Secondary Sector Filters for "SECTORS" */}
      {selectedService === "sectors" && sectors.length > 0 && (
        <div className="secondary-filters mb-60">
          {sectors.map((sector) => (
            <button
              key={sector}
              className={`secondary-filter-button ${
                selectedSector === sector ? "active" : ""
              }`}
              onClick={() => {
               setSelectedSector(sector);
               setSearchParams({ page: 1 });
              }}
            >
              {sector}
            </button>
          ))}
        </div>
      )}
      {/* Projects Grid */}
      <div className="projects-grid">
        {displayProjects.map((project) => (
          <a
            href={`/project/${project.id}?page=${pageNumber}`}
            key={project.id}
            className="project-card"
            onClick={e => {
                e.preventDefault();
                navigate(`/project/${project.id}?page=${pageNumber}`, {
                  state: { project },
                });
            }}
          >
            <img
              src={`https://api.eurogroup.org${project.cover_image}`}
              alt={project.name}
              className="projects-image"
            />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-location">{project.location}</p>
          </a>
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
        forcePage={pageIndex}
      />
    </section>
  );
};

export default ProjectsSection;
