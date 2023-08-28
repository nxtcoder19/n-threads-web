"use client";
import React, { useState, useEffect } from "react";
import { IconButton } from "rsuite";
import { ArrowLeft, ArrowRight } from "@rsuite/icons";

export const ImageCarouselDetails = ({ carouselImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
      if (currentImageIndex > 0){
          setCurrentImageIndex(currentImageIndex - 1)
          return;
        }
        setCurrentImageIndex(carouselImages.length - 1)
        // setCurrentImageIndex((prevIndex) =>
        //   prevIndex > 0 ? prevIndex - 1 : carouselImages.length - 1
        // );
  };

  const handleNextClick = () => {
    if (currentImageIndex < carouselImages.length -1) {
        setCurrentImageIndex(currentImageIndex + 1);
        return;
    }
    setCurrentImageIndex(0)
    // setCurrentImageIndex((prevIndex) =>
    //   prevIndex < carouselImages.length - 1 ? prevIndex + 1 : 0
    // );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000); 

    return () => {
      clearInterval(interval); 
    };
  }, [currentImageIndex]);

  return (
    <div>
      <div className="text-xl mb-5 font-semibold hover:text-blue-500">
        Best deal for today:
      </div>
      <div className="relative">
        <img
          className="h-96 w-full rounded-lg shadow-md"
          src={carouselImages[currentImageIndex]}
          alt="Current photo"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentImageIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
          <IconButton
            className="text-4xl"
            icon={<ArrowLeft />}
            onClick={handlePrevClick}
          ></IconButton>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
          <IconButton
            className="text-4xl text-white"
            icon={<ArrowRight />}
            onClick={handleNextClick}
          ></IconButton>
        </div>
      </div>
    </div>
  );
};
