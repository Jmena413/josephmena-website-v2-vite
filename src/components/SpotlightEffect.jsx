// SpotlightEffect.jsx
import React, { useState, useEffect } from 'react';

const SpotlightEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const spotlightStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none', // Allows clicks to pass through
    background: `radial-gradient(
      circle at ${position.x}px ${position.y}px,
      transparent 50px,
      rgba(0, 0, 0, 0.4) 500px
    )`,
    transition: 'background 0.1s ease-out', // Smooths the effect on movement
    zIndex: 9999, // Ensure the spotlight is on top
  };

  return <div style={spotlightStyle} />;
};

export default SpotlightEffect;