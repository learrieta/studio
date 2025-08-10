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
    name: "The Johnson Family",
    avatar: "https://placehold.co/40x40.png",
    hint: "happy couple",
    quote:
      "RenovateRight transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible, and the team was professional from start to finish. We couldn't be happier!",
  },
  {
    name: "Mark T.",
    avatar: "https://placehold.co/40x40.png",
    hint: "smiling man",
    quote:
      "My bathroom remodel exceeded all my expectations. It feels like a luxury spa now. The project was completed on time and on budget. Highly recommend their services.",
  },
  {
    name: "Sarah & David P.",
    avatar: "https://placehold.co/40x40.png",
    hint: "person portrait",
    quote:
      "We hired them for a whole-house renovation, and it was the best decision we ever made. They listened to our vision and brought it to life beautifully. Their craftsmanship is top-notch.",
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
