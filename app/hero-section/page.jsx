import Navbar from "@/components/navbar/navbar";
import CarouselComponent from "@/components/carousel/carousel";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <Navbar className="absolute top-0 left-0 right-0 z-10" />
      <main className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 py-20 px-4 lg:px-8 ">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-inter font-bold text-left">
            Transform Your Home Into a Sanctuary
          </h1>
          <p className="text-xl md:text-2xl font-inter text-left text-gray-500 mt-6">
            Transform your space with our curated collection of sustainable,
            artisan-crafted furniture and decor.
          </p>
          <div className="flex space-x-6 sm:space-x-5 md:space-x-5 lg:space-x-30 mt-6">
            <Button>Shop Now</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="w-full max-w-2xl justify-center">
          <CarouselComponent />
        </div>
      </main>
    </div>
  );
}
