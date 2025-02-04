// components/ui/floating-input.tsx
"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const FloatingInput = ({ label, id, ...props }: FloatingInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative w-full">
      <input
        id={id}
        {...props}
        className="w-full bg-transparent pt-6 pb-2 px-4 border-b-2 border-gray-600 text-white outline-none transition-colors focus:border-blue-400 peer"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setHasValue(!!e.target.value)}
      />
      <motion.label
        htmlFor={id}
        className="absolute left-4 pointer-events-none origin-left"
        animate={{
          y: isFocused || hasValue ? -20 : 0,
          scale: isFocused || hasValue ? 0.8 : 1,
          color: isFocused ? "#60a5fa" : "#6b7280"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {label}
      </motion.label>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};