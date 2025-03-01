// components/ui/glass-card.tsx
"use client";
import { motion } from "framer-motion";

export const GlassCard = ({ children, className }: { 
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl shadow-2xl ${className}`}
    whileHover={{ backdropFilter: "blur(24px)" }}
  >
    {children}
  </motion.div>
);