import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectsSection.css';

const services = [
  { id: 'all', name: 'All' },
  { id: 'engineering', name: 'Engineering' },
  { id: 'transportation', name: 'Transportation' },
  { id: 'planning', name: 'Planning' },
  { id: 'architecture', name: 'Architecture & Sustainability' },
  { id: 'project-management', name: 'Project Management & Construction Supervision' },
  { id: 'sectors', name: 'Sectors' },
];


const projects = [
  { id: 1, service: 'engineering', name: 'Red Sea Development Roads', location: 'Tabuk, KSA', image: 'https://picsum.photos/seed/random/200/150' },
  { id: 2, service: 'engineering', name: 'Hilton DoubleTree', location: 'Al Khobar, KSA', image: 'https://picsum.photos/seed/random/200/150' },
  { id: 3, service: 'architecture', name: 'Madinah Scheme Development', location: 'Lugbe, Nigeria', image: 'https://picsum.photos/seed/random/200/150' },
  { id: 4, service: 'transportation', name: 'Third Ring Road', location: 'Mecca, KSA', image: 'https://picsum.photos/seed/random/200/150' },
  { id: 5, service: 'transportation', name: 'Second Ring Road', location: 'Abha, KSA', image: 'https://picsum.photos/seed/random/200/150' },
  { id: 6, service: 'planning', name: 'Al Hajj - Makkah Road', location: 'Al Madinah Al Munawwara, KSA', image: 'https://picsum.photos/seed/random/200/150' },
  { id: 8, service: 'project-management', name: 'Jeddah - Mecca Highway', location: 'Jeddah, KSA', image: 'https://picsum.photos/seed/random/200/150' },
  { id: 7, service: 'sectors', name: 'Hanifa Valley Bridge', location: 'Riyadh, KSA', image: 'https://picsum.photos/seed/random/200/150', sector: 'Bridges' },
  { id: 9, service: 'sectors', name: 'King Abdullah Sports City', location: 'Jeddah, KSA', image: 'https://picsum.photos/seed/random/200/150' , sector: 'Sports'},
  { id: 10, service: 'sectors', name: 'Al Mikhwah - Al Majarrah Road', location: 'Mecca, KSA', image: 'https://picsum.photos/seed/random/200/150', sector: 'Roads' },
  { id: 11, service: 'sectors', name: 'Al Qatif - Al Awamiyah - Safwa', location: 'Eastern Province, KSA', image: 'https://picsum.photos/seed/random/200/150', sector: 'Roads' },
  { id: 12, service: 'sectors', name: 'Eastern Province Roads', location: 'KSA', image: 'https://picsum.photos/seed/random/200/150' },
  { id: 13, service: 'transportation', name: 'Al Hijaz Road Tunnel', location: 'Al Madinah Al Munawwara, KSA', image: 'https://picsum.photos/seed/random/200/150' },
  { id: 14, service: 'engineering', name: 'Al Madinah Al Munawwara - KSA', location: 'KSA', image: 'https://picsum.photos/seed/random/200/150' },
  { id: 15, sector: [{ "id": 2, "name": "Roads and Highways", "description": "", "my_order": 1}], service: 'transportation', name: 'Al Madinah Al Munawwara Entrances', location: 'KSA', image: 'https://picsum.photos/seed/random/200/150' },
];

const ProjectsSection = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('all');
  const [selectedSector, setSelectedSector] = useState(null);
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(9);

  // Handle service filter click
  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
    setSelectedSector(null); // Reset sector filter when changing service
  };

  // Filter projects based on selected service and sector
  const filteredProjects = projects
    .filter((project) => selectedService === 'all' || project.service === selectedService)
    .filter((project) => !selectedSector || project.sector === selectedSector);

  // Extract unique sectors from projects for secondary filter (only for 'sectors')
  const sectors = [...new Set(projects.filter((project) => project.service === 'sectors').map((project) => project.sector))];

  return (
    <section className="projects-section">
      {/* Primary Service Filters */}
      <div className="filters mb-60">
        {services.map((service) => (
          <button
            key={service.id}
            className={`filter-button ${selectedService === service.id ? 'active' : ''}`}
            onClick={() => handleServiceClick(service.id)}
          >
            {service.name}
            {service.id === 'sectors' && selectedService === 'sectors' && <span className="arrow-down"> ▼</span>}
          </button>
        ))}
      </div>

      {/* Secondary Sector Filters for "SECTORS" */}
      {selectedService === 'sectors' && sectors.length > 0 && (
        <div className="secondary-filters mb-30">
          {sectors.map((sector) => (
            <button
              key={sector}
              className={`secondary-filter-button ${selectedSector === sector ? 'active' : ''}`}
              onClick={() => setSelectedSector(sector)}
            >
              {sector}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.slice(0, visibleProjectsCount).map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <img src={project.image} alt={project.name} className="projects-image" />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-location">{project.location}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProjectsCount < filteredProjects.length && (
        <div className="load-more">
          <button className="load-more-button" onClick={() => setVisibleProjectsCount(visibleProjectsCount + 6)}>Load More</button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
