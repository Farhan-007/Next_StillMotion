"use client";
import React from "react";
import Image from "next/image";
import Team from "./team";
import {
  FaCamera,
  FaLightbulb,
  FaHeart,
  FaMedkit,
  FaSmile,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Type definitions for our items
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ValueItem {
  title: string;
  description: string;
}

interface TestimonialItem {
  quote: string;
  author: string;
}

const About: React.FC = () => {
  // Define our services, values, and testimonials
  const services: ServiceItem[] = [
    {
      icon: <FaCamera aria-label="Portrait Photography" />,
      title: "Portrait Photography",
      description: "Capturing personality and emotion in every shot",
    },
    {
      icon: <FaLightbulb aria-label="Commercial Photography" />,
      title: "Commercial Photography",
      description: "Professional imagery for brands and businesses",
    },
    {
      icon: <FaHeart aria-label="Wedding Photography" />,
      title: "Wedding Photography",
      description: "Preserving your most precious moments",
    },
    {
      icon: <FaMedkit aria-label="Event Coverage" />,
      title: "Event Coverage",
      description: "Comprehensive documentation of your special events",
    },
  ];

  const values: ValueItem[] = [
    { title: "Creativity", description: "Pushing artistic boundaries in every project" },
    { title: "Quality", description: "Delivering excellence in every detail" },
    { title: "Integrity", description: "Honest and transparent communication" },
    { title: "Passion", description: "Love for photography in every frame" },
  ];

  const testimonials: TestimonialItem[] = [
    {
      quote:
        "The photos exceeded our expectations! They truly captured the essence of our special day.",
      author: "Sarah & James",
    },
    {
      quote: "Professional, creative, and an absolute pleasure to work with. Highly recommend!",
      author: "TechStart Inc.",
    },
    {
      quote:
        "Our family portraits are now cherished heirlooms thanks to their amazing work.",
      author: "The Johnson Family",
    },
  ];

  return (
    <section className="bg-gradient-to-bl from-gray-800 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-gray-900 overflow-hidden">
      {/* Background Image & Overlay */}
      {/* <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"  // Replace with your background image path or URL
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div> */}

      {/* Hero Content (no glass effect) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 pt-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          Capturing <span className="text-blue-400">Life&apos;s</span> Beautiful Moments
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 max-w-2xl mx-auto">
          We are visual storytellers dedicated to transforming moments into lasting memories.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/gallery"
            className="bg-blue-400 hover:bg-blue-500 text-black px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Explore Our Work
          </a>
          <a
            href="/#contact"
            className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Our Journey</h2>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6 bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-2xl sm:text-3xl font-semibold">Why Choose Us?</h3>
              <p className="text-gray-300 text-base sm:text-lg">
                We combine technical expertise with artistic vision to deliver images that tell your unique story. Our client-focused approach ensures a seamless experience from concept to delivery.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaSmile className="text-blue-400 mr-3 text-xl" aria-hidden="true" />
                  <span>100% Satisfaction Guarantee</span>
                </li>
                <li className="flex items-center">
                  <FaCamera className="text-blue-400 mr-3 text-xl" aria-hidden="true" />
                  <span>State-of-the-Art Equipment</span>
                </li>
                <li className="flex items-center">
                  <FaHeart className="text-blue-400 mr-3 text-xl" aria-hidden="true" />
                  <span>Personalized Service</span>
                </li>
              </ul>
            </div>
            {/* <div className="relative group">
              <div className="absolute inset-0 bg-blue-400 mix-blend-multiply transform group-hover:rotate-1 transition-transform"></div>
              <Image
                src="/studio-image.jpg"
                alt="Inside our studio showing a creative workspace"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg transform group-hover:-rotate-1 transition-transform"
                priority
              />
            </div> */}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
          >
            Our Services
          </motion.h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 transform transition duration-300 hover:scale-105"
              >
                <div className="text-blue-400 text-3xl sm:text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Our Core Values
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-gray-700 text-center"
            >
              <div className="text-blue-400 text-3xl sm:text-4xl mb-4">{index + 1}.</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
          >
            Client Stories
          </motion.h2>
          <div className="space-y-12">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative p-8 bg-white/20 backdrop-blur-md rounded-xl shadow-lg border border-gray-700"
              >
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-blue-400 w-12 h-12 rounded-full flex items-center justify-center">
                  <FaHeart className="text-white text-xl" aria-hidden="true" />
                </div>
                <p className="text-lg italic mb-4 text-gray-300">&ldquo;{testimonial.quote}&rdquo;</p>
                <cite className="text-gray-300 font-medium">&mdash; {testimonial.author}</cite>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Call-to-Action (CTA) Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-8"
          >
            Ready to Create Magic?
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life through stunning photography that tells your unique story.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/#contact"
              className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-2"
            >
              Schedule Consultation
            </a>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="text-white hover:text-gray-200" aria-label="Facebook">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-gray-200" aria-label="Instagram">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gray-200" aria-label="Twitter">
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
