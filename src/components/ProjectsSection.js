// src/components/ProjectsSection.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './ProjectsSection.css'; // Import CSS specific to this component

// Dummy data for services
const services = [
  { id: 'all', name: 'All' },
  { id: 'engineering', name: 'Engineering' },
  { id: 'project-management', name: 'Project Management & Construction Supervision' },
  { id: 'transportation', name: 'Transportation' },
  { id: 'planning', name: 'Planning' },
  { id: 'architecture', name: 'Architecture & Sustainability' },
  { id: 'sectors', name: 'Sectors' },
];

// Dummy data for projects
const projects = [
  { id: 1, service: 'engineering', name: 'Red Sea Development Roads', location: 'Tabuk, KSA', image: 'https://picsum.photos/200/150?random=1' },
  { id: 2, service: 'engineering', name: 'Hilton DoubleTree', location: 'Al Khobar, KSA', image: 'https://picsum.photos/200/150?random=2' },
  { id: 3, service: 'architecture', name: 'Madinah Scheme Development', location: 'Lugbe, Nigeria', image: 'https://picsum.photos/200/150?random=3' },
  { id: 4, service: 'transportation', name: 'Third Ring Road', location: 'Mecca, KSA', image: 'https://picsum.photos/200/150?random=4' },
  { id: 5, service: 'transportation', name: 'Second Ring Road', location: 'Abha, KSA', image: 'https://picsum.photos/200/150?random=5' },
  { id: 6, service: 'planning', name: 'Al Hajj - Makkah Road', location: 'Al Madinah Al Munawwara, KSA', image: 'https://picsum.photos/200/150?random=6' },
  { id: 7, service: 'sectors', name: 'Hanifa Valley Bridge', location: 'Riyadh, KSA', image: 'https://picsum.photos/200/150?random=7' },
  { id: 8, service: 'project-management', name: 'Jeddah - Mecca Highway', location: 'Jeddah, KSA', image: 'https://picsum.photos/200/150?random=8' },
  { id: 9, service: 'sectors', name: 'King Abdullah Sports City', location: 'Jeddah, KSA', image: 'https://picsum.photos/200/150?random=9' },
  { id: 10, service: 'sectors', name: 'Al Mikhwah - Al Majarrah Road', location: 'Mecca, KSA', image: 'https://picsum.photos/200/150?random=10' },
  { id: 11, service: 'sectors', name: 'Al Qatif - Al Awamiyah - Safwa', location: 'Eastern Province, KSA', image: 'https://picsum.photos/200/150?random=11' },
  { id: 12, service: 'sectors', name: 'Eastern Province Roads', location: 'KSA', image: 'https://picsum.photos/200/150?random=12' },
  { id: 13, service: 'transportation', name: 'Al Hijaz Road Tunnel', location: 'Al Madinah Al Munawwara, KSA', image: 'https://picsum.photos/200/150?random=13' },
  { id: 14, service: 'engineering', name: 'Al Madinah Al Munawwara - KSA', location: 'KSA', image: 'https://picsum.photos/200/150?random=14' },
  { id: 15, service: 'transportation', name: 'Al Madinah Al Munawwara Entrances', location: 'KSA', image: 'https://picsum.photos/200/150?random=15' },
];

const ProjectsSection = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [selectedService, setSelectedService] = useState('all');
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(9); // Initial number of projects to display

  // Function to filter projects by selected service
  const filteredProjects = selectedService === 'all' 
    ? projects 
    : projects.filter((project) => project.service === selectedService);

  // Function to handle "Load More" button click
  const handleLoadMore = () => {
    setVisibleProjectsCount((prevCount) => prevCount + 6); // Load 6 more projects each time
  };

  // Function to handle project card click
  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`); // Navigate to dynamic route for the clicked project
  };

  return (
    <section className="projects-section">
      {/* Service Filters */}
      <div className="filters">
        {services.map((service) => (
          <button 
            key={service.id} 
            className={`filter-button ${selectedService === service.id ? 'active' : ''}`}
            onClick={() => setSelectedService(service.id)}
          >
            {service.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.slice(0, visibleProjectsCount).map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            onClick={() => handleProjectClick(project.id)} // Add onClick handler
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-location">{project.location}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProjectsCount < filteredProjects.length && (
        <div className="load-more">
          <button className="load-more-button" onClick={handleLoadMore}>Load More</button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
