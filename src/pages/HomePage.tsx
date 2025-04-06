import React from 'react';
import HeroSection from '../components/HeroSection';
// Commented imports are temporarily unused but may be used later
// import HowItWorks from '../components/HowItWorks';
// import StatsSection from '../components/StatsSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      {/* <HowItWorks /> */}
      {/* <StatsSection /> */}
    </div>
  );
};

export default HomePage; 