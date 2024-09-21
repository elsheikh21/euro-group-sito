// src/pages/Projects.js

import React from 'react';
import MainProjectSection from '../components/MainProjectSection';
import ProjectsSection from '../components/ProjectsSection';

const Projects = () => {
  return (
    <div>
      <MainProjectSection/>
      <ProjectsSection />
      {/* TODO: Pagination of projects instead of "LOAD MORE" functionality */}
    </div>
  );
};

export default Projects;
