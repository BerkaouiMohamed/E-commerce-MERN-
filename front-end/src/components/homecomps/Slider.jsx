import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    'https://loremflickr.com/320/240/brazil,rio',
    'https://loremflickr.com/320/240/',
    'https://source.unsplash.com/random/800x602',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [activeIndex, images.length]);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <div className="relative h-96 overflow-hidden">
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
        <button
          className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={handlePrevClick}
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
        <button
          className="bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={handleNextClick}
        >
          <FiChevronRight className="w-5 h-5" />
        </button>
      </div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-cover ${
            index === activeIndex ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-4 text-white">
        {images.map((_, index) => (
          <span
            key={index}
            className={`inline-block w-2 h-2 rounded-full mx-1 ${
              index === activeIndex ? 'bg-white' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
