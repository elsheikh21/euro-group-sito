// src/pages/Projects.js

import React from 'react';
import MainProjectSection from '../components/MainProjectSection';
import ProjectsSection from '../components/ProjectsSection';

const Projects = () => {
  return (
    <div>
      <MainProjectSection
        heading="OUR PROJECTS"
        backgroundImage="https://picsum.photos/seed/picsum/1200/900" // Replace with the actual image URL
      />
      <ProjectsSection />
    </div>
  );
};

export default Projects;
