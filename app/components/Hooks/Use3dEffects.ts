// hooks/use-3d-effect.ts
"use client"
import { useEffect, useRef } from "react";

export const use3dEffect = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      element.style.transform = `
        perspective(1000px)
        rotateX(${y * 15}deg)
        rotateY(${x * 15}deg)
        scale3d(1.05, 1.05, 1.05)
      `;
    };

    const handleMouseLeave = () => {
      element.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return ref;
};