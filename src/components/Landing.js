import React from 'react';
import { Carousel } from 'react-bootstrap';
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
                <p>Get in touch with our experts for unmatched engineering solutions.</p>
                <button className="btn btn-primary">See Projects</button>
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
                <h1>BUILDING THE FUTURE.</h1>
                <p>Innovative designs for a sustainable and secure future.</p>
                <button className="btn btn-primary">Learn More</button>
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
                <h1>REACHING NEW HEIGHTS.</h1>
                <p>Delivering impactful solutions to clients worldwide.</p>
                <button className="btn btn-primary">Our Impact</button>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Landing;
