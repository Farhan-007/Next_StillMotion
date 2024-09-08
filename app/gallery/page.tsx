"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Buttons from '../components/Buttons'
import ImgContainer from '../components/ImgContainer';
import Modal from '../components/Modal';
import { Images } from "../Images"

const GalleryPage = () => {

    // galleryData
    const allFilters = ["All", "ethnic", "fashion", "catalogue", "portrait", "pre-wedding", "wedding"]
    const [selectedFilter, setSelectedFilter] = useState(allFilters[0])
    const [data, setData] = useState(Images);

    // buttons
    function activeButton(value: React.SetStateAction<string>) {
        setSelectedFilter(value)
    }

    // Modal 
    const [modal, setModal] = useState(false);
    const [modalImg, setModalImg] = useState('');

    useEffect(() => {
        filterItems();
    }, [selectedFilter]);

    function filterItems() {
        if (selectedFilter.length > 0) {
            if (selectedFilter === allFilters[0]) {
                setData(Images);
            }
            else {
                let tempImages = Images.filter(image => image.title === selectedFilter)
                setData(tempImages);
            }
        };
    };

    // Function to open the modal with the selected image
    function openModalWithImage(imageUrl: string) {
        setModalImg(imageUrl);
        setModal(true);
    }

    return (
        <section className=' pt-24'>
            <Modal
                openModal={modal}
                closeModal={() => setModal(false)}
            >
                <Image
                    src={modalImg}
                    alt={`image`}
                    sizes="(min-width: 1420px) 272px, (min-width: 1080px) calc(5.63vw + 193px), (min-width: 800px) calc(33.08vw - 14px), (min-width: 540px) calc(50vw - 16px), calc(100vw - 16px)"
                    className=" object-cover group-hover:opacity-75"
                />
                {/* <img loading="lazy" className="h-auto w-auto max-w-full max-h-[90dvh] rounded-xl " src={modalImg} alt="" /> */}
            </Modal>
            <div className='gallery-buttons flex items-center justify-start md:justify-center py-4 px-4 overflow-x-scroll'>
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
            <div className=" grid gap-4 px-2 my-3 grid-cols-gallery">
                {data.map((item) => (
                    <ImgContainer
                        key={item.id}
                        photo={item}
                        onClick={() => openModalWithImage(item.src)} // Assuming item.url is the image URL
                    />
                ))}
            </div>

        </section>
    )
}

export default GalleryPage
