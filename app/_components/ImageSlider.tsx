"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const slideInterval = setInterval(nextSlide, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  return (
    <div className="image-slider h-full w-full ">
      <Image
        className='h-full w-full object-cover object-[center_10%]'
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        width={2880}
        height={2024}
      />
    </div>
  );
};

export default ImageSlider;
