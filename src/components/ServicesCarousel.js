import React, { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ServicesCarousel.css";

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
    </svg>
  </div>
);

const servicesData = [
  {
    service_name: "scientific",
    title: "GTS Scientific",
    description:
      "The GTS Scientific Recruiting Team takes pride in comprehending and delivering on the most advanced scientific, clinical, and laboratory skillsets.",
    imageUrl: "../images/team.webp", // Replace with actual image paths
  },
  {
    service_name: "executive",
    title: "GTS Executive",
    description:
      "GTS Executive is a highly specialized executive search firm dedicated to identifying, evaluating, and delivering top-tier executives on a retained search basis.",
    imageUrl: "../images/team.webp",
  },
  {
    service_name: "scientific",
    title: "GTS Scientific",
    description:
      "The GTS Scientific Recruiting Team takes pride in comprehending and delivering on the most advanced scientific, clinical, and laboratory skillsets.",
    imageUrl: "../images/team.webp", // Replace with actual image paths
  },
  {
    service_name: "executive",
    title: "GTS Executive",
    description:
      "GTS Executive is a highly specialized executive search firm dedicated to identifying, evaluating, and delivering top-tier executives on a retained search basis.",
    imageUrl: "../images/team.webp",
  },
  {
    service_name: "scientific",
    title: "GTS Scientific",
    description:
      "The GTS Scientific Recruiting Team takes pride in comprehending and delivering on the most advanced scientific, clinical, and laboratory skillsets.",
    imageUrl: "../images/team.webp", // Replace with actual image paths
  },
  {
    service_name: "executive",
    title: "GTS Executive",
    description:
      "GTS Executive is a highly specialized executive search firm dedicated to identifying, evaluating, and delivering top-tier executives on a retained search basis.",
    imageUrl: "../images/team.webp",
  },
];

// Filters from ProjectsSection
const filters = [
  { id: "all", name: "All" },
  { id: "scientific", name: "Scientific" },
  { id: "executive", name: "Executive" },
];

const ServicesCarousel = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const navigate = useNavigate(); // Hook to handle navigation

  // Handle filter click
  const handleFilterClick = (filterId) => {
    setSelectedFilter(filterId);
  };

  const handleReadMoreClick = (service) => {
    navigate(`/service/${service.service_name}`); // Redirect to the SingleServicePage with the service name in the URL
  };

  // Filter services based on selected filter
  const filteredServices =
    selectedFilter === "all"
      ? servicesData
      : servicesData.filter(
          (service) => service.service_name === selectedFilter
        );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="services-carousel-wrapper">
      {/* Filters Section */}
      <div className="proj-filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`srv-filter-button ${
              selectedFilter === filter.id ? "active" : ""
            }`}
            onClick={() => handleFilterClick(filter.id)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Carousel Section */}
      <Slider {...settings} className="m-20">
        {filteredServices.map((service, index) => (
          <div key={index} className="service-slide">
            <div className="service-content">
              <div className="service-image-wrapper">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <div className="service-text">
                <h2 className="service-title text-left">{service.title}</h2>
                <p className="service-description truncate-text text-left">
                  {service.description}
                </p>
                <div className="services-read-more-btn">
                  <button
                    className="service-button"
                    onClick={() => handleReadMoreClick(service)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServicesCarousel;
