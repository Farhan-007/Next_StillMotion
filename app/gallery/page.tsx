"use client";

import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  Suspense,
  FC,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ImgContainer from "../_components/ImgContainer";
import Buttons from "../_components/Buttons";
import Modal from "../_components/Modal";
import { Images } from "../Images";

// Define constant filters outside the component for stability.
const ALL_FILTERS: string[] = [
  "All",
  "ethnic",
  "fashion",
  "catalogue",
  "portrait",
  "pre-wedding",
  "wedding",
];

const GalleryPageContent: FC = () => {
  // loading state
  const [isLoading, setLoading] = useState(true);
  // galleryData
  const [selectedFilter, setSelectedFilter] = useState<string>(ALL_FILTERS[1]);
  const [data, setData] = useState(Images);

  // Infinite scroll: visible images count
  const INITIAL_VISIBLE_COUNT = 12;
  const LOAD_COUNT = 12;
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);

  // Modal state
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState<string>("");

  const router = useRouter();
  const searchParams = useSearchParams();

  // Function to update filter and URL; include router in deps.
  const updateFilter = useCallback(
    (filter: string) => {
      setSelectedFilter(filter);
      setLoading(true);
      const params = new URLSearchParams(searchParams.toString());
      if (filter === "All") {
        params.delete("filter"); // Remove filter param if "All" is selected
      } else {
        params.set("filter", filter);
      }
      router.push(`/gallery?${params.toString()}`, { scroll: false });
    },
    [searchParams, router]
  );

  // Update filter state when URL changes; include ALL_FILTERS in deps.
  useEffect(() => {
    const filterFromUrl = searchParams.get("filter");
    if (filterFromUrl && ALL_FILTERS.includes(filterFromUrl)) {
      setSelectedFilter(filterFromUrl);
    } else {
      setSelectedFilter("All");
    }
  }, [searchParams]);

  // Filter items based on selected filter.
  const filterItems = useCallback((): void => {
    if (selectedFilter === ALL_FILTERS[0]) {
      setData(Images);
    } else {
      const filteredImages = Images.filter(
        (image) => image.title === selectedFilter
      );
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

  // (activeButton is defined but not used; removed it.)

  // Open modal with selected image
  const openModalWithImage = useCallback((imageUrl: string): void => {
    setModalImg(imageUrl);
    setModal(true);
    console.log(imageUrl);
  }, []);

  // Intersection observer for infinite scrolling.
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!sentinelRef.current) return;
    const currentSentinel = sentinelRef.current; // Capture current ref.
    const observer = new IntersectionObserver(
      (entries) => {
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
      },
      {
        rootMargin: "200px",
      }
    );
    observer.observe(currentSentinel);
    return () => {
      observer.unobserve(currentSentinel);
    };
  }, [data]);

  return (
    <section className="pt-24">
      <Modal
        openModal={modal}
        closeModal={() => setModal(false)}
        modalImg={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${modalImg}).jpg`}
      />
      <div className="gallery-buttons flex items-center justify-start md:justify-center py-4 px-4 gap-2 overflow-x-scroll">
        {ALL_FILTERS.map((item) => (
          <Buttons
            onChange={() => updateFilter(item)}
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
              classString="block h-[12rem] md:h-[30rem] w-[10rem] md:w-[17rem]"
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

// --- Loading Component ---
const LoadingComp: FC = () => {
  const placeholders = new Array(8).fill(null);
  return (
    <>
      {placeholders.map((_, idx) => (
        <div key={idx} className="flex w-[10rem] md:w-[17rem] flex-col gap-4">
          <div className="skeleton h-[13rem] md:h-[20rem] w-full"></div>
          <div className="skeleton h-4 w-28"></div>
        </div>
      ))}
    </>
  );
};

// --- Default Export: Wrap with Suspense ---
export default function GalleryPage() {
  return (
    <Suspense fallback={<LoadingComp />}>
      <GalleryPageContent />
    </Suspense>
  );
}
