import React from 'react';
import HeroAnimationStyles from './HeroAnimationStyles';
import HeroAnimationContent from './HeroAnimationContent';
import { COLOR_TOKENS } from '../constants';

interface HeroAnimationSystemProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const HeroAnimationSystem = ({ setIsModalOpen }: HeroAnimationSystemProps) => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />

      {/* Subtle scarlet radial */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at center, transparent 0%, ${COLOR_TOKENS.buckeye.scarlet} 100%)`,
          backgroundSize: '100% 100%',
        }}
      />

      {/* Hero content */}
      <HeroAnimationContent setIsModalOpen={setIsModalOpen} />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/50" />
      
      {/* Custom styles */}
      <HeroAnimationStyles />
    </div>
  );
};

export default HeroAnimationSystem;
