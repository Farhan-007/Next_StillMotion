import React, { useRef, useState } from 'react';
import Team from './team';


function About() {
    return (
        <section className=" py-16 px-8 md:px-20">
            <section className="bg-black text-white">
                <div className="px-4 min-h-[80vh] flex flex-col items-center justify-center text-center gap-5">
                    <h2 className="mb-4 text-5xl font-extrabold tracking-tight">About Us</h2>
                    <p className="mb-8 font-light text-gray-400 sm:text-xl">
                        We are a dedicated team of photographers capturing the world through our lens. Our mission is to tell stories and create lasting memories through stunning visuals.
                    </p>
                </div>
                <div className="py-12 px-4 mx-auto max-w-screen-xl text-center">
                    <h3 className="mb-4 text-3xl font-semibold">Our Vision</h3>
                    <p className="mb-8 font-light text-gray-400 sm:text-lg">
                        We believe in the power of photography to communicate emotions and connect people. Our goal is to create art that resonates and inspires.
                    </p>
                </div>
                <div className="py-12 px-4 mx-auto max-w-screen-xl text-center">
                    <h3 className="mb-4 text-3xl font-semibold">What We Offer</h3>
                    <p className="mb-8 font-light text-gray-400 sm:text-lg">
                        From portrait sessions to commercial photography, we offer a wide range of services tailored to your needs.
                    </p>
                </div>
                <Team />
                <div className="py-12 px-4 mx-auto max-w-screen-xl text-center">
                    <h3 className="mb-4 text-3xl font-semibold">Get in Touch</h3>
                    <p className="font-light text-gray-400 sm:text-lg">
                        Have questions or want to book a session? <a href="/#contact" className="text-blue-400 hover:underline">Contact us</a> today!
                    </p>
                </div>
            </section>
            {/* <div className="bg-black text-white max-w-6xl mx-auto px-6 py-12">
                <section className="mb-12">
                    <h1 className="text-5xl font-bold leading-tight">Capturing Moments, Creating Memories</h1>
                    <p className="mt-4 text-lg md:text-xl">
                        Welcome to [Agency Name], where we specialize in creating stunning photographs that tell your unique story. Our team is dedicated to delivering high-quality images that you'll cherish forever.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-semibold border-b-2 border-blue-500 inline-block pb-2 mb-4">Our Story</h2>
                    <p className="mt-2 text-lg md:text-xl">
                        [Agency Name] was founded in [Year] by [Founder's Name] with a passion for photography and a vision to capture life’s beautiful moments. Over the years, we have worked with countless clients, growing our expertise and expanding our creative horizons.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-semibold border-b-2 border-blue-500 inline-block pb-2 mb-4">Mission & Vision</h2>
                    <p className="mt-2 text-lg md:text-xl">
                        Our mission is to provide exceptional photography services that inspire and evoke emotions. We envision being a leader in the photography industry by continually pushing creative boundaries.
                    </p>
                </section>

                <section className="mb-12">
                    <Team />
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-semibold border-b-2 border-blue-500 inline-block pb-2 mb-4">Our Style & Approach</h2>
                    <p className="mt-2 text-lg md:text-xl">
                        We believe in capturing authentic moments with a blend of artistry and documentary style. Our approach is client-centric, ensuring that we understand your vision and bring it to life.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-semibold border-b-2 border-blue-500 inline-block pb-2 mb-4">Client Testimonials</h2>
                    <blockquote className="mt-4 p-4 border-l-4 border-blue-500 italic bg-gray-900 rounded-md">
                        “The photos exceeded our expectations! [Agency Name] truly captured the essence of our special day.” — [Client Name]
                    </blockquote>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-semibold border-b-2 border-blue-500 inline-block pb-2 mb-4">Core Values</h2>
                    <ul className="mt-4 space-y-2">
                        <li className="bg-gray-800 p-4 rounded-lg">Creativity</li>
                        <li className="bg-gray-800 p-4 rounded-lg">Quality</li>
                        <li className="bg-gray-800 p-4 rounded-lg">Customer Satisfaction</li>
                        <li className="bg-gray-800 p-4 rounded-lg">Passion</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-4xl font-semibold border-b-2 border-blue-500 inline-block pb-2 mb-4">Get in Touch</h2>
                    <p className="mt-4 text-lg md:text-xl">
                        Ready to create beautiful memories together? <br />
                        <a href="/contact" className="inline-block mt-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">Contact Us</a>
                    </p>
                </section>

                <footer className="mt-12">
                    <p>
                        Follow us on social media:
                        <a href="[Facebook URL]" className="ml-2 text-blue-500 hover:underline">Facebook</a>,
                        <a href="[Instagram URL]" className="ml-2 text-blue-500 hover:underline">Instagram</a>,
                        <a href="[Twitter URL]" className="ml-2 text-blue-500 hover:underline">Twitter</a>
                    </p>
                </footer>
            </div> */}
        </section>
    );
};

export default About
