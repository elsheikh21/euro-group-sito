// src/components/SingleProjectPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleProjectPage.css'; // Import CSS specific to this component

// Dummy data for projects (use actual data or fetch from a backend)
const projects = [
  { id: 1, name: 'Red Sea Development Roads', location: 'Tabuk, KSA', description: 'This project is one of the most significant ...', client: 'Red Sea Development Company', services: ['Engineering', 'Project Management', 'Sustainability'], mainImage: 'https://picsum.photos/seed/pics/2400/1200', image1: 'https://picsum.photos/seed/2/1200/600', image2: 'https://picsum.photos/seed/3/600/400', image3: 'https://picsum.photos/seed/4/600/400', image4: 'https://picsum.photos/seed/5/1200/600' },
  { id: 2, name: 'Hilton DoubleTree', location: 'Al Khobar, KSA', description: 'A luxurious hotel development ...', client: 'Hilton Worldwide', services: ['Architecture', 'Sustainability'], mainImage: 'https://picsum.photos/seed/2/2400/1200', image1: 'https://picsum.photos/seed/6/1200/600', image2: 'https://picsum.photos/seed/7/600/400', image3: 'https://picsum.photos/seed/8/600/400', image4: 'https://picsum.photos/seed/9/1200/600' },
  { id: 3, name: 'Madinah Scheme Development', location: 'Lugbe, Nigeria', description: 'The Red Sea Project is one of three giga-projects announced by Prince Mohammad bin Salman bin Abdulaziz Al Saud in 2017. Extending over 28,000 km² on Saudi Arabia\'s Red Sea coast, the destination offers a unique luxurious range of experiences, from island getaways to resort holidays, mountain retreats, and desert adventures, focusing on the wellness and ecology for local and international visitors.', client: 'Madinah Developers', services: ['Urban Planning', 'Engineering', "Consultancy"], sector: "Construction", mainImage: 'https://picsum.photos/seed/pc3s/2400/1200', image1: 'https://picsum.photos/seed/10/1200/600', image2: 'https://picsum.photos/seed/11/600/400', image3: 'https://picsum.photos/seed/12/600/400', image4: 'https://picsum.photos/seed/13/1200/600' },
  { id: 4, name: 'Red Sea Development Roads', location: 'Tabuk, KSA', description: 'This project is one of the most significant ...', client: 'Red Sea Development Company', services: ['Engineering', 'Project Management', 'Sustainability'], mainImage: 'https://picsum.photos/seed/pics/2400/1200', image1: 'https://picsum.photos/seed/2/1200/600', image2: 'https://picsum.photos/seed/3/600/400', image3: 'https://picsum.photos/seed/4/600/400', image4: 'https://picsum.photos/seed/5/1200/600' },
  { id: 5, name: 'Hilton DoubleTree', location: 'Al Khobar, KSA', description: 'A luxurious hotel development ...', client: 'Hilton Worldwide', services: ['Architecture', 'Sustainability'], mainImage: 'https://picsum.photos/seed/2/2400/1200', image1: 'https://picsum.photos/seed/6/1200/600', image2: 'https://picsum.photos/seed/7/600/400', image3: 'https://picsum.photos/seed/8/600/400', image4: 'https://picsum.photos/seed/9/1200/600' },
  { id: 6, name: 'Madinah Scheme Development', location: 'Lugbe, Nigeria', description: 'The Red Sea Project is one of three giga-projects announced by Prince Mohammad bin Salman bin Abdulaziz Al Saud in 2017. Extending over 28,000 km² on Saudi Arabia\'s Red Sea coast, the destination offers a unique luxurious range of experiences, from island getaways to resort holidays, mountain retreats, and desert adventures, focusing on the wellness and ecology for local and international visitors.', client: 'Madinah Developers', services: ['Urban Planning', 'Engineering', "Consultancy"], sector: "Construction", mainImage: 'https://picsum.photos/seed/pc3s/2400/1200', image1: 'https://picsum.photos/seed/10/1200/600', image2: 'https://picsum.photos/seed/11/600/400', image3: 'https://picsum.photos/seed/12/600/400', image4: 'https://picsum.photos/seed/13/1200/600' },
  { id: 7, name: 'Red Sea Development Roads', location: 'Tabuk, KSA', description: 'The Red Sea Project is one of three giga-projects announced by Prince Mohammad bin Selman bin Abdulaziz Al Saud in 2017. Extending over 28,000 km2 on Saudi Arabia\'s Red Sea coast, the destination offers a unique luxurious range of experiences, from island getaways to resort holidays, mountain retreats and desert adventures, focusing on the wellness and ecology for local and international visitors.', client: 'Red Sea Development Company', services: ['Engineering', 'Project Management', 'Sustainability'], sector: "Construction", mainImage: 'https://picsum.photos/seed/pics/2400/1200', image1: 'https://picsum.photos/seed/2/1200/600', image2: 'https://picsum.photos/seed/3/600/400', image3: 'https://picsum.photos/seed/4/600/400', image4: 'https://picsum.photos/seed/5/1200/600' },
  { id: 8, name: 'Hilton DoubleTree', location: 'Al Khobar, KSA', description: 'A luxurious hotel development ...', client: 'Hilton Worldwide', services: ['Architecture', 'Sustainability'], mainImage: 'https://picsum.photos/seed/2/2400/1200', image1: 'https://picsum.photos/seed/6/1200/600', image2: 'https://picsum.photos/seed/7/600/400', image3: 'https://picsum.photos/seed/8/600/400', image4: 'https://picsum.photos/seed/9/1200/600' },
  { id: 9, name: 'Madinah Scheme Development', location: 'Lugbe, Nigeria', description: 'The Red Sea Project is one of three giga-projects announced by Prince Mohammad bin Salman bin Abdulaziz Al Saud in 2017. Extending over 28,000 km² on Saudi Arabia\'s Red Sea coast, the destination offers a unique luxurious range of experiences, from island getaways to resort holidays, mountain retreats, and desert adventures, focusing on the wellness and ecology for local and international visitors.', client: 'Madinah Developers', services: ['Urban Planning', 'Engineering', "Consultancy"], sector: "Construction", mainImage: 'https://picsum.photos/seed/pc3s/2400/1200', image1: 'https://picsum.photos/seed/10/1200/600', image2: 'https://picsum.photos/seed/11/600/400', image3: 'https://picsum.photos/seed/12/600/400', image4: 'https://picsum.photos/seed/13/1200/600' },
  { id: 10, name: 'Red Sea Development Roads', location: 'Tabuk, KSA', description: 'This project is one of the most significant ...', client: 'Red Sea Development Company', services: ['Engineering', 'Project Management', 'Sustainability'], mainImage: 'https://picsum.photos/seed/pics/2400/1200', image1: 'https://picsum.photos/seed/2/1200/600', image2: 'https://picsum.photos/seed/3/600/400', image3: 'https://picsum.photos/seed/4/600/400', image4: 'https://picsum.photos/seed/5/1200/600' },
  { id: 11, name: 'Hilton DoubleTree', location: 'Al Khobar, KSA', description: 'A luxurious hotel development ...', client: 'Hilton Worldwide', services: ['Architecture', 'Sustainability'], mainImage: 'https://picsum.photos/seed/2/2400/1200', image1: 'https://picsum.photos/seed/6/1200/600', image2: 'https://picsum.photos/seed/7/600/400', image3: 'https://picsum.photos/seed/8/600/400', image4: 'https://picsum.photos/seed/9/1200/600' },
  { id: 12, name: 'Hilton DoubleTree', location: 'Al Khobar, KSA', description: 'A luxurious hotel development ...', client: 'Hilton Worldwide', services: ['Architecture', 'Sustainability'], mainImage: 'https://picsum.photos/seed/2/2400/1200', image1: 'https://picsum.photos/seed/6/1200/600', image2: 'https://picsum.photos/seed/7/600/400', image3: 'https://picsum.photos/seed/8/600/400', image4: 'https://picsum.photos/seed/9/1200/600' },
  { id: 13, name: 'Madinah Scheme Development', location: 'Lugbe, Nigeria', description: 'The Red Sea Project is one of three giga-projects announced by Prince Mohammad bin Salman bin Abdulaziz Al Saud in 2017. Extending over 28,000 km² on Saudi Arabia\'s Red Sea coast, the destination offers a unique luxurious range of experiences, from island getaways to resort holidays, mountain retreats, and desert adventures, focusing on the wellness and ecology for local and international visitors.', client: 'Madinah Developers', services: ['Urban Planning', 'Engineering', "Consultancy"], sector: "Construction", mainImage: 'https://picsum.photos/seed/pc3s/2400/1200', image1: 'https://picsum.photos/seed/10/1200/600', image2: 'https://picsum.photos/seed/11/600/400', image3: 'https://picsum.photos/seed/12/600/400', image4: 'https://picsum.photos/seed/13/1200/600' },
];

