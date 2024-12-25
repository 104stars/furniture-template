import Navbar from "@/components/navbar/navbar";
import CarouselComponent from "@/components/carousel/carousel";
import { Button } from "@/components/ui/button";
import MainSection from "./main-section/main";

export default function HeroSection() {
  return (
    <>
      <div className="relative min-h-screen">
        <Navbar className="absolute top-0 left-0 right-0 z-10" />
        <MainSection />
      </div>
    </>
  );
}
