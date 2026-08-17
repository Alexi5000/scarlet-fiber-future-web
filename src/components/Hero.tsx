
import React from 'react';
import EnhancedHero from './EnhancedHero';
import ResourcePreloader from './ResourcePreloader';

interface HeroProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const Hero = ({ setIsModalOpen }: HeroProps) => {
  return (
    <>
      <ResourcePreloader />
      <EnhancedHero setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Hero;
