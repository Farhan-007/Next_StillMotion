import React from 'react'

const data = [
    { h3: "High-Quality Images", p: "Get crystal-clear and vibrant images that capture every detail perfectly." },
    { h3: "Creative Direction", p: "Our team offers creative direction to make your photos stand out with unique concepts." },
    { h3: "Quick Turnaround", p: "Receive your edited photos promptly without compromising on quality." },
]

function Feature() {
    return (
        <section id="features" className="py-16 bg-black">
            <div className="container mx-auto px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-12 ">
                    Our Features 
                </h2>
                <div className="flex md:flex-col flex-wrap justify-center md:items-center gap-8 md:gap-20 ">
                    {data.map((e, idx) => {
                        return (
                            <div key={idx} className={`${idx % 2 === 0 ? `flex-row-reverse` : `flex-row`}  feature-card flex items-center justify-center transition-transform transform hover:scale-105 bg-gray-800 rounded-lg shadow-lg min-h-52 `}>
                                <img
                                    src="https://via.placeholder.com/300"
                                    alt="Feature 1"
                                    className="w-[50%] min-h-52 object-cover rounded-md "
                                />
                                <div className="p-2 md:p-6 w-[50%] max-w-lg">
                                    <h3 className="md:text-2xl text-xl font-semibold text-white mb-2">{e.h3}</h3>
                                    <p className="text-gray-400">{e.p.slice(0, 60)}...</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Feature
