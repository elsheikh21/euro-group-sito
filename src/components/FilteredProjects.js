import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "./FilteredProjects.css"; // Renamed the CSS file to match the new component

const FilteredProjects = ({ projects }) => {
  const navigate = useNavigate(); // Hook for navigation

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: projects.length > 1,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="filtered-projects">
      <Slider {...settings}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="home-project-card"
            onClick={() =>
              navigate(`/project/${project.id}`, { state: { project } })
            } // Navigate to single project page
          >
            <img
              src={
                project.landscape_image1
                  ? `${project.landscape_image1}`
                  : "../images/team.webp"
              }
              alt={project.name}
              className="project-card__image"
            />
            <div className="project-card__title">{project.name}</div>
            <div className="project-card__location">{project.location}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Arrow Components
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next-arrow" onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 4L16 12L8 20"
          stroke="#262628"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev-arrow" onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0  0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 4L8 12L16 20"
          stroke="#262628"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default FilteredProjects;
