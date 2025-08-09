import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const Logo = () => (
  <a href="#" className="flex items-center">
    <Image
      src="/logo.jpg"
      alt="RenovateRight Logo"
      width={150}
      height={40}
    />
  </a>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm font-semibold">
             <a
                href="#services"
                className="text-[#131b26] border-b-2 border-transparent hover:border-[#131b26] transition-all duration-300"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="text-[#131b26] border-b-2 border-transparent hover:border-[#131b26] transition-all duration-300"
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                className="text-[#131b26] border-b-2 border-transparent hover:border-[#131b26] transition-all duration-300"
              >
                Testimonials
              </a>
            </nav>
            <Button asChild style={{ backgroundColor: '#131b26' }} className="font-semibold text-white hover:bg-gray-800 rounded-full transition-transform hover:scale-105 duration-200">
                <a href="#quote">Get a Quote</a>
            </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-full max-w-xs p-6" side="right">
                    <div className="mb-8">
                      <Logo />
                    </div>
                    <nav className="flex flex-col gap-y-6 text-lg font-semibold">
                        <a href="#services" className="text-[#131b26] border-b-2 border-transparent hover:border-[#131b26] transition-all duration-300 w-fit">Services</a>
                        <a href="#gallery" className="text-[#131b26] border-b-2 border-transparent hover:border-[#131b26] transition-all duration-300 w-fit">Gallery</a>
                        <a href="#testimonials" className="text-[#131b26] border-b-2 border-transparent hover:border-[#131b26] transition-all duration-300 w-fit">Testimonials</a>
                    </nav>
                    <Button asChild style={{ backgroundColor: '#131b26' }} className="mt-8 w-full font-semibold text-white hover:bg-gray-800 rounded-full transition-transform hover:scale-105 duration-200">
                        <a href="#quote">Get a Quote</a>
                    </Button>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
