// components/theme-provider.tsx
"use client";
import { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <AnimatePresence mode="wait">
        <motion.div
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{ duration: 0.75 }}
          variants={{
            initialState: { opacity: 0 },
            animateState: { opacity: 1 },
            exitState: { opacity: 0 },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </NextThemesProvider>
  );
}