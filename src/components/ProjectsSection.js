import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./ProjectsSection.css";

const services = [
  { id: "all", name: "All" },
  { id: "engineering", name: "Engineering" },
  { id: "transportation", name: "Transportation" },
  { id: "planning", name: "Planning" },
  { id: "architecture", name: "Architecture & Sustainability" },
  {
    id: "project-management",
    name: "Project Management & Construction Supervision",
  },
  { id: "sectors", name: "Sectors" },
];

const projects = [
  {
    id: 1,
    service: "engineering",
    name: "Red Sea Development Roads",
    location: "Tabuk, KSA",
    image: "https://picsum.photos/seed/random/200/150",
  },
  {
    id: 2,
    service: "engineering",
    name: "Hilton DoubleTree",
    location: "Al Khobar, KSA",
    image: "https://picsum.photos/seed/random/200/150",
  },
  {
    id: 3,
    service: "architecture",
    name: "Madinah Scheme Development",
    location: "Lugbe, Nigeria",
    image: "https://picsum.photos/seed/random/200/150",
  },
  {
    id: 4,
    service: "transportation",
    name: "Third Ring Road",
    location: "Mecca, KSA",
    image: "https://picsum.photos/seed/random/200/150",
  },
  {
    id: 5,
    service: "transportation",
    name: "Second Ring Road",
    location: "Abha, KSA",
    image: "https://picsum.photos/seed/random/200/150",
  },
  {
    id: 6,
    service: "planning",
    name: "Al Hajj - Makkah Road",
    location: "Al Madinah Al Munawwara, KSA",
    image: "https://picsum.photos/seed/random/200/150",
  },
  {
    id: 8,
    service: "project-management",
    name: "Jeddah - Mecca Highway",
    location: "Jeddah, KSA",
    image: "https://picsum.photos/seed/random/200/150",
  },
  {
    id: 7,
    service: "sectors",
    name: "Hanifa Valley Bridge",
    location: "Riyadh, KSA",
    image: "https://picsum.photos/seed/random/200/150",
    sector: "Bridges",
  },
  {
    id: 9,
    service: "sectors",
    name: "King Abdullah Sports City",
    location: "Jeddah, KSA",
    image: "https://picsum.photos/seed/random/200/150",
    sector: "Sports",
  },
  {
    id: 10,
    service: "sectors",
    name: "Al Mikhwah - Al Majarrah Road",
    location: "Mecca, KSA",
    image: "https://picsum.photos/seed/random/200/150",
    sector: "Roads",
  },
  {
    id: 11,
    service: "sectors",
    name: "Al Qatif - Al Awamiyah - Safwa",
    location: "Eastern Province, KSA",
    image: "https://picsum.photos/seed/random/200/150",
    sector: "Roads",
  },
  {
    id: 12,
    service: "sectors",
    name: "Eastern Province Roads",
    location: "KSA",
    image: "https://picsum.photos/seed/random/200/150",
  },
  {
    id: 13,
    service: "transportation",
    name: "Al Hijaz Road Tunnel",
    location: "Al Madinah Al Munawwara, KSA",
    image: "https://picsum.photos/seed/random/200/150",
  },
  {
    id: 14,
    service: "engineering",
    name: "Al Madinah Al Munawwara - KSA",
    location: "KSA",
    image: "https://picsum.photos/seed/random/200/150",
  },
  {
    id: 15,
    sector: [
      { id: 2, name: "Roads and Highways", description: "", my_order: 1 },
    ],
    service: "transportation",
    name: "Al Madinah Al Munawwara Entrances",
    location: "KSA",
    image: "https://picsum.photos/seed/random/200/150",
  },
];

const ProjectsSection = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("all");
  const [selectedSector, setSelectedSector] = useState(null);
  const [pageNumber, setPageNumber] = useState(0); // New state for pagination
  const projectsPerPage = 12; // Define how many projects per page
  const [error, setError] = useState(null); // State to store any error during API call

  // Handle service filter click
  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
    setSelectedSector(null); // Reset sector filter when changing service
    setPageNumber(0); // Reset to first page when filters change
  };

  // Filter projects based on selected service and sector
  const filteredProjects = projects
    .filter(
      (project) =>
        selectedService === "all" || project.service === selectedService
    )
    .filter((project) => !selectedSector || project.sector === selectedSector);

  // Pagination logic
  const pagesVisited = pageNumber * projectsPerPage;
  const displayProjects = filteredProjects.slice(
    pagesVisited,
    pagesVisited + projectsPerPage
  );

  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Fetch projects from the backend API
  useEffect(() => {
    axios
      .get("https://euro-group-5011e47364b0.herokuapp.com/projects/")
      .then((response) => {
        console.log("Success:", response);
        /* setProjects(response.data.data); // Set the fetched projects data */
        setError(null); // Reset error state
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to fetch projects. Please try again later.");
      });
  }, []); // Empty dependency array to call only on component mount

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
              onClick={() => setSelectedSector(sector)}
            >
              {sector}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div className="projects-grid">
        {displayProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="projects-image"
            />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-location">{project.location}</p>
          </div>
        ))}
      </div>

      {/* Pagination Component */}
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
