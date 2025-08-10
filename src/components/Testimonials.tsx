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
import { useEffect, useState } from "react";
import { generateTestimonialAction } from "@/app/actions";
import { TestimonialGeneratorOutput } from "@/ai/flows/testimonial-generator";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { RefreshCw } from "lucide-react";

interface Testimonial extends TestimonialGeneratorOutput {
  avatar: string;
}

const services = ["Kitchen Remodeling", "Bathroom Remodeling", "Whole House Renovation"];

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const testimonialPromises = services.map(service => 
        generateTestimonialAction({ service })
      );
      const results = await Promise.all(testimonialPromises);
      
      const newTestimonials: Testimonial[] = results.map((result, index) => {
        if (result.error || !result.testimonial) {
          throw new Error(result.error || 'Failed to generate testimonial');
        }
        return {
          ...result.testimonial,
          avatar: `https://placehold.co/40x40.png`,
        };
      });

      setTestimonials(newTestimonials);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="relative">
       <div className="absolute -top-16 right-0">
        <Button onClick={fetchTestimonials} variant="outline" size="icon" disabled={isLoading} className="rounded-full">
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          <span className="sr-only">Refresh testimonials</span>
        </Button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} style={{ backgroundColor: 'white', border: '1px solid #131b26' }}>
              <CardContent className="p-8 text-center flex flex-col items-center">
                 <Skeleton className="h-24 w-full mb-6" />
                 <div className="flex items-center space-x-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <Skeleton className="h-6 w-32" />
                 </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
            <p>Could not load testimonials. Please try again.</p>
            <p>{error}</p>
        </div>
      ) : (
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
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
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
      )}
    </div>
  );
}
