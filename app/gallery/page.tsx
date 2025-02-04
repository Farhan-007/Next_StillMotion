"use client";
import React, { useEffect, useState, useCallback, useRef } from 'react';
import ImgContainer from '../components/ImgContainer';
import Buttons from '../components/Buttons';
import Modal from '../components/Modal';
import { Images } from "../Images";
import { useSearchParams } from 'next/navigation';

const GalleryPage = () => {
  // loading state
  const [isLoading, setLoading] = useState(true);
  // galleryData
  const allFilters = ["All", "ethnic", "fashion", "catalogue", "portrait", "pre-wedding", "wedding"];
  const [selectedFilter, setSelectedFilter] = useState(allFilters[1]);
  const [data, setData] = useState(Images);

  // Infinite scroll: visible images count
  const INITIAL_VISIBLE_COUNT = 12;
  const LOAD_COUNT = 12;
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);

  // Modal 
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const searchParams = useSearchParams();

  // When GalleryPage loads, check for filter query parameter
  useEffect(() => {
    const filterFromUrl = searchParams.get('filter');
    if (filterFromUrl && allFilters.includes(filterFromUrl)) {
      setSelectedFilter(filterFromUrl);
    }
  }, [searchParams]);

  // Filter items based on selected filter
  const filterItems = useCallback(() => {
    if (selectedFilter === allFilters[0]) {
      setData(Images);
    } else {
      const filteredImages = Images.filter(image => image.title === selectedFilter);
      setData(filteredImages);
    }
    setVisibleCount(INITIAL_VISIBLE_COUNT);
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

  // Open modal with selected image
  const openModalWithImage = useCallback((imageUrl: string) => {
    setModalImg(imageUrl);
    setModal(true);
    console.log(imageUrl);
  }, []);

  // Intersection observer for infinite scrolling
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => {
            if (prev < data.length) {
              return Math.min(prev + LOAD_COUNT, data.length);
            }
            return prev;
          });
        }
      });
    }, {
      rootMargin: '200px',
    });

    observer.observe(sentinelRef.current);

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [data]);

  return (
    <section className='pt-24'>
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

      <div className="flex flex-wrap justify-center items-center gap-4 px-2 my-3 grid-cols-gallery">
        {isLoading ? (
          <LoadingComp />
        ) : (
          data.slice(0, visibleCount).map((item) => (
            <ImgContainer
              key={item.id}
              photo={item}
              Click={() => {
                console.log(item.id);
                openModalWithImage(item.id);
              }}
            />
          ))
        )}
      </div>

      {!isLoading && visibleCount < data.length && (
        <div ref={sentinelRef} className="h-10"></div>
      )}
    </section>
  );
};

export default GalleryPage;

function LoadingComp() {
  const array = new Array(8).fill(null);
  return (
    <>
      {array.map((_item, idx) => (
        <div key={idx} className="flex w-[10rem] md:w-[17rem] flex-col gap-4">
          <div className="skeleton h-[13rem] md:h-[20rem] w-full"></div>
          <div className="skeleton h-4 w-28"></div>
        </div>
      ))}
    </>
  );
}
