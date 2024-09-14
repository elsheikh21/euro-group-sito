import React from 'react';
import OurStoryAbout from '../components/OurStoryAbout';
import MainHeroSection from '../components/MainHeroSection'; 
import MissionVisionSection from '../components/MissionVisionSection'; 
import LeadershipSection from '../components/LeadershipSection'; 
import ClientsSection from '../components/ClientsSection'; 
import CoreValuesSection from '../components/CoreValuesSection'; 

const About = () => {
  return (
    <div className="about-page">
      <MainHeroSection />
      <OurStoryAbout />
      <MissionVisionSection />
      <LeadershipSection />
      <ClientsSection />
      <CoreValuesSection />
    </div>
  );
};

export default About;
