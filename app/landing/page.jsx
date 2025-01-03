import Navbar from "@/components/navbar/navbar";
import CarouselComponent from "@/components/carousel/carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import MainSection from "./sections/landing-main";
import SecondSection from "./sections/second";
import ThirdSection from "./sections/third";
import FooterSection from "./sections/footer";
import Reviews from "./sections/reviews";

export default function HeroSection() {
  return (
    <>
      <div className="sticky top-0 z-20">
        <Navbar />
      </div>

      <main>
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
        <Reviews />
      </section>

      <section>
        <FooterSection />
      </section>
    </>
  );
}
