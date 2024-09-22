import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedProjects.css";

const FeaturedProjects = () => {
  // Dummy data for projects
  const projects = [
    {
      id: 1,
      title: "Third Ring Road",
      location: "UAE",
      imageUrl: "https://picsum.photos/300/200?random=1",
    },
    {
      id: 2,
      title: "Al Akhal - Mahd Al Thahab Road",
      location: "UAE",
      imageUrl: "https://picsum.photos/300/200?random=2",
    },
    {
      id: 3,
      title: "Al Hijra Road Tunnel",
      location: "UAE",
      imageUrl: "https://picsum.photos/300/200?random=3",
    },
    {
      id: 4,
      title: "Al Hijra Road Tunnel",
      location: "UAE",
      imageUrl: "https://picsum.photos/300/200?random=4",
    },
    {
      id: 5,
      title: "Al Hijra Road Tunnel",
      location: "UAE",
      imageUrl: "https://picsum.photos/300/200?random=4",
    },
  ];

  // Slick carousel settings
  const settings = {
    dots: true,
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
          <div key={project.id} className="home-project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-card__image"
            />
            <div className="project-card__title">{project.title}</div>
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
