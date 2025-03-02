"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ImgContainer from "../_components/ImgContainer";
import { allFilters } from "../myData";
import Link from "next/link";

interface Category {
  id: string;
  src: string;
  title: string;
}

interface ImageGalleryItem {
  type: "image";
  id: string;
  src: string;
  title: string;
}

interface TextGalleryItem {
  type: "text";
  id: string;
  title: string;
  text: string;
}

type GalleryItem = ImageGalleryItem | TextGalleryItem;

const Category: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    // Generate categories using your random logic with placeholder src values.
    function getRand(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const cats: Category[] = [
      { id: `${getRand(0, 36)}`, src: "/placeholder1.jpg", title: allFilters[1] },
      { id: `${getRand(37, 54)}`, src: "/placeholder2.jpg", title: allFilters[2] },
      { id: `${getRand(73, 197)}`, src: "/placeholder3.jpg", title: allFilters[3] },
      { id: `${getRand(198, 212)}`, src: "/placeholder4.jpg", title: allFilters[4] },
      { id: `${getRand(225, 273)}`, src: "/placeholder5.jpg", title: allFilters[5] },
      { id: `${getRand(274, 290)}`, src: "/placeholder6.jpg", title: allFilters[6] },
    ];

    // Convert categories into image gallery items.
    const imageItems: GalleryItem[] = cats.map((cat) => ({
      type: "image",
      id: cat.id,
      title: cat.title,
      src: cat.src, // Guaranteed to be a string
    }));

    // Define three additional text blocks.
    const textBlocks: GalleryItem[] = [
      { type: "text", id: "tb1", title: "Inspire", text: "Let creativity flow." },
      { type: "text", id: "tb2", title: "Create", text: "Bring your vision to life." },
      { type: "text", id: "tb3", title: "Innovate", text: "Pushing boundaries." },
    ];

    // Interleave text blocks among image items.
    // Pattern: [image, text, image, image, text, image, image, text, image]
    const combinedItems: GalleryItem[] = [
      textBlocks[0],
      imageItems[0],
      imageItems[1],
      imageItems[2],
      imageItems[3],
      textBlocks[1],
      imageItems[4],
      textBlocks[2],
      imageItems[5],
    ];

    setGalleryItems(combinedItems);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-800 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-10"
        >
          Our Work
        </motion.h2>
        {/* 3x3 grid for a total of 9 blocks */}
        <div className="flex items-center justify-center">

          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative group overflow-hidden rounded md:rounded-xl shadow-lg  transition-transform"
              >
                {item.type === "image" ? (
                  <Link href={`/gallery?filter=${encodeURIComponent(item.title)}`}>
                    <div className="block h-[12rem] md:h-[17rem] w-[10rem] md:w-[22rem]">
                      <ImgContainer photo={item} classString="block h-[12rem] md:h-[17rem] w-[10rem] md:w-[22rem]" Click={() => { }} />
                      <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-lg font-bold text-white drop-shadow-sm">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full w-full bg-black/80 backdrop-blur-md p-4">
                    <h3 className="text-2xl  font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 text-center">{item.text}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
