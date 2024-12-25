import { Button } from "@/components/ui/button";

export default function SecondSection() {
  return (
    <section className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="text-sm text-gray-500 font-inter">Durable</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter">
            Sustainable materials, timeless beauty
          </h2>
          <Button className="font-light font-inter">Explore store</Button>
        </div>
        
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="text-sm text-gray-500 font-inter">Balance</div>
          <p className="text-lg sm:text-xl text-gray-600 font-inter">
            We believe luxury and environmental responsibility go hand in hand.
            From reclaimed wood to organic textiles, every material we select is
            chosen with both aesthetics and sustainability in mind, ensuring your
            home remains beautiful for generations to come.
          </p>
          <Button variant="outline" className="font-light font-inter">Learn More</Button>
        </div>
      </div>
    </section>
  );
}

