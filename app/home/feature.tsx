// components/feature.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "../components/ui/GlassCard";

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

export const Feature = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-gradient-to-b from-black to-blue-900/20">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0">
          <div className="flex h-full gap-4 items-center">
            {[...Array(6)].map((_, i) => (
              <GlassCard key={i} className="w-[40vw] h-[60vh] rounded-3xl">
                <motion.img
                  src={imagesLand1[i]}
                  className="w-full h-full object-cover rounded-3xl"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </GlassCard>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Visual Storytelling Mastery
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl">
            Immersive imagery that transcends traditional photography
          </p>
        </motion.div>
      </div>
    </section>
  );
};