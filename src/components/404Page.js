import React from "react";
import "./404Page.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="overlay-container">
        <img
          className="not-found-image"
          src="../images/bg-404.webp"
          alt="404 - Not Found"
        />
        <div className="overlay">
          <h1>404</h1>
          <p>Oops! The page you’re looking for doesn’t exist.</p>
          <p>
            The page you're trying to reach isn't in our blueprint. <br />{" "}
            Please return to the home page or explore our latest engineering
            projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
