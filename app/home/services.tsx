// components/services.tsx
"use client";
import { motion } from "framer-motion";
import { use3dEffect } from "../components/Hooks/Use3dEffects";
import { FaCamera, FaLightbulb, FaHeart, FaMedkit } from 'react-icons/fa';

import { HoverEffect } from "../components/ui/HoverEffect";

interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

const services: Service[] = [
  {
    title: 'Portrait Photography',
    description:
      'Expertly captured portraits that reveal your personality with artistic lighting and composition.',
    image: `https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${getRandom(37, 72)}).jpg`,
    icon: <FaCamera className="text-blue-400 text-3xl" />,
  },
  {
    title: 'Commercial Photography',
    description:
      'High-impact visuals designed for brands and businesses that demand excellence.',
    image: `https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${getRandom(0, 36)}).jpg`,
    icon: <FaLightbulb className="text-blue-400 text-3xl" />,
  },
  {
    title: 'Wedding Photography',
    description:
      'Capture the romance and beauty of your special day with timeless imagery.',
    image: `https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${getRandom(274, 296)}).jpg`,
    icon: <FaHeart className="text-blue-400 text-3xl" />,
  },
  {
    title: 'Event Coverage',
    description:
      'Dynamic and comprehensive coverage of events with an artistic flair.',
    image: `https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${getRandom(225, 273)}).jpg`,
    icon: <FaMedkit className="text-blue-400 text-3xl" />,
  },
];

const Services = () => {
  const ref = use3dEffect();


  return (
    <section className="relative min-h-screen bg-black py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Creative Services
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Transformative visual solutions for modern brands
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <HoverEffect key={i} className="h-[400px]">
              <motion.div
                className="h-full relative overflow-hidden rounded-3xl border border-white/10"
                // whileHover={{ scale: 1.05 }}
              >
                <img
                  src={service.image}
                  className="h-full w-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="p-4 backdrop-blur-sm bg-black/30 rounded-xl"
                      whileHover={{ rotate: 360 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </motion.div>
            </HoverEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services




// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { FaCamera, FaLightbulb, FaHeart, FaMedkit } from 'react-icons/fa';

// interface Service {
//   title: string;
//   description: string;
//   image: string;
//   icon: React.ReactNode;
// }

// const services: Service[] = [
//   {
//     title: 'Portrait Photography',
//     description:
//       'Expertly captured portraits that reveal your personality with artistic lighting and composition.',
//     image:
//       'https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/portrait.jpg',
//     icon: <FaCamera className="text-blue-400 text-3xl" />,
//   },
//   {
//     title: 'Commercial Photography',
//     description:
//       'High-impact visuals designed for brands and businesses that demand excellence.',
//     image:
//       'https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/commercial.jpg',
//     icon: <FaLightbulb className="text-blue-400 text-3xl" />,
//   },
//   {
//     title: 'Wedding Photography',
//     description:
//       'Capture the romance and beauty of your special day with timeless imagery.',
//     image:
//       'https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/wedding.jpg',
//     icon: <FaHeart className="text-blue-400 text-3xl" />,
//   },
//   {
//     title: 'Event Coverage',
//     description:
//       'Dynamic and comprehensive coverage of events with an artistic flair.',
//     image:
//       'https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/event.jpg',
//     icon: <FaMedkit className="text-blue-400 text-3xl" />,
//   },
// ];

// const Services: React.FC = () => {
//   return (
//     <section className="bg-black text-white">
//       {/* Services Hero */}
//       <div
//         className="relative flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/services-hero.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-70"></div>
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
//             Our Services
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
//             We create stunning visuals that bring your vision to life.
//           </p>
//         </div>
//       </div>

//       {/* Service Cards */}
//       <div className="py-20 px-6 md:px-20 lg:px-32">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
//             >
//               <div className="relative h-64 w-full">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   style={{ objectFit: 'cover' }}
//                   className="group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center gap-3 mb-4">
//                   {service.icon}
//                   <h2 className="text-2xl font-bold">{service.title}</h2>
//                 </div>
//                 <p className="text-gray-400">{service.description}</p>
//                 <button className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 transition-colors text-white py-2 px-4 rounded">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-400">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Ready to Capture Your Moments?
//           </h2>
//           <p className="text-gray-100 mb-8">
//             Contact us today and let our creative team transform your vision into art.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


