"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules"; // Removed Navigation
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRef, useState } from "react";
import  LoadingProgress  from "./loadingprogress";

export default function CustomCarousel() {
  const swiperRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(Array(6).fill(false));

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const allImagesLoaded = imagesLoaded.every(Boolean);

  return (
    <div className="w-full max-w-xl">
      {!allImagesLoaded && <LoadingProgress />}
      <Swiper
        modules={[Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        spaceBetween={20}
        className={`w-full max-w-xl select-none rounded-xl drop-shadow-lg ${
          allImagesLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="p-1 rounded-xl">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-xl">
                  <Image
                    priority={true}
                    quality={100}
                    src={`/carousel/${index + 1}.png`}
                    alt={`Carousel image ${index + 1}`}
                    fill
                    className="object-cover w-full h-full rounded-xl"
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageLoad(index)}
                  />
                </CardContent>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
