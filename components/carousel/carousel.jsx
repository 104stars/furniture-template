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

export default function CarouselComponent() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  );

  return (
    <Carousel
  plugins={[plugin.current]}
  className="w-full max-w-xl select-none" // Increased max width
  onMouseEnter={plugin.current.stop}
  onMouseLeave={plugin.current.play}
  loop
>
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-4"> {/* Increased padding for spacing */}
          <Card className="h-full">
            <CardContent className="flex aspect-square items-center justify-center p-10"> {/* Increased padding */}
              <span className="text-6xl font-semibold">{index + 1}</span> {/* Larger text */}
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>
  );
}
