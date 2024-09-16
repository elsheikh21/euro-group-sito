import React from 'react';
import Landing from '../components/Landing';
import HighlightSection from '../components/HighlightSection';
import OverlaySection from '../components/OverlaySection';
import ServicesSection from '../components/ServicesSection';
import FeaturedProjects from '../components/FeaturedProjects';
import JoinUsSection from '../components/JoinUsSection';

const HomePage = () => {
  return (
    <>
      {/* Main page content */}
      <Landing />
      <HighlightSection />
      <OverlaySection />
      <ServicesSection />
      <FeaturedProjects />      
      <JoinUsSection />      
    </>
  );
};

export default HomePage;
