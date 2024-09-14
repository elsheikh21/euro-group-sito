import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Correct import for Swiper core styles
import 'swiper/css/navigation'; // Import for Swiper navigation styles
import 'swiper/css/pagination'; // Import for Swiper pagination styles
import './FeaturedProjects.css'; // Your custom CSS file

const FeaturedProjects = () => {
  // Simulate fetching data from backend
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulated fetch call to get project data
    const fetchedProjects = [
      {
        id: 1,
        title: 'Third Ring Road',
        service: 'Construction',
        image: 'https://picsum.photos/seed/thirdringroad/600/600',
      },
      {
        id: 2,
        title: 'Al Ahfad - Wad El Turabi Road',
        service: 'Engineering',
        image: 'https://picsum.photos/seed/alahfadroad/300/200',
      },
      {
        id: 3,
        title: 'Al Hilay Road Tunnel',
        service: 'Infrastructure',
        image: 'https://picsum.photos/seed/alhilaytunnel/300/200',
      },
      {
        id: 4,
        title: 'Al Fula Road Tunnel',
        service: 'Construction',
        image: 'https://picsum.photos/seed/alfulatunnel/300/200',
      },
      // Add more projects if needed
    ];

    setProjects(fetchedProjects); // Set fetched data to state
  }, []);

  return (
    <section className="featured-projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <Swiper
        spaceBetween={20} // Space between slides
        slidesPerView={2} // Default: show 3 slides at a time
        loop={true} // Enable infinite loop
        centeredSlides={true   } // Center the active slide
        grabCursor={true} // Change cursor to grabbing hand
        pagination={{ clickable: true }} // Pagination dots
        breakpoints={{
          0: { // When viewport is 0px or larger (all sizes)
            slidesPerView: 1, // Show 1 card
            centeredSlides: false, // Don't center single card
          },
          640: { // When viewport is 640px or larger
            slidesPerView: 2, // Show 2 cards on small devices
            centeredSlides: false, // Don't center two cards
          },
          1024: { // When viewport is 1024px or larger
            slidesPerView: 3, // Show 3 cards on larger screens
            centeredSlides: true, // Center the active slide
          },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-service">{project.service}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedProjects;
