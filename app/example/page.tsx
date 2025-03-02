"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ExamplePage: React.FC = () => {
  return (
    <main className="bg-[#0A0A0A] text-white font-sans w-full">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A] border-b border-gray-800">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="text-2xl font-bold text-[#E50914]">Guzh Production</div>
          <ul className="hidden md:flex gap-8">
            <li>
              <a href="#hero" className="hover:text-[#E50914] transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#E50914] transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#E50914] transition-colors">
                What We Do
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-[#E50914] transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#cta" className="hover:text-[#E50914] transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center pt-20">
        <div className="absolute inset-0">
          {/* <Image
            src="/hero-bg.jpg" // Replace with your actual hero image path
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          /> */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <motion.div
          className="relative z-10 max-w-3xl px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Guzh Production
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            We create high-quality visual stories that captivate and inspire.
          </p>
          <a
            href="#about"
            className="inline-block bg-[#E50914] hover:bg-red-600 text-black px-8 py-4 rounded-md font-semibold transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-4 md:px-10 bg-[#0A0A0A] border-t border-b border-gray-800">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold">About Us</h2>
            <p className="text-gray-300 text-lg">
              We are a full-cycle production company that handles everything from concept development to final execution. Our creative team is dedicated to bringing your vision to life.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <Image
              src="/about-1.jpg" // Replace with your image
              alt="About Image 1"
              width={400}
              height={400}
              className="rounded-md object-cover"
            /> */}
            {/* <Image
              src="/about-2.jpg" // Replace with your image
              alt="About Image 2"
              width={400}
              height={400}
              className="rounded-md object-cover"
            /> */}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section id="services" className="py-20 px-4 md:px-10 bg-[#0A0A0A]">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            What We Do
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-[#1C1C1C] p-6 rounded-md shadow-md border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#E50914] mb-2">Pre-Production</h3>
              <p className="text-gray-300">
                Concept development, planning, and scriptwriting to bring ideas into focus.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#1C1C1C] p-6 rounded-md shadow-md border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[#E50914] mb-2">Production</h3>
              <p className="text-gray-300">
                Filming, directing, and managing on-set operations to capture stunning visuals.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#1C1C1C] p-6 rounded-md shadow-md border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-[#E50914] mb-2">Post-Production</h3>
              <p className="text-gray-300">
                Editing, color grading, and sound design to perfect every frame.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-20 px-4 md:px-10 bg-[#0A0A0A] border-t border-b border-gray-800">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="relative bg-[#1C1C1C] rounded-md overflow-hidden shadow-md border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* <Image
                  src={`/portfolio-${i}.jpg`} // Replace with your portfolio images
                  alt={`Project ${i}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48 md:h-60"
                /> */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Project {i}</h3>
                  <p className="text-sm text-gray-300">
                    A brief description of the project.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="#"
              className="bg-[#E50914] hover:bg-red-600 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              See More Work
            </a>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section id="cta" className="py-16 px-4 md:px-10 bg-[#0A0A0A]">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Elevate Your Brand?
          </motion.h2>
          <p className="text-lg text-gray-300 mb-8">
            Let’s bring your vision to life. Get in touch with us today.
          </p>
          <a
            href="#contact"
            className="bg-[#E50914] hover:bg-red-600 px-8 py-4 rounded-md font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="py-8 px-4 md:px-10 bg-[#0A0A0A] border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Guzh Production. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default ExamplePage;
