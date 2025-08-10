"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "The Miller Family",
    quote: "RenovateRight transformed our outdated kitchen into a modern masterpiece. We couldn't be happier with the result!",
    avatar: "https://placehold.co/40x40.png",
    hint: "happy couple",
  },
  {
    name: "John D.",
    quote: "The attention to detail and professionalism of the RenovateRight team was outstanding. Our new bathroom is a dream come true.",
    avatar: "https://placehold.co/40x40.png",
    hint: "smiling man",
  },
  {
    name: "Sarah & Tom",
    quote: "From start to finish, the entire process was seamless. They listened to our vision and executed it perfectly. Highly recommend!",
    avatar: "https://placehold.co/40x40.png",
    hint: "smiling couple",
  },
];

export function Testimonials() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="p-4">
              <Card style={{ backgroundColor: 'white', border: '1px solid #131b26' }}>
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <p className="text-lg italic mb-6" style={{ color: '#131b26' }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold font-headline" style={{ color: '#131b26' }}>{testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-12" />
      <CarouselNext className="-right-12" />
    </Carousel>
  );
}
