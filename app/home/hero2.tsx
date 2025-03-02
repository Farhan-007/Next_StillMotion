"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import ImageSlider from "../_components/ImageSlider";

const images = [
  "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(4).jpg",
  "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(26).jpg",
  "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(45).jpg",
  "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(62).jpg",
  "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(120).jpg",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image Slider with dark overlay */}
      <div className="absolute inset-0">
        <ImageSlider images={images} />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
          Capture Moments That Last a Lifetime
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          High-quality photography portfolio showcasing stunning visuals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/gallery">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-6 py-3 rounded-md shadow-lg font-semibold transition-transform"
            >
              Explore our Work
            </motion.a>
          </Link>
          <Link href="#contact">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-white px-6 py-3 rounded-md shadow-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </motion.a>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
