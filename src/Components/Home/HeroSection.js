import image from '../../../src/assets/Journey 03.jpg';
import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isTextFocused, setIsTextFocused] = useState(false);
  const [isH1Visible, setIsH1Visible] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the h1 and show the p after a delay (e.g., 3 seconds)
    const timeoutId = setTimeout(() => {
      setIsH1Visible(false);
      setIsTextFocused(true);
    }, 3000);

    // Clear the timeout when the component unmounts or when the timeout is executed
    return () => clearTimeout(timeoutId);
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="relative mb-8">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {isH1Visible && (
          <h1 className="text-white text-4xl font-bold">
            A Personalized Approach to managing wealth
          </h1>
        )}
        <p
          className={`text-white p-4 text-lg font-bold leading-relaxed text-center font-sans ${
            isTextFocused ? '' : 'hidden'
          }`}
          style={{
            fontFamily: 'Source Sans Pro',
            fontWeight: 300,
            fontSize: '27px',
            lineHeight: '28px',
            transition: 'opacity 1s ease-in-out', // Added a fade-in effect
            opacity: isH1Visible ? 1 : 0, // Conditional opacity based on isH1Visible
          }}
        >
          We aim to be your personal CFO. Rely on us to help provide you with financial planning and advice that encompasses your whole life. We strive to create a deep and enduring relationship with you and make an emotional investment in your family across generations.
        </p>
      </div>
      <img
        src={image}
        alt="Family"
        className={`w-full h-auto ${isTextFocused ? 'filter brightness-50' : ''}`}
        style={{
          transition: 'opacity 1s ease-in-out', // Added a fade-in effect
          opacity: isTextFocused ? 1 : 0, // Conditional opacity based on isTextFocused
        }}
      />
    </div>
  );
};

export default HeroSection;
