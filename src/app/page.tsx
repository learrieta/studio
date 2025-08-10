
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
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-6rem)]">
          <div className="flex flex-col justify-center p-8 md:p-12" style={{ backgroundColor: '#131b26' }}>
              <div className="max-w-md">
                  <h1 className="text-2xl font-semibold text-white tracking-tight" style={{ fontSize: '2rem', lineHeight: '1.7' }}>
                      Transform Your Home with Lima's Top Remodeler
                  </h1>
                  <p className="mt-6 text-[1rem] text-white/80 leading-relaxed">
                      At Soluciones Integrales we blend timeless craftsmanship with modern design to transform your living spaces
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
                  src="/hero_img.jpeg"
                  alt="Beautifully remodeled home interior"
                  layout="fill"
                  objectFit="cover"
                  priority
              />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative h-96">
                <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://placehold.co/600x450.png"
                      alt="A team of professional remodelers planning a project."
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint="construction team working"
                    />
                </div>
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://placehold.co/450x600.png"
                      alt="Close-up of high-quality construction materials."
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint="construction materials wood"
                    />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-0.5 bg-foreground"></div>
                  <p className="text-sm font-semibold uppercase text-foreground tracking-widest">About Us</p>
                </div>
                <h3 className="font-headline font-bold text-foreground mb-4" style={{ fontSize: '2rem' }}>Our Commitment to Excellence</h3>
                <div className="text-foreground space-y-4" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                  <p className="text-foreground">
                    At RenovateRight, we believe that every project is a partnership. We work closely with you from concept to completion, ensuring your vision is realized with the highest standards of quality and craftsmanship. Our dedicated team manages every detail, so you can enjoy a seamless and stress-free renovation experience.
                  </p>
                  <p className="text-foreground">
                    We are committed to transparent communication, innovative solutions, and delivering a final product that not only meets but exceeds your expectations. Trust us to build your dream.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center group transition-transform duration-300 hover:scale-105 text-white" style={{ backgroundColor: 'hsl(var(--primary))' }}>
                <CardHeader>
                  <div className="mx-auto rounded-full p-4 w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border-2 border-white" style={{ backgroundColor: 'hsl(var(--primary))' }}>
                    <UtensilsCrossed className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="font-headline text-2xl mt-4">Kitchen Remodeling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Create a beautiful and functional heart of your home with our custom kitchen designs, from cabinets to countertops.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center group transition-transform duration-300 hover:scale-105 text-white" style={{ backgroundColor: 'hsl(var(--primary))' }}>
                <CardHeader>
                   <div className="mx-auto rounded-full p-4 w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border-2 border-white" style={{ backgroundColor: 'hsl(var(--primary))' }}>
                    <Bath className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="font-headline text-2xl mt-4">Bathroom Remodeling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Turn your bathroom into a spa-like retreat. We handle everything from tiling and fixtures to vanities and lighting.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center group transition-transform duration-300 hover:scale-105 text-white" style={{ backgroundColor: 'hsl(var(--primary))' }}>
                <CardHeader>
                   <div className="mx-auto rounded-full p-4 w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border-2 border-white" style={{ backgroundColor: 'hsl(var(--primary))' }}>
                    <HomeIcon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="font-headline text-2xl mt-4">Whole House</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
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
