// components/category.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { allFilters } from "../myData";
import { ParallaxScroller } from "../components/ui/ParallaxScroller";
import Link from "next/link";
import Image from "next/image";

function getRand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

const Category = () => {
  const categories = [
    { id: `${getRand(0, 36)}`, src: ``, title: `${allFilters[1]}` },
    { id: `${getRand(37, 72)}`, src: ``, title: `${allFilters[2]}` },
    { id: `${getRand(73, 197)}`, src: ``, title: `${allFilters[3]}` },
    { id: `${getRand(198, 224)}`, src: ``, title: `${allFilters[4]}` },
    { id: `${getRand(225, 273)}`, src: ``, title: `${allFilters[5]}` },
    { id: `${getRand(274, 296)}`, src: ``, title: `${allFilters[6]}` },
  ];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={ref} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <ParallaxScroller
          items={categories}
          renderItem={(category) => (
            <div className="h-full w-full relative">
              <img
                src={category.src}
                className="h-full w-full object-cover absolute inset-0"
                alt={category.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-8 flex items-end">
                <h3 className="text-3xl font-bold text-white">{category.title}</h3>
              </div>
            </div>
          )}
        />

        <motion.div
          style={{ x }}
          className="absolute left-0 flex gap-8 will-change-transform"
        >
          {categories.map((item, i) => (
            <motion.div
              key={i}
              className="w-[80vw] md:w-[40vw] h-[60vh] relative overflow-hidden rounded-3xl"
              whileHover={{ scale: 1.05 }}
            >
              <Link href={`/gallery?filter=${encodeURIComponent(item.title)}`}>
              <Image
                src={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${item.id}).jpg`}
                alt={`image-${item.title}${item.id}`}
                fill={true}
                sizes="(min-width: 1420px) 272px, (min-width: 1080px) calc(5.63vw + 193px), (min-width: 800px) calc(33.08vw - 14px), (min-width: 540px) calc(50vw - 16px), calc(100vw - 16px)"
                priority={true}
                className=" object-cover group-hover:opacity-75"
            />
                {/* <img
                  src={item.id}
                  className="w-full h-full object-cover absolute inset-0"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-8 flex items-end">
                  <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Category