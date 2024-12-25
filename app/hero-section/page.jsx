import Navbar from "@/components/navbar/navbar";
import CarouselComponent from "@/components/carousel/carousel";

export default function HeroSection() {
  return (
    <>
      <Navbar className="fixed top-0 z-10" />
      <section className="flex flex-row items-center align-center justify-center gap-x-20 py-20">
        <div>
          <h1 className="text-7xl font-inter font-bold max-w-[600px] text-left">
            Transform Your Home Into a Sanctuary
          </h1>
          <p className="text-2xl font-inter text-left max-w-[700px] text-gray-500 mt-6">
            Transform your space with our curated collection of sustainable,
            artisan-crafted furniture and decor.
          </p>
        </div>
        <div>
          <CarouselComponent/>
        </div>
      </section>
    </>
  );
}
