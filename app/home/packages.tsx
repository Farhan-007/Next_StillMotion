"use client"

import React from "react";
import { motion } from "framer-motion";

interface Package {
  title: string;
  price: string;
  features: string[];
}

const packagesData: Package[] = [
  {
    title: "Basic Package",
    price: "$299",
    features: ["2-hour photo session", "10 edited photos", "Online gallery access"],
  },
  {
    title: "Standard Package",
    price: "$499",
    features: [
      "4-hour photo session",
      "25 edited photos",
      "Online gallery access",
      "One location shoot",
    ],
  },
  {
    title: "Premium Package",
    price: "$799",
    features: [
      "Full-day photo session",
      "50 edited photos",
      "Online gallery access",
      "Two location shoots",
      "Photo album",
    ],
  },
  {
    title: "Ultimate Package",
    price: "$1199",
    features: [
      "Full-day photo session",
      "100 edited photos",
      "Online gallery access",
      "Multiple location shoots",
      "Photo album & prints",
      "Digital copies",
    ],
  },
];

const Packages: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-800 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-10 text-center text-indigo-500"
        >
          Our Packages
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {packagesData.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 transform transition duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{pkg.title}</h3>
              <p className="text-2xl font-bold text-amber-400 mb-2">{pkg.price}</p>
              <ul className="text-gray-300 text-sm">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="mb-1">
                    • {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
