import { Button } from "@/components/ui/button";

export default function ThirdSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
          {/* Content Section */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl lg:max-w-2xl font-inter font-bold text-left leading-snug sm:leading-normal">
              Discover your style with our personalized design consultations
            </h2>
            <p className="font-inter sm:text-lg lg:text-xl lg:max-w-xl text-gray-600 mt-4 sm:mt-6">
              Our expert designers work one-on-one with you to understand your
              vision, lifestyle, and preferences. Through thoughtful collaboration,
              we create spaces that reflect your personality while maximizing
              comfort and functionality.
            </p>
          </div>

          {/* Button Section */}
          <div className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0">
            <Button className="font-inter font-light text-sm sm:text-base lg:text-lg px-5 sm:px-6 py-2 sm:py-3">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
