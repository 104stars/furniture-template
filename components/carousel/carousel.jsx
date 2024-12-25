"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselComponent() {
  const autoplay = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      className="w-full max-w-xl select-none"
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.play}
      loop // Ensures seamless looping
    >
      <CarouselContent>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                  <Image
                    src={`/carousel/${index + 1}.png`}
                    alt={`Carousel image ${index + 1}`}
                    priority
                    width={600}
                    height={600}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
