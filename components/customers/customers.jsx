import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Sarah",
    date: "May 23 2024",
    item: "Serenity Lounge Chair",
    description:
      "This chair is everything I hoped for and more. The organic cotton fabric is incredibly soft, and the sustainable teak frame adds such warmth to my reading nook. It's become everyone's favorite spot in the house.",
  },
  {
    id: 2,
    name: "James",
    date: "March 15 2024",
    item: "Harmony Dining Table",
    description:
      "This dining table exceeded all expectations. The reclaimed wood has beautiful character, and the craftsmanship is outstanding. It's become the heart of our home where our family gathers daily.",
  },
  {
    id: 3,
    name: "Emily",
    date: "August 10 2024",
    item: "Luna Pendant Light",
    description:
      "The artisanal glasswork on this pendant light creates the most beautiful patterns on our walls. It's like having an art piece that transforms throughout the day as the light changes. Simply stunning.",
  },
];

export default function CustomerReviews() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-20 font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Card key={index} className="flex flex-col w-full h-[280px] transition ease-linear hover:drop-shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqOOyyHwTtK9QXBfpblPE8VQ-8i3yy0wbIaa3pE2MSiyqK8kO0kQdh8W_y9UqEHY_02w&usqp=CAU"
                    alt="Avatar"
                  />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-lg font-semibold">{review.name}</h2>
                  <p className="text-md text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div>
              <p className="font-bold text-md">{review.item}</p>
              <p className="max-w-md font-light pt-2 max-h-[130px] overflow-y-scroll">{review.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
