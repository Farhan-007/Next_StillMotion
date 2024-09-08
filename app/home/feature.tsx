import React from 'react'

function Feature() {
    return (
        <>
            <section id="features" className="py-16 bg-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-12 ">
                        Our Features
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="feature-card transition-transform transform hover:scale-105 bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
                            <img
                                src="https://via.placeholder.com/200"
                                alt="Feature 1"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-white mb-2">High-Quality Images</h3>
                            <p className="text-gray-400">Get crystal-clear and vibrant images that capture every detail perfectly.</p>
                        </div>
                        <div className="feature-card transition-transform transform hover:scale-105 bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
                            <img
                                src="https://via.placeholder.com/200"
                                alt="Feature 2"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-white mb-2">Creative Direction</h3>
                            <p className="text-gray-400">Our team offers creative direction to make your photos stand out with unique concepts.</p>
                        </div>
                        <div className="feature-card transition-transform transform hover:scale-105 bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
                            <img
                                src="https://via.placeholder.com/200"
                                alt="Feature 3"
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-white mb-2">Quick Turnaround</h3>
                            <p className="text-gray-400">Receive your edited photos promptly without compromising on quality.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
