"use client";
import Image from 'next/image';
import React, { useEffect, useState, useCallback } from 'react'
import Buttons from '../components/Buttons'
import ImgContainer from '../components/ImgContainer';
import Modal from '../components/Modal';
import { Images } from "../Images"

const GalleryPage = () => {


    // loading
    const [isLoading, setLoading] = useState(true)
    // galleryData
    const allFilters = ["All", "ethnic", "fashion", "catalogue", "portrait", "pre-wedding", "wedding"]
    const [selectedFilter, setSelectedFilter] = useState(allFilters[1])
    const [data, setData] = useState(Images);

    // buttons
    // function activeButton(value: React.SetStateAction<string>) {
    //     setSelectedFilter(value)
    // }

    // Modal 
    const [modal, setModal] = useState(false);
    const [modalImg, setModalImg] = useState('');

    const filterItems = useCallback(() => {
        if (selectedFilter === allFilters[0]) {
            setData(Images);
        } else {
            const filteredImages = Images.filter(image => image.title === selectedFilter);
            setData(filteredImages);
        }
        setLoading(false);
    }, [selectedFilter]);

    useEffect(() => {
        const timer = setTimeout(() => {
            filterItems();
        }, 1000);

        return () => clearTimeout(timer);
    }, [filterItems]);

    const activeButton = useCallback((value: React.SetStateAction<string>) => {
        setSelectedFilter(value);
        setLoading(true);
    }, []);

    // Function to open the modal with the selected image
    const openModalWithImage = useCallback((imageUrl: string) => {
        setModalImg(imageUrl);
        setModal(true);
        console.log(imageUrl)
    }, []);

    return (
        <section className=' pt-24'>
            <Modal
                openModal={modal}
                closeModal={() => setModal(false)}
                modalImg={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${modalImg}).jpg`}
            />
            <div className='gallery-buttons flex items-center justify-start md:justify-center py-4 px-4 gap-2 overflow-x-scroll'>
                {allFilters.map((item) => (
                    <Buttons
                        onChange={activeButton}
                        active={selectedFilter}
                        id={item}
                        key={item}
                    />
                ))}
            </div>
            {/* <img loading="lazy" className="h-auto max-w-full rounded-lg" src={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/tr:w-300/(0).jpg`} alt={`image-0`} /> */}
            <div className=" flex flex-wrap justify-center items-center gap-4 px-2 my-3 grid-cols-gallery">
                {isLoading ? <LoadingComp /> : data.map((item) => (
                    <div key={item.id} onClick={() => { console.log(item.id); openModalWithImage(item.id) }}>
                        <ImgContainer
                            photo={item}
                        />
                    </div>
                ))}
            </div>

        </section>
    )
}

export default GalleryPage
function LoadingComp() {
    const array = new Array(8).fill(null);
    return <>
        {array.map((_item, idx) => (
            <div key={idx} className=" flex w-[10rem] md:w-[17rem] flex-col gap-4">
                {/* <div className="skeleton h-[15rem] md:h-[26rem] "></div> */}
                <div className="skeleton h-[13rem] md:h-[20rem]  w-full"></div>
                <div className="skeleton h-4 w-28"></div>
            </div>
        ))}
    </>
}