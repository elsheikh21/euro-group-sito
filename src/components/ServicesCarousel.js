import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
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

export const BASE_API_URL = "https://api.eurogroup.org/";


const extractSubServices = (servicesData) => {
  const subServices = [];
  servicesData.forEach((service) => {
    const _subServices = service.services;
    _subServices.forEach((subService) => {
      subServices.push({
        service_name: service.name,
        title: subService.name,
        description: subService.description,
        imageUrl: `${BASE_API_URL.replace(/\/$/, '')}${subService.image}`,
        id: subService.id,
      });
    });
  });
  return subServices;
};

const ServicesCarousel = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  // eslint-disable-next-line
  const [services, setServices] = useState([]);
  const [subServices, setSubServices] = useState([])
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState([]);
  const navigate = useNavigate(); // Hook to handle navigation

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}projects/mainservices`)
      .then((response) => {
        const allServices = {
          id: "All",
          name: "All",
        };
        setServices(response.data.data);
        setSubServices(extractSubServices(response.data.data));
        setFilters([allServices, ...response.data.data.filter(service => service.id !== "All")]);
        setError(null);
      })
      .catch((error) => {
        setError("Failed to fetch services due to " + error);
      }
    );
  }, []);

  // Handle filter click
  const handleFilterClick = (filterId) => {
    setSelectedFilter(filterId);
  };

  const handleReadMoreClick = (service) => {
    navigate(`/service/${service.service_name.toLowerCase()}`, {
      state: {
        servicesData: subServices,
        service_id: service.id,
        service_desc: service.description,
        service_name: service.service_name,
        service_title: service.title,
        service_image: `${service.imageUrl}`,
      },
    });
  };

  // Filter services based on selected filter
  const filteredServices =
    selectedFilter === "All"
      ? subServices
      : subServices.filter(
          (service) => service.service_name === selectedFilter
        );

  const settings = {
    dots: false,
    infinite: filteredServices.length > 1,
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
            key={filter.name}
            className={`srv-filter-button ${
              selectedFilter === filter.name ? "active" : ""
            }`}
            onClick={() => handleFilterClick(filter.name)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="container-fluid">
        <div className="row-fluid w-80">
      {/* Carousel Section */}
        <Slider {...settings}>
        {filteredServices.map((service, index) => (
          <div key={index} className="service-slide my_1 ">
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
                <div dangerouslySetInnerHTML={{ __html: service.description }} />
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
      </div>
    </div>
  );
};

export default ServicesCarousel;
