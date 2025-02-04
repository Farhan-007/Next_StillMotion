// "use client"
// import React, { useEffect, useState } from 'react';
// import ImgContainer from '../components/ImgContainer';
// import { allFilters } from "../myData"
// import { Images } from "../Images"
// import Link from 'next/link';

// interface Category {
//   id: number;
//   src: string;
//   title: string;
// }

// const CategorySection = () => {

//   const [categories, setCategories] = useState<Category[]>([]);

//   useEffect(() => {
//     function getRand(min: number, max: number) {
//       return Math.floor(Math.random() * (max - min + 1)) + min;
//     }

//     setCategories([
//       { id: getRand(0, 36), src: "", title: allFilters[1] },
//       { id: getRand(37, 72), src: "", title: allFilters[2] },
//       { id: getRand(73, 197), src: "", title: allFilters[3] },
//       { id: getRand(198, 224), src: "", title: allFilters[4] },
//       { id: getRand(225, 273), src: "", title: allFilters[5] },
//       { id: getRand(274, 296), src: "", title: allFilters[6] },
//     ]);
//   }, []);
//   // console.log(getRand(0,36))
//   return (
//     <section className="py-16 px-8 bg-black">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold text-white mb-12 ">
//           Our Work
//         </h2>
//       </div>

//       <div className="flex items-center gap-6 py-5 px-0 md:px-8 overflow-y-scroll no-scrollbar">
//         {categories.map((item, idx) => (
//           <div key={idx} className="relative md:min-h-[70vh] min-w-max transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden">

//             <Link href={'/gallery'} >

//               <ImgContainer
//                 photo={item}
//                 Click={() => ""}
//               />
//               <div className="absolute bottom-0 left-0 right-0 md:bottom-[40px] p-4 text-center">
//                 <h3 className="text-xl font-bold text-white drop-shadow-md">{item.title}</h3>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategorySection;



"use client";
import React, { useEffect, useState } from 'react';
import ImgContainer from '../components/ImgContainer';
import { allFilters } from "../myData";
import { Images } from '../Images';
import Link from 'next/link';

interface Category {
  id: string;
  src: string;
  title: string;
}

const Category = () => {

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    function getRand(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 2)) + min;
    }

    setCategories([
      { id: `${getRand(0, 36)}`, src: "", title: allFilters[1] },
      { id: `${getRand(37, 54)}`, src: "", title: allFilters[2] },
      { id: `${getRand(73, 197)}`, src: "", title: allFilters[3] },
      { id: `${getRand(198, 212)}`, src: "", title: allFilters[4] },
      { id: `${getRand(225, 273)}`, src: "", title: allFilters[5] },
      { id: `${getRand(274, 290)}`, src: "", title: allFilters[6] },
    ]);
  }, []);

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

// kjdfohofh

export default Category;

