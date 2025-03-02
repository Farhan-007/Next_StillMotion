"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
}

function getRandom(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const servicesData: Service[] = [
      {
        title: "Portrait Photography",
        description:
          "Capture your personality with stunning portraits that tell your unique story.",
        image: `https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${getRandom(
          37,
          72
        )}).jpg`,
      },
      {
        title: "Event Photography",
        description:
          "Immortalize every special moment with crisp, clear images that last a lifetime.",
        image: `https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${getRandom(
          225,
          273
        )}).jpg`,
      },
      {
        title: "Model Photography",
        description:
          "Showcase your style with professional shoots that exude confidence.",
        image: `https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${getRandom(
          0,
          36
        )}).jpg`,
      },
      {
        title: "Wedding Photography",
        description:
          "Relive your magical day with beautifully captured wedding memories.",
        image: `https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${getRandom(
          274,
          296
        )}).jpg`,
      },
    ];
    setServices(servicesData);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-800 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-10"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 transform transition duration-300 hover:scale-105"
            >
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
