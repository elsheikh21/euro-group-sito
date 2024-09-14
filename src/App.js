import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import HomePage from './pages/HomePage'; // Import the HomePage component
import About from './pages/About'; // Import the About page component
import Projects from './pages/Projects'; // Import the Projects page component
import Services from './pages/Services'; // Import the Services page component
import Contact from './pages/Contact'; // Import the Contact page component
import './App.css'; // Optional: For additional styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include the header component */}
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<HomePage />} /> {/* Main page using HomePage component */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/projects" element={<Projects />} /> {/* Projects page */}
          <Route path="/services" element={<Services />} /> {/* Services page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>
        <Footer /> {/* Include the footer component */}
      </div>
    </Router>
  );
};

export default App;
