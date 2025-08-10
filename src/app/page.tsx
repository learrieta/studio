
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Bath, Home as HomeIcon, UtensilsCrossed } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectGallery } from '@/components/ProjectGallery';
import { Testimonials } from '@/components/Testimonials';
import { QuoteForm } from '@/components/QuoteForm';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-5rem)]">
          <div className="flex flex-col justify-center p-8 md:p-12 order-2 md:order-1" style={{ backgroundColor: '#131b26' }}>
              <div className="max-w-md">
                  <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight" style={{ lineHeight: '1.7' }}>
                      Transforma tu Hogar con el Mejor Remodelador de Lima
                  </h1>
                  <p className="mt-6 text-base md:text-lg text-white/80 leading-relaxed">
                      En Soluciones Integrales combinamos artesanía tradicional con diseño moderno para transformar tus espacios
                  </p>
                  <div className="mt-8">
                      <Button size="lg" asChild className="font-semibold bg-white text-[#131b26] hover:bg-gray-200 rounded-full transition-transform hover:scale-105 duration-200">
                          <a href="#quote">Solicita una Cotización Gratis</a>
                      </Button>
                  </div>
              </div>
          </div>
          <div className="relative min-h-[50vh] md:min-h-0 order-1 md:order-2">
              <Image
                  src="/hero_img.jpeg"
                  alt="Interior de una casa hermosamente remodelada"
                  layout="fill"
                  objectFit="cover"
                  priority
              />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-28 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:mb-20">
              <div className="relative h-96 md:h-auto md:aspect-[4/3]">
                <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://placehold.co/600x450.png"
                      alt="Equipo de remodeladores profesionales planificando un proyecto de renovación."
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint="construction team working"
                    />
                </div>
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://placehold.co/450x600.png"
                      alt="Primer plano de materiales de construcción de alta calidad como madera y baldosas."
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint="construction materials wood"
                    />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-0.5 bg-foreground"></div>
                  <p className="text-sm font-semibold uppercase text-foreground tracking-widest">Sobre Nosotros</p>
                </div>
                <h2 className="font-headline font-bold text-foreground mb-4 text-3xl md:text-4xl">Nuestro Compromiso con la Excelencia</h2>
                <div className="text-foreground/80 space-y-4 text-base" style={{ lineHeight: '1.8' }}>
                  <p>
                    En Soluciones Integrales, creemos que cada proyecto es una colaboración. Trabajamos estrechamente contigo desde el concepto hasta la finalización, asegurando que tu visión se realice con los más altos estándares de calidad y artesanía. Nuestro equipo dedicado gestiona cada detalle, para que puedas disfrutar de una experiencia de renovación fluida y sin estrés.
                  </p>
                  <p>
                    Estamos comprometidos con la comunicación transparente, las soluciones innovadoras y la entrega de un producto final que no solo cumple, sino que supera tus expectativas. Confía en nosotros para construir tu sueño.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center group transition-transform duration-300 hover:scale-105" style={{ backgroundColor: 'hsl(var(--foreground))' }}>
                <CardHeader>
                  <div className="mx-auto rounded-full p-4 w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border-2 border-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                    <UtensilsCrossed className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-white mt-8 pt-4">Remodelación de Cocinas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Crea un corazón hermoso y funcional en tu hogar con nuestros diseños de cocina personalizados, desde gabinetes hasta encimeras.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center group transition-transform duration-300 hover:scale-105" style={{ backgroundColor: 'hsl(var(--foreground))' }}>
                <CardHeader>
                   <div className="mx-auto rounded-full p-4 w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border-2 border-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                    <Bath className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-white mt-8 pt-4">Remodelación de Baños</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Convierte tu baño en un refugio tipo spa. Nos encargamos de todo, desde azulejos y grifería hasta tocadores e iluminación.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center group transition-transform duration-300 hover:scale-105" style={{ backgroundColor: 'hsl(var(--foreground))' }}>
                <CardHeader>
                   <div className="mx-auto rounded-full p-4 w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 border-2 border-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                    <HomeIcon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-white mt-8 pt-4">Casa Completa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Remodelación integral para toda tu casa, asegurando un diseño cohesivo e impresionante en todo momento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section id="gallery" className="py-16 md:py-28" style={{ backgroundColor: '#131b26' }}>
          <div className="container mx-auto px-6">
            <div className="text-left mb-12">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-0.5 bg-white"></div>
                <p className="text-sm font-semibold uppercase text-white/80 tracking-widest">Nuestros Proyectos</p>
              </div>
              <h2 className="font-headline font-bold text-white text-3xl md:text-4xl">Convirtiendo Espacios Ordinarios en Diseños Extraordinarios</h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
                Mira la calidad y la artesanía por ti mismo. Aquí tienes algunos de nuestros proyectos completados.
              </p>
            </div>
            <ProjectGallery />
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
               <div className="flex items-center justify-center gap-4 mb-2">
                <div className="w-12 h-0.5" style={{ backgroundColor: '#131b26' }}></div>
                <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#131b26' }}>Nuestros Clientes</p>
              </div>
              <h2 className="font-headline font-bold text-3xl md:text-4xl" style={{ color: '#131b26' }}>Esto es lo que Dicen Nuestros Clientes Satisfechos</h2>
              <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg" style={{ color: '#131b26' }}>
                Estamos orgullosos de las relaciones que construimos y los hogares que transformamos.
              </p>
            </div>
            <Testimonials />
          </div>
        </section>
        
        {/* Quote Form */}
        <section id="quote" className="py-16 md:py-28" style={{ backgroundColor: '#131b26' }}>
          <div className="container mx-auto px-6">
             <div className="text-center mb-12">
              <h2 className="font-headline font-bold text-white text-3xl md:text-4xl" style={{ fontSize: '2rem' }}>¿Listo para Empezar tu Proyecto?</h2>
              <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-white/80">
                Completa el formulario a continuación para obtener una cotización gratuita y sin compromiso de nuestro equipo de expertos.
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
