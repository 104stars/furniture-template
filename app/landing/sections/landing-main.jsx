import { Button } from "@/components/ui/button";
import CarouselComponent from "@/components/carousel/carousel";

export default function MainSection() {
  return (
    <main className="flex flex-col min-h-screen lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 py-20 sm:py-20 lg:py-20 xl:py-40 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl lg:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter font-bold text-left">
          Transform your home into a sanctuary
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-inter text-left text-gray-600 mt-4 sm:mt-6">
          Upgrade your space with our curated collection of sustainable,
          artisan-crafted furniture and decor.
        </p>
        <div className="flex flex-row space-x-5 pt-6">
          <Button className="font-normal font-inter">Shop Now</Button>
          <Button variant="outline" className="font-normal font-inter">Learn More</Button>

        </div>
      </div>
      <div className="w-full max-w-2xl lg:max-w-3xl mt-8 lg:mt-0">
        <CarouselComponent />
      </div>
    </main>
  );
}
