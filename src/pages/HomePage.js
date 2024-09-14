import React from 'react';
import Landing from '../components/Landing';
import IntroductionSection from '../components/IntroductionSection';
import ContentSection from '../components/ContentSection';
import OverlaySection from '../components/OverlaySection';
import ServicesSection from '../components/ServicesSection';
import FeaturedProjects from '../components/FeaturedProjects';
import JoinUsSection from '../components/JoinUsSection';

const HomePage = () => {
  return (
    <>
      {/* Main page content */}
      <Landing />
      <IntroductionSection />
      <ContentSection />
      <OverlaySection />
      <ServicesSection />
      <FeaturedProjects />      
      <JoinUsSection />      
    </>
  );
};

export default HomePage;
