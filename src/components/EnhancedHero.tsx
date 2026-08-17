
import React, { useEffect, useState } from 'react';
import HeroAnimationSystem from './HeroAnimationSystem';

interface EnhancedHeroProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const EnhancedHero = ({ setIsModalOpen }: EnhancedHeroProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="relative h-full"
      style={{
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
    >
      <HeroAnimationSystem setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default EnhancedHero;
