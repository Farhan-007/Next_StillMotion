// components/hero.tsx
"use client";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider";
import { useTheme } from "next-themes";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const images = [
  "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(4).jpg",
  "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(26).jpg",
  "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(45).jpg",
  "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(62).jpg",
  "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(120).jpg",
]

const Hero = () => {
  const { theme } = useTheme();
  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageSlider images={images} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
      </div>

      {/* <Canvas className="absolute inset-0 z-10">
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Sphere args={[1, 32, 32]} position={[0, 0, 2]}>
          <meshStandardMaterial
            color={theme === "dark" ? "#3b82f6" : "#60a5fa"}
            transparent
            opacity={0.2}
          />
        </Sphere>
        <OrbitControls/>
      </Canvas> */}

      <motion.div
        className="relative z-20 text-center space-y-8 p-8 w-[70%] backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10"
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          },
        }}
      >
        <motion.p
          variants={textVariants}
          className="text-lg md:text-xl font-medium text-blue-400"
        >
          Still Motion Pictures
        </motion.p>
        <motion.h1
          variants={textVariants}
          className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-300 to-blue-400 bg-clip-text text-transparent"
        >
          Capture Moments That Last a Lifetime
        </motion.h1>
        <motion.div
          variants={textVariants}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          {/* Buttons with hover effects */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero