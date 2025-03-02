"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Feature: React.FC = () => {
  const sliderRef1 = useRef<HTMLDivElement | null>(null);
  const sliderRef2 = useRef<HTMLDivElement | null>(null);
  const [scrollPos, setScrollPos] = useState(0);

  const imagesLand1 = [
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(289).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(4).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(26).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(285).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(165).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(120).jpg",
  ];
  const imagesLand2 = [
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(289).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(4).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(26).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(285).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(120).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(29).jpg",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="features" className="py-16 px-6 md:px-20 lg:px-32 flex flex-col bg-black">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-12 gap-2 sm:gap-0">
        <h3 className="text-2xl sm:text-4xl font-bold text-white">High-Quality Images</h3>
        <p className="text-gray-600 text-sm md:text-lg lg:text-xl">
          Get crystal-clear and vibrant images that capture every detail
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {/* First Slider (scrolls right) */}
        <div
          ref={sliderRef1}
          className="flex gap-6 overflow-x-hidden rounded-2xl h-64 sm:h-80"
        >
          {imagesLand1.map((src, index) => (
            <Image
              key={index}
              className="w-[400px] object-cover rounded-2xl"
              width={400}
              height={100}
              style={{ transform: `translateX(-${scrollPos * 0.5}px)` }}
              src={src}
              alt={`High-quality image ${index}`}
            />
          ))}
        </div>
        {/* Second Slider (scrolls left)
        <div
          ref={sliderRef2}
          className="flex gap-3 sm:gap-6 overflow-x-hidden rounded-2xl h-[12rem] sm:h-[15rem]"
        >
          {imagesLand2.map((src, index) => (
            <img
              key={index + imagesLand2.length}
              className="w-[400px] object-cover rounded-2xl"
              style={{ transform: `translateX(${(scrollPos - 3216) * 0.5}px)` }}
              src={src}
              alt={`High-quality image ${index + imagesLand2.length}`}
            />
          ))}
        </div> */}

        {/* Slider Two */}
        <div
          ref={sliderRef2}
          className="flex gap-6 overflow-x-hidden rounded-2xl h-64 sm:h-80"
        >
          {imagesLand2.map((src, index) => (
            <img
              key={index + imagesLand2.length}
              className="w-[400px] object-cover rounded-2xl "
              style={{ transform: `translateX(${(scrollPos - 3216) * 0.5}px)` }}
              src={src}
              alt={`Process image ${index + imagesLand2.length}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;