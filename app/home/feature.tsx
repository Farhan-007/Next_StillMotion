"use client"
import React, { useEffect, useRef, useState, WheelEvent } from 'react';

const data = [
    { h3: "High-Quality Images", p: "Get crystal-clear and vibrant images that capture every detail perfectly." },
    { h3: "Creative Direction", p: "Our team offers creative direction to make your photos stand out with unique concepts." },
    { h3: "Quick Turnaround", p: "Receive your edited photos promptly without compromising on quality." },
]

const Feature: React.FC = () => {

    const sliderRef1 = useRef<HTMLDivElement | null>(null);
    const sliderRef2 = useRef<HTMLDivElement | null>(null);
    // const scrollSpeed = 50; // Adjust the scroll speed as needed
    const [scrollPos, setScrollPos] = useState(0);

    const imagesLand1 = [
        "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(289).jpg",
        "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(4).jpg",
        "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(26).jpg",
        "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(285).jpg",
        "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(165).jpg",
        "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(120).jpg",
    ];
    const imagesLand2 = [
        "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(289).jpg",
        "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(4).jpg",
        "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(26).jpg",
        "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(285).jpg",
        "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(120).jpg",
        "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(29).jpg",
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrollPos(scrollY);
        };
            
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section id="features" className="py-16 px-6 md:px-20 lg:px-32 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-12 gap-2 sm:gap-0">
                <h3 className='text-2xl sm:text-4xl font-bold text-white'>High-Quality Images</h3>
                <p className=' text-gray-600 text-sm md:text-lg lg:text-xl dark:text-gray-400'>Get crystal-clear and vibrant images that capture every details</p>
            </div>
            <div className="images-slide-on-scroll flex flex-col gap-3 sm:gap-6">
                {/* <div
                    ref={sliderRef1}
                    onWheel={handleScroll}
                    className="image-slider-1 flex gap-6 overflow-x-scroll overflow-y-hidden rounded-2xl h-[15rem]"
                >
                    <img className=' w-[400px] object-cover rounded-2xl' src="https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(0).jpg" alt="" />
                    <img className=' w-[400px] object-cover rounded-2xl' src="https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(1).jpg" alt="" />
                    <img className=' w-[400px] object-cover rounded-2xl' src="https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(2).jpg" alt="" />
                    <img className=' w-[400px] object-cover rounded-2xl' src="https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(3).jpg" alt="" />
                    <img className=' w-[400px] object-cover rounded-2xl' src="https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(4).jpg" alt="" />
                </div> */}

                {/* First Slider (scrolls right) */}
                <div
                    ref={sliderRef1}
                    className="image-slider flex gap-3 sm:gap-6 overflow-x-hidden rounded-2xl h-[12rem] sm:h-[15rem] "
                >
                    {imagesLand1.map((src, index) => (
                        <img
                            key={index}
                            className='w-[400px] object-cover rounded-2xl'
                            style={{ transform: `translateX(-${scrollPos * 0.5}px)`,  transition: '' }}
                            src={src}
                            alt={`High-quality image ${index}`}
                        />
                    ))}
                </div>
                {/* Second Slider (scrolls left) */}
                <div
                    ref={sliderRef2}
                    className="image-slider flex gap-3 sm:gap-6 overflow-x-hidden rounded-2xl h-[12rem] sm:h-[15rem] "
                >
                    {imagesLand2.map((src, index) => (
                        <img
                            key={index + imagesLand2.length} // Ensure unique keys
                            className='w-[400px] object-cover rounded-2xl'
                            style={{ transform: `translateX(${(scrollPos - 3216) * 0.5}px)`, transition: '' }}
                            src={src}
                            alt={`High-quality image ${index + imagesLand2.length}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feature
