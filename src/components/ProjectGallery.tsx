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
  },
  {
    title: "Spa-like Bathroom Retreat",
    image: "https://placehold.co/600x400.png",
    hint: "modern bathroom",
  },
  {
    title: "Open Concept Living Area",
    image: "https://placehold.co/600x400.png",
    hint: "living room interior",
  },
  {
    title: "Elegant Exterior Facelift",
    image: "https://placehold.co/600x400.png",
    hint: "house exterior",
  },
  {
    title: "Luxurious Master Suite",
    image: "https://placehold.co/600x400.png",
    hint: "bedroom interior",
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
            <div className="p-1">
              <Card className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.hint}
                    />
                  </div>
                  <div className="p-4 bg-background">
                    <h3 className="font-headline text-lg font-semibold text-foreground">{project.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-14" />
      <CarouselNext className="mr-14" />
    </Carousel>
  );
}
