// components/ui/parallax-scroller.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxScrollerProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export const ParallaxScroller = <T,>({ items, renderItem }: ParallaxScrollerProps<T>) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div ref={ref} className="relative h-[500vh] overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center">
        <motion.div
          style={{ x, scale, opacity }}
          className="flex gap-8 will-change-transform"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="w-[80vw] md:w-[40vw] h-[60vh] relative overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              {renderItem(item)}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};