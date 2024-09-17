// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ProjectPage from './components/ProjectPage'; // Import the ScrollToTopButton component
import ScrollToTopButton from './components/ScrollToTopButton'; // Import the ScrollToTopButton component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:projectId" element={<ProjectPage />} /> {/* Dynamic route for each project */}
        </Routes>
        <ScrollToTopButton /> {/* Add the ScrollToTopButton component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
