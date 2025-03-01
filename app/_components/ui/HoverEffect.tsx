// components/ui/hover-effect.tsx
"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const HoverEffect = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const transform = useMotionTemplate`perspective(1000px) rotateX(${
    y.get() * 20
  }deg) rotateY(${x.get() * 20}deg)`;

  return (
    <motion.div
      className={className}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ transform }}
    >
      {children}
    </motion.div>
  );
};