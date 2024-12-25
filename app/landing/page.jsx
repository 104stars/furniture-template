import Navbar from "@/components/navbar/navbar";
import CarouselComponent from "@/components/carousel/carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import MainSection from "./sections/landing-main";
import SecondSection from "./sections/second";
import ThirdSection from "./sections/third";
import FooterSection from "./sections/footer";

export default function HeroSection() {
  return (
    <div >
      <main className="relative min-h-screen">
        <Navbar className="absolute top-0 left-0 right-0 z-10" />
        <MainSection />
      </main>
      <Separator className="w-full drop-shadow-md" />
      <section>
        <SecondSection />
      </section>
      <Separator className="w-full drop-shadow-md" />
      <section>
        <ThirdSection />
      </section>
      <Separator className="w-full drop-shadow-md" />
      <section>
        <FooterSection/>
      </section>
    </div>
  );
}
