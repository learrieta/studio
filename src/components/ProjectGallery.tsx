
"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";

const projects = [
  {
    title: "Modern Kitchen Overhaul",
    image: "https://placehold.co/600x400.png",
    hint: "remodeled kitchen",
    description: "A stunning transformation with sleek cabinets, quartz countertops, and state-of-the-art appliances.",
  },
  {
    title: "Spa-like Bathroom Retreat",
    image: "https://placehold.co/600x400.png",
    hint: "modern bathroom",
    description: "From a cramped space to a serene oasis, featuring a walk-in shower and elegant tiling.",
  },
  {
    title: "Open Concept Living Area",
    image: "https://placehold.co/600x400.png",
    hint: "living room interior",
    description: "We removed walls to create a bright, airy space perfect for entertaining and family gatherings.",
  },
  {
    title: "Elegant Exterior Facelift",
    image: "https://placehold.co/600x400.png",
    hint: "house exterior",
    description: "A complete exterior renovation with new siding, windows, and a welcoming front porch.",
  },
  {
    title: "Luxurious Master Suite",
    image: "https://placehold.co/600x400.png",
    hint: "bedroom interior",
    description: "This master bedroom was redesigned to include a spacious walk-in closet and a cozy sitting area.",
  },
];

export function ProjectGallery() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="overflow-hidden group h-full flex flex-col bg-foreground">
                <CardContent className="p-0 flex flex-col flex-grow">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.hint}
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow bg-foreground">
                    <h3 className="font-headline text-lg font-semibold text-background">{project.title}</h3>
                    <p className="mt-2 text-sm text-background/80 flex-grow">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-4 md:ml-14" />
      <CarouselNext className="mr-4 md:mr-14" />
    </Carousel>
  );
}
