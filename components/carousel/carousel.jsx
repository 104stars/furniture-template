'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {Autoplay } from "swiper/modules"; // Removed Navigation
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRef } from "react";

export default function CustomCarousel() {
  const swiperRef = useRef(null);

  return (
    <Swiper
      modules={[Autoplay]} // Excluded Navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop
      spaceBetween={20}
      className="w-full max-w-xl select-none rounded-xl drop-shadow-xl"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <SwiperSlide key={index}>
          <div className="p-1 rounded-xldrop-shadow-lg" >
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-xl">
                <Image
                  src={`/carousel/${index + 1}.png`}
                  alt={`Carousel image ${index + 1}`}
                  priority
                  fill
                  className="object-cover w-full h-full rounded-xl"
                />
              </CardContent>
            </Card>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