const SingleProjectPage = () => {
  const { projectId } = useParams(); // Extract projectId from URL parameters

  // Find the project based on the ID from the URL
  const project = projects.find((proj) => proj.id === parseInt(projectId));

  // Handle case where project is not found
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      {/* Project Main Image */}
      <div className="project-main-image">
        <div
          className="project-main-overlay"
          style={{ backgroundImage: `url(${project.mainImage})` }}
        >
          <div className="project-title-container">
            <h1 className="project-title">{project.name}</h1>
            <p className="single-project-location">{project.location}</p>
          </div>
        </div>
      </div>

      <div className="project-info-section">
  {/* Left Column: Main Project Information */}
  <div className="project-info-left">
    <p>{project.description}</p>
    <br/>
    <p>Scope of work includes:</p>
    <ul>
      <li>Access Roads to Shurayrah, North Jetty and Airport Road</li>
      <li>Plot Connection Roads which interconnects utilities buildings</li>
    </ul>
  </div>

  <div className="project-info-right">
  <div className="info-item">
    <div className="info-label">
      <img src="../icons/customer.png" alt="Client Icon" className="info-icon" />
      <span>Client</span>
    </div>
    <div className="info-value">{project.client}</div> {/* Display value below the label */}
  </div>
  <div className="info-item">
    <div className="info-label">
      <img src="../icons/gears.png" alt="Service Icon" className="info-icon" />
      <span>Service</span>
    </div>
    <div className="service-list">
      {project.services.map((service, index) => (
        <div key={index}>{service}</div>
      ))}
    </div>
  </div>
  <div className="info-item">
    <div className="info-label">
      <img src="../icons/engineer.png" alt="Sector Icon" className="info-icon" />
      <span>Sector</span>
    </div>
    <div className="info-value">{project.sector}</div>
  </div>
</div>


</div>


      {/* Project Images Section */}
      <div className="project-images-section">
        <div className="project-images-row">
          <div className="project-image">
            <img src={project.image2} alt="Project Detail 1" />
          </div>
          <div className="project-image">
            <img src={project.image3} alt="Project Detail 2" />
          </div>
        </div>
        <div className="project-image-main">
          <img src={project.image1} alt="Main Project" />
        </div>
        <div className="project-image-main">
          <img src={project.image4} alt="Final Project" />
        </div>
      </div>

      {/* Related Projects Section */}
      <div className="related-projects-section">
        <h3>Related Projects</h3>
        <div className="related-projects-carousel">
          {/* Add related projects here */}
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
