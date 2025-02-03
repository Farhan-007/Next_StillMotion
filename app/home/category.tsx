"use client";
import React from 'react';
import ImgContainer from '../components/ImgContainer';
import { allFilters } from "../myData";
import Link from 'next/link';

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

  return (
    <section className="py-16 px-8 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Our Work</h2>
      </div>
      <div className="flex items-center gap-6 py-5 px-0 md:px-8 overflow-y-scroll no-scrollbar">
        {categories.map((item, idx) => (
          <div
            key={idx}
            className="relative md:min-h-[70vh] min-w-max transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden"
          >
            {/* Pass the filter as a query parameter */}
            <Link href={`/gallery?filter=${encodeURIComponent(item.title)}`}>
              <ImgContainer photo={item} Click={() => ""} />
              <div className="absolute bottom-0 left-0 right-0 md:bottom-[40px] p-4 text-center">
                <h3 className="text-xl font-bold text-white drop-shadow-md">{item.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;

