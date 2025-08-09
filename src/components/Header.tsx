import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const Logo = () => (
  <a href="#" className="flex items-center">
    <Image 
      src="/logo.jpg"
      alt="Logo"
      width={180}
      height={50}
      data-ai-hint="logo"
      className="object-contain"
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
                className="transition-colors hover:text-primary text-[#131b26]"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="transition-colors hover:text-primary text-[#131b26]"
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                className="transition-colors hover:text-primary text-[#131b26]"
              >
                Testimonials
              </a>
            </nav>
            <Button asChild style={{ backgroundColor: '#131b26' }} className="font-semibold text-white hover:bg-gray-800 rounded-full">
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
                        <a href="#services" className="transition-colors hover:text-primary text-[#131b26]">Services</a>
                        <a href="#gallery" className="transition-colors hover:text-primary text-[#131b26]">Gallery</a>
                        <a href="#testimonials" className="transition-colors hover:text-primary text-[#131b26]">Testimonials</a>
                    </nav>
                    <Button asChild style={{ backgroundColor: '#131b26' }} className="mt-8 w-full font-semibold text-white hover:bg-gray-800 rounded-full">
                        <a href="#quote">Get a Quote</a>
                    </Button>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
