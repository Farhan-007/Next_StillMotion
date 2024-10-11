import React from 'react';

interface Package {
  title: string;
  price: string;
  features: string[];
}

const packagesData: Package[] = [
  {
    title: "Basic Package",
    price: "$299",
    features: [
      "2-hour photo session",
      "10 edited photos",
      "Online gallery access",
    ],
  },
  {
    title: "Standard Package",
    price: "$499",
    features: [
      "4-hour photo session",
      "25 edited photos",
      "Online gallery access",
      "One location shoot",
    ],
  },
  {
    title: "Premium Package",
    price: "$799",
    features: [
      "Full-day photo session",
      "50 edited photos",
      "Online gallery access",
      "Two location shoots",
      "Photo album",
    ],
  },
  {
    title: "Ultimate Package",
    price: "$1199",
    features: [
      "Full-day photo session",
      "100 edited photos",
      "Online gallery access",
      "Multiple location shoots",
      "Photo album & prints",
      "Digital copies",
    ],
  },
];

const Packages: React.FC = () => {
  return (
    <section className="packages-section py-16 px-6 md:px-20 lg:px-32 bg-black">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-500">Our Packages</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {packagesData.map((pkg, index) => (
          <div key={index} className="package-item bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-white">{pkg.title}</h3>
            <p className="text-2xl font-bold text-amber-400 mb-4">{pkg.price}</p>
            <ul className="text-gray-400 mb-4">
              {pkg.features.map((feature, i) => (
                <li key={i} className="mb-2">• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
