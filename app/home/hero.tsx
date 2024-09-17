import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20 ">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    {/*<Image*/}
                    {/*    src="https://images.unsplash.com/photo-1542850016-09be38350dd4?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"*/}
                    {/*    alt="Model in Dark Background"*/}
                    {/*    fill={true}*/}
                    {/*    sizes="(min-width: 1420px) 272px, (min-width: 1080px) calc(5.63vw + 193px), (min-width: 800px) calc(33.08vw - 14px), (min-width: 540px) calc(50vw - 16px), calc(100vw - 16px)"*/}
                    {/*    priority={true}*/}
                    {/*    className="object-cover w-full h-full"*/}
                    {/*/>*/}
                </div>

                {/* Hero Content */}
                <div className="flex flex-col items-center gap-4 relative z-1 text-center max-w-[20rem] md:max-w-max p-6 md:p-12 lg:p-24">
                    {/* <Link href={"/gallery"} className=" bg-clip-text text-white w-max px-2 md:px-4 py-1 rounded-[10vw] shadow-lg transform border bg-gradient-to-br from-yellow-500 to-pink-400 hover:bg-[#3636368e] hover:scale-[1.05]">
                            Visit our Gallery &#128279;
                    </Link> */}
                    {/* <div className="flex relative z-10 flex-col"> */}
                    {/* <h1 className="max-w-2xl  mb-4 text-5xl font-bold tracking-tight leading-none bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#707070] bg-clip-text md:text-7xl text-white">Still Motion Pictures.</h1> */}
                    <h1 className="md:max-w-2xl  mb-4 text-4xl font-bold tracking-tight leading-none bg-gradient-to-br from-[#ffffff] via-[#ffffff] to-[#707070] bg-clip-text md:text-7xl text-white">Capture Moments That Last a Life Time</h1>
                    {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Capture Your Moments
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8">
                        Transform your precious moments into timeless memories with our expert photography services.
                    </p> */}
                    <p className=" md:max-w-xl mb-6  text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> Our team of exceptional photographers and cinematographers are passionate about capturing the moments that matter most to you.</p>
                    <div className='flex flex-col justify-center items-center md:flex-row gap-4'>
                        <Link
                            href="gallery"
                            className=" bg-white text-black px-6 md:px-8 py-3 rounded-[10vw] shadow-lg font-semibold  hover:scale-105"
                        >
                            Explore our Work
                        </Link>
                        <div className='flex items-center   text-white px-6 md:px-8 py-3 rounded-[10vw] shadow-lg hover:bg-[#3636368e] hover:scale-105'>
                            <a
                                href="#contact"
                                className=" font-semibold "
                            >
                                Contact Us
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down ml-1 size-4"><path d="m6 9 6 6 6-6"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
