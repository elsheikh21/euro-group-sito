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

  useEffect(() => {
    if (hasFetchedData.current) return; // Prevent second API call
    hasFetchedData.current = true; // Mark as fetched

    axios
      .get(`${BASE_API_URL}projects/clients`)
      .then((response) => {
        const clientLogos = response.data.data.map((client) => `${BASE_API_URL}${client.logo}`);
	const setClientLogos = [...new Set(clientLogos)];
        setClients(setClientLogos); setError(null);
      })
      .catch((error) => {
        setError("Failed to fetch clients due to " + error);
      });
  }, [clients]);



  // Group clients into slides of 5x3 (15 clients per slide)
  const slides = [];
  for (let i = 0; i < clients.length; i += 16) {
    const slide = clients.slice(i, i + 3);
    // Only add slide if it has items
    if (slide.length > 0) {
      slides.push(slide);
    }
  }

    // Settings for the slider
    const settings = {
      dots: true,
      infinite: false,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

  // Logging to verify the list
  const placeholderImage = '../images/placeholder.png'; // Replace with the actual placeholder image URL
// Create slides with 5x3 grid layout (15 clients per slide)
const createSlides = () => {
  const slides = [];
  for (let i = 0; i < clients.length; i += 15) {
    const slideClients = clients.slice(i, i + 15);
    slides.push(slideClients);
  }
  return slides;
};
  return (
    <section className="clients-section">
      <h2 className="clients-section-title">Our Clients & Partners</h2>
      <Slider {...settings}>
        {createSlides().map((slide, slideIndex) => (
          <div key={slideIndex} className="clients-slide">
            <div className="clients-grid">
              {slide.map((client, index) => (
                <div key={`${slideIndex}-${index}`} className="client-logo">
                  <img
                    src={client || placeholderImage}
                    alt={`Client ${slideIndex * 15 + index + 1}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = placeholderImage;
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ClientsSection;
