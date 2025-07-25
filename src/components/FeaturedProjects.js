import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedProjects.css";
import { BASE_API_URL } from "./ProjectsSection";

const FeaturedProjects = () => {
  const navigate = useNavigate(); // Hook to navigate between pages
  const [projects, setProjects] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  // Fetch projects from the backend API
  useEffect(() => {
    axios
      .get(`${BASE_API_URL}projects/`)
      .then((response) => {
        const fetchedProjects = response.data.data;
        setProjects(fetchedProjects.slice(0, 10)); // Only display the first 10 projects
        setError(null);
      })
      .catch((error) => {
        setError("Failed to fetch projects due to " + error);
      });
  }, []);

  console.log(projects);

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1, // Number of slides to show at a time
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
    <div className="featured-projects">
      <h2 className="featured-projects__title">Featured Projects</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <a
            href={`project/${project.id}`}
            className="home-project-card"
            onClick={e => {
              e.preventDefault();
              navigate(`/project/${project.id}`, {
                state: { project }, // Pass the entire project data in state
              });
            }}
          >
            <img
              src={`${BASE_API_URL}${project.cover_image}`}
              alt={project.name}
              className="project-card__image"
            />
            <div className="project-card__title">{project.name}</div>
            <div className="project-card__location">{project.location}</div>
          </a>
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
      {/* Right Arrow SVG */}
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
      {/* Left Arrow SVG */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
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

export default FeaturedProjects;
