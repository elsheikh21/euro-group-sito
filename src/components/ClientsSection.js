import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { BASE_API_URL } from "../components/ProjectsSection";
import axios from "axios";
import "./ClientsSection.css";

const ClientsSection = () => {
  const [clients, setClients] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  // const clients = [
  //   "https://picsum.photos/175/175?random=1",
  //   "https://picsum.photos/175/175?random=2",
  //   "https://picsum.photos/175/175?random=3",
  //   "https://picsum.photos/175/175?random=4",
  //   "https://picsum.photos/175/175?random=5",
  //   "https://picsum.photos/175/175?random=6",
  //   "https://picsum.photos/175/175?random=7",
  //   "https://picsum.photos/175/175?random=8",
  //   "https://picsum.photos/175/175?random=9",
  //   "https://picsum.photos/175/175?random=10",
  //   "https://picsum.photos/175/175?random=11",
  //   "https://picsum.photos/175/175?random=12",
  //   "https://picsum.photos/175/175?random=13",
  //   "https://picsum.photos/175/175?random=14",
  //   "https://picsum.photos/175/175?random=15",
  //   "https://picsum.photos/175/175?random=16",
  //   "https://picsum.photos/175/175?random=17",
  //   "https://picsum.photos/175/175?random=18",
  //   "https://picsum.photos/175/175?random=19",
  //   "https://picsum.photos/175/175?random=20",
  //   "https://picsum.photos/175/175?random=21",
  // ];
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
    infinite: true,
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
    axios
      .get(`${BASE_API_URL}projects/`)
      .then((response) => {
        const clientLogos = response.data.data.map(
          (project) => `${BASE_API_URL}${project.client.logo}`
        );
        setClients(clientLogos);
        setError(null);
      })
      .catch((error) => {
        setError("Failed to fetch projects due to " + error);
      });
  }, []);

  // Logging to verify the output
  // console.log("CLIENTS:", clients);

  // Group clients into slides of 5x3 (15 clients per slide)
  const slides = [];
  for (let i = 0; i < clients.length; i += 15) {
    slides.push(clients.slice(i, i + 15));
  }

  // Logging to verify the list
  // console.log("SLIDES:", slides);

  return (
    <section className="clients-section">
      <h2 className="clients-section-title">Our Clients & Partners</h2>
      <Slider {...settings}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="clients-slide">
            <div className="clients-grid">
              {slide.map((client, index) => (
                <div key={index} className="client-logo">
                  <lazyload>
                    <img src={client} alt={`Client ${index + 1}`} />
                  </lazyload>
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
