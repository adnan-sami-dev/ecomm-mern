import React, { useState, useEffect } from 'react';

const HeroTransitionOverlay = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollPercentage = Math.min(scrollY / viewportHeight, 1);
      setOpacity(1 - scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable pointer events if opacity is below 0.8
  const isButtonDisabled = opacity < 0.6;

  return (
    <div className="h-screen bg-gradient-to-b from-transparent to-black z-[1]">
      <div className="fixed bottom-0 text-center w-full py-8">
        <button
          className="backdrop-blur-sm px-6 py-3 bg-white/50 hover:bg-white/90 cursor-pointer text-black rounded-full font-medium"
          style={{
            opacity,
            pointerEvents: isButtonDisabled ? 'none' : 'auto',
            cursor: isButtonDisabled ? 'default' : 'pointer'
          }}
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default HeroTransitionOverlay;