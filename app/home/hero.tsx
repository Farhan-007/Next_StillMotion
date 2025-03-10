"use client"

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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <ImageSlider images={images} />
      </div>
      <motion.div
        className="relative z-10 text-center max-w-2xl p-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-base sm:text-lg font-semibold text-gray-300">
          Still Motion Pictures
        </p>
        <h1 className="mb-6 font-bold tracking-tight text-4xl sm:text-5xl text-white">
          Capture Moments That Last a Lifetime
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="gallery">
            <motion.p
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 py-2 rounded-md shadow-md font-semibold transition-transform"
            >
              Explore our Work
            </motion.p>
          </Link>
          <Link href="#contact">
            <motion.p
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center text-white px-6 py-2 rounded-md shadow-md font-semibold hover:bg-gray-700 transition-colors"
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
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </motion.p>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
