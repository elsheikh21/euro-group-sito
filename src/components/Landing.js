import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Landing.css'; // Import custom styles for the landing component

const Landing = () => {
  return (
    <section className="landing">
      <Carousel fade>
        {/* Carousel Item 1 */}
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="https://picsum.photos/seed/picsum/1200/900" // Replace with your actual image path
              alt="First slide"
            />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2>ENGINEERING CONSULTANCY</h2>
                <h1>DELIVERING EXCELLENCE.</h1>
                {/* <p>Get in touch with our experts for unmatched engineering solutions.</p> */}
                <Link to="/About" className="btn btn-primary">About Us</Link>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Carousel Item 2 */}
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="https://picsum.photos/seed/picsum/1200/900" // Replace with your actual image path
              alt="Second slide"
            />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2>INNOVATIVE SOLUTIONS</h2>
                <h1>Providing diversified solutions.</h1>
                {/* <p>Innovative designs for a sustainable and secure future.</p> */}
                <Link to="/Services" className="btn btn-primary">Services</Link>
              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Carousel Item 3 */}
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="https://picsum.photos/seed/picsum/1200/900" // Replace with your actual image path
              alt="Third slide"
            />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2>GLOBAL IMPACT</h2>
                <h1>Creating Reality.</h1>
                {/* <p>Delivering impactful solutions to clients worldwide.</p> */}
                <Link to="/Projects" className="btn btn-primary">Projects</Link>              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Carousel Item 4 */}
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="https://picsum.photos/seed/picsum/1200/900" // Replace with your actual image path
              alt="First slide"
            />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2>ENGINEERING CONSULTANCY</h2>
                <h1>DELIVERING EXCELLENCE.</h1>
                {/* <p>Get in touch with our experts for unmatched engineering solutions.</p> */}
                <Link to="/Contact" className="btn btn-primary">Contact Us</Link>              </div>
            </div>
          </div>
        </Carousel.Item>

        {/* Carousel Item 5 */}
        <Carousel.Item>
          <div className="carousel-image">
            <img
              className="d-block w-100"
              src="https://picsum.photos/seed/picsum/1200/900" // Replace with your actual image path
              alt="First slide"
            />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2>ENGINEERING CONSULTANCY</h2>
                <h1>Creating Opportunities.</h1>
                {/* <p>Get in touch with our experts for unmatched engineering solutions.</p> */}
                <Link to="/Careers" className="btn btn-primary">Careers</Link>              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Landing;
