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
    <div>
      <Navbar />
      <main className="relative min-h-screen">
        <MainSection />
      </main>
      <Separator className="w-full drop-shadow-md z-20" />
      <section>
        <SecondSection />
      </section>
      <Separator className="w-full drop-shadow-md z-20" />
      <section>
        <ThirdSection />
      </section>
      <Separator className="w-full drop-shadow-md z-20" />
      <section>
        <FooterSection />
      </section>
    </div>
  );
}
