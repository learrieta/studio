
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
    title: "Renovación de Cocina Moderna",
    image: "https://placehold.co/600x400.png",
    hint: "remodeled kitchen",
    description: "Una transformación impresionante con gabinetes elegantes, encimeras de cuarzo y electrodomésticos de última generación.",
  },
  {
    title: "Refugio de Baño Tipo Spa",
    image: "https://placehold.co/600x400.png",
    hint: "modern bathroom",
    description: "De un espacio reducido a un oasis de serenidad, con una ducha a ras de suelo y azulejos elegantes.",
  },
  {
    title: "Área de Estar de Concepto Abierto",
    image: "https://placehold.co/600x400.png",
    hint: "living room interior",
    description: "Eliminamos paredes para crear un espacio luminoso y aireado, perfecto para el entretenimiento y reuniones familiares.",
  },
  {
    title: "Elegante Remodelación Exterior",
    image: "https://placehold.co/600x400.png",
    hint: "house exterior",
    description: "Una renovación exterior completa con nuevo revestimiento, ventanas y un acogedor porche delantero.",
  },
  {
    title: "Lujosa Suite Principal",
    image: "https://placehold.co/600x400.png",
    hint: "bedroom interior",
    description: "Este dormitorio principal fue rediseñado para incluir un espacioso vestidor y una acogedora zona de estar.",
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
