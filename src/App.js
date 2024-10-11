import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import SingleProjectPage from "./components/SingleProjectPage";
import SingleServicePage from "./components/SingleServicePage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NotFoundPage from "./components/404Page"; // Import the 404 page
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  useEffect(() => {
    // Disable right-click
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Disable certain key combinations
    document.onkeydown = function (e) {
      // F12
      if (e.key === "F12") {
        return false;
      }
      // Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        return false;
      }
      // Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        return false;
      }
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        return false;
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "U") {
        return false;
      }
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:projectId" element={<SingleProjectPage />} />
          <Route path="/service/:serviceName" element={<SingleServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
