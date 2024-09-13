import React from 'react';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import './App.css'; // Optional: For additional styles

const App = () => {
  return (
    <div className="App">
      <Header /> {/* Include the header component */}
      {/* Your main content goes here */}
      <Footer /> {/* Include the footer component */}
    </div>
  );
};


export default App;
