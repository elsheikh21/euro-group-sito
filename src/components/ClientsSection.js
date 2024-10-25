import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { BASE_API_URL } from "../components/ProjectsSection";
import axios from "axios";
import "./ClientsSection.css";

const ClientsSection = () => {
  const [clients, setClients] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  const hasFetchedData = useRef(false); // To keep track of the first fetch

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-right"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
    );
  };
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  useEffect(() => {
    if (hasFetchedData.current) return; // Prevent second API call
    hasFetchedData.current = true; // Mark as fetched

    axios
      .get(`${BASE_API_URL}projects/clients`)
      .then((response) => {
        const clientLogos = response.data.data.map((client) => client.logo);
        const setClientLogos = [...new Set(clientLogos)];
        setClients(setClientLogos);
        setError(null);
      })
      .catch((error) => {
        setError("Failed to fetch clients due to " + error);
      });
  }, [clients]);

  // Group clients into slides of 5x3 (15 clients per slide)
  const slides = [];
  for (let i = 0; i < clients.length; i += 15) {
    slides.push(clients.slice(i, i + 15));
  }

  // Logging to verify the list
  const placeholderImage = '../images/placeholder.png'; // Replace with the actual placeholder image URL

  return (
    <section className="clients-section">
      <h2 className="clients-section-title">Our Clients & Partners</h2>
      <Slider {...settings}>
        <div className="clients-slide">
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-logo">
                <img
                  src={client || placeholderImage} // Default to placeholder if client logo is missing
                  alt={`Client ${index + 1}`}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop in case placeholder fails
                    e.target.src = placeholderImage; // Set placeholder if the image fails to load
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default ClientsSection;
