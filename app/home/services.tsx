import Image from 'next/image';
import React from 'react';

interface Service {
    title: string;
    description: string;
    image: string;
}

function getRand(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}


const Services: React.FC = () => {

    const servicesData: Service[] = [
        {
            title: "Portrait Photography",
            description: "Capture your personality in stunning portraits with our expert photography services.",
            image: `https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${getRand(37, 72)}).jpg`,
        },
        {
            title: "Event Photography",
            description: "We cover all kinds of events, providing you with high-quality photos that capture every moment.",
            image: `https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${getRand(225, 273)}).jpg`,
        },
        {
            title: "Model Photography",
            description: "Make your products shine with our professional photography that highlights every detail.",
            image: `https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${getRand(0, 36)}).jpg`,
        },
        {
            title: "Wedding Photography",
            description: "Relive your special day with beautifully captured wedding moments that last a lifetime.",
            image: `https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${getRand(274, 296)}).jpg`,
        },
    ];


    return (
        <section className="services-section py-16 px-6 md:px-20 lg:px-32 bg-black">
                {/* <h2 className='text-2xl sm:text-4xl font-bold text-white'>High-Quality Images</h2> */}
            
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 text-white">Our Services</h2>
            <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="service-item bg-[#07110f] p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-800"
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            className="w-full h-40 object-cover object-[center_10%] rounded-t-lg mb-4"
                            width={360}
                            height={256}
                        />
                        <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
