import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <section className="landing">
      <Carousel fade>
        {/* Carousel Item 1 */}
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="../images/Bridges-engineering.webp"
              alt="First slide"
            />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2>Engineering Consultancy</h2>
                <h1>Delivering Excellence.</h1>
                <Link to="/About" className="btn btn-primary">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Carousel Item 2 */}
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="../images/carousel3.webp"
              alt="Second slide"
            />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2>Engineering Consultancy</h2>
                <h1>Providing Diversified Solutions.</h1>
                <Link to="/Services" className="btn btn-primary">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Carousel Item 3 */}
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="../images/carousel4.webp"
              alt="Third slide"
            />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2>Engineering Consultancy</h2>
                <h1>Creating Reality.</h1>
                <Link to="/Projects" className="btn btn-primary">
                  Our Projects
                </Link>{" "}
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Carousel Item 4 */}
        {/* <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="../images/carousel5.webp"
              alt="First slide"
            />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2>Engineering Consultancy</h2>
                <h1>Delivering Excellence.</h1> 
                <Link to="/Contact" className="btn btn-primary">
                  Contact Us
                </Link>{" "}
              </div>
            </div>
          </div>
        </Carousel.Item>*/}

        {/* Carousel Item 5 */}
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="../images/carousel5.webp"
              alt="First slide"
            />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2>Engineering Consultancy</h2>
                <h1>Creating Opportunities.</h1>
                <Link to="/Careers" className="btn btn-primary">
                  Join Us
                </Link>{" "}
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Landing;
