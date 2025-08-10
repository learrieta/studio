
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const Logo = () => (
  <a href="#" className="flex items-center">
    <Image
      src="/logo.jpg"
      alt="Soluciones Integrales Logo"
      width={70}
      height={40}
    />
  </a>
);

export function Header() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8 text-base font-semibold">
             <a
                href="#services"
                className="text-foreground relative group py-3"
              >
                <span>Nosotros</span>
                <span className="absolute bottom-[8px] left-0 w-full h-0.5 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </a>
              <a
                href="#gallery"
                className="text-foreground relative group py-3"
              >
                <span>Projectos</span>
                <span className="absolute bottom-[8px] left-0 w-full h-0.5 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </a>
              <a
                href="#testimonials"
                className="text-foreground relative group py-3"
              >
                <span>Testimonios</span>
                <span className="absolute bottom-[8px] left-0 w-full h-0.5 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </a>
            </nav>
            <Button asChild className="bg-foreground font-semibold text-background hover:bg-foreground/90 rounded-full transition-transform hover:scale-105 duration-200">
                <a href="#quote">Cotizar</a>
            </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="hover:bg-foreground hover:text-background">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-full max-w-xs p-6" side="right">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <div className="mb-8">
                      <Logo />
                    </div>
                    <nav className="flex flex-col gap-y-6 text-lg font-semibold">
                        <a href="#services" className="text-foreground border-b-2 border-transparent hover:border-foreground transition-all duration-300 w-fit">Servicios</a>
                        <a href="#gallery" className="text-foreground border-b-2 border-transparent hover:border-foreground transition-all duration-300 w-fit">Galería</a>
                        <a href="#testimonials" className="text-foreground border-b-2 border-transparent hover:border-foreground transition-all duration-300 w-fit">Testimonios</a>
                    </nav>
                    <Button asChild className="bg-foreground mt-8 w-full font-semibold text-background hover:bg-foreground/90 rounded-full transition-transform hover:scale-105 duration-200">
                        <a href="#quote">Cotizar</a>
                    </Button>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
