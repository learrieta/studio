import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Bath, Home as HomeIcon, UtensilsCrossed } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DreamHomeGenerator } from '@/components/DreamHomeGenerator';
import { ProjectGallery } from '@/components/ProjectGallery';
import { Testimonials } from '@/components/Testimonials';
import { QuoteForm } from '@/components/QuoteForm';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
          <div className="flex flex-col justify-center p-8 md:p-12" style={{ backgroundColor: '#131b26' }}>
              <div className="max-w-md">
                  <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
                      Transform Your Home with Lima's Top Remodeler
                  </h1>
                  <p className="mt-6 text-base text-white/80">
                      At RenovateRight, we blend timeless craftsmanship with modern design to transform your living spaces.
                  </p>
                  <div className="mt-8">
                      <Button size="lg" asChild className="font-semibold bg-white text-[#131b26] hover:bg-gray-200 rounded-full transition-transform hover:scale-105 duration-200">
                          <a href="#quote">Request a Free Quote</a>
                      </Button>
                  </div>
              </div>
          </div>
          <div className="relative min-h-[50vh] md:min-h-0">
              <Image
                  src="https://placehold.co/800x1000.png"
                  alt="Remodeled kitchen"
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint="modern kitchen"
                  className="w-full h-full"
              />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">Our Services</h2>
              <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                From single rooms to whole-house transformations, we offer a full range of remodeling services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center group hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/50">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <UtensilsCrossed className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl mt-4">Kitchen Remodeling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create a beautiful and functional heart of your home with our custom kitchen designs, from cabinets to countertops.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/50">
                <CardHeader>
                   <div className="mx-auto bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Bath className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl mt-4">Bathroom Remodeling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Turn your bathroom into a spa-like retreat. We handle everything from tiling and fixtures to vanities and lighting.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center group hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary/50">
                <CardHeader>
                   <div className="mx-auto bg-primary/10 rounded-full p-4 w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <HomeIcon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl mt-4">Whole House</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive remodeling for your entire home, ensuring a cohesive and stunning design throughout.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Dream Home Generator */}
        <section id="dream-tool" className="py-16 md:py-28 bg-secondary/50">
          <div className="container mx-auto px-6">
             <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">Dream Bigger</h2>
              <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                Not sure where to start? Use our AI tool to turn your vague ideas into an inspiring project description.
              </p>
            </div>
            <DreamHomeGenerator />
          </div>
        </section>
        
        {/* Project Gallery */}
        <section id="gallery" className="py-16 md:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">Our Work</h2>
              <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                See the quality and craftsmanship for yourself. Here are a few of our completed projects.
              </p>
            </div>
            <ProjectGallery />
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-28 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">What Our Clients Say</h2>
              <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                We're proud of the relationships we build and the homes we transform.
              </p>
            </div>
            <Testimonials />
          </div>
        </section>
        
        {/* Quote Form */}
        <section id="quote" className="py-16 md:py-28 bg-background">
          <div className="container mx-auto px-6">
             <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary">Ready to Start Your Project?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                Fill out the form below to get a free, no-obligation quote from our team of experts.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <QuoteForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
