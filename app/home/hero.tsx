import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ImageSlider from '../components/ImageSlider'

const images = [
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(4).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(26).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(45).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(62).jpg",
    "https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(120).jpg",
]

function Hero() {
    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 ">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <span className="bg-[#00000031] absolute bg-blend-screen h-full w-full"></span>
                    <ImageSlider images={images} />
                </div>

                {/* Hero Content */}
                <div className="flex flex-col items-center gap-4 relative z-1 text-center max-w-[20rem] md:max-w-max p-6 md:p-12 lg:p-24">
                    <p className=" md:max-w-xl md:text-xl lg:text-2xl font-semibold text-[#ebebeb]">Still Motion Pictures</p>
                    <h1 className="md:max-w-2xl  mb-8 font-bold tracking-tight leading-none text-3xl md:text-6xl text-white">Capture Moments That Last a Life Time</h1>
                    {/* <h1 className="md:max-w-2xl  mb-8 font-bold tracking-tight leading-none bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#707070] bg-clip-text text-3xl md:text-6xl text-white">Capture Moments That Last a Life Time</h1> */}
                    <div className='flex justify-center items-center md:flex-row gap-4'>
                        <Link
                            href="gallery"
                            className="text-sm md:text-base bg-white text-black px-2 md:px-8 py-2 md:py-3 rounded-xl shadow-lg font-semibold  hover:scale-105"
                        >
                            Explore our Work
                        </Link>
                        <div className='text-sm md:text-base flex items-center   text-white px-2 md:px-8 py-2 md:py-3  rounded-xl shadow-lg font-semibold hover:bg-[#3636368e] hover:scale-105'>
                            <a href="#contact">
                                Contact Us
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down ml-1 size-4">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
