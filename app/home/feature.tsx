"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(4).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(285).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(29).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(289).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(26).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(120).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(289).jpg",
  ];

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      id="features"
      className="py-16 bg-gradient-to-br from-gray-800 via-black to-gray-900 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-2">
          <h3 className="text-3xl font-bold text-white">
            High-Quality Images
          </h3>
          <p className="text-gray-300 text-sm sm:text-base">
            Get crystal-clear and vibrant images that capture every detail.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div
            ref={sliderRef1}
            className="flex gap-4 overflow-x-hidden rounded-2xl h-40 sm:h-56"
          >
            {imagesLand1.map((src, index) => (
              <Image
                key={index}
                className="w-full sm:w-[400px] object-cover rounded-2xl"
                width={400}
                height={240}
                style={{ transform: `translateX(-${(scrollPos - 200) * 0.5}px)` }}
                src={src}
                alt={`High-quality image ${index}`}
              />
            ))}
          </div>
          <div
            ref={sliderRef2}
            className="flex gap-4 overflow-x-hidden rounded-2xl h-40 sm:h-56"
          >
            {imagesLand2.map((src, index) => (
              <Image
                key={index + imagesLand2.length}
                className="w-full sm:w-[400px] object-cover rounded-2xl"
                width={400}
                height={240}
                style={{ transform: `translateX(${(scrollPos - 2000) * 0.5}px)` }}
                src={src}
                alt={`Process image ${index + imagesLand2.length}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Feature;
