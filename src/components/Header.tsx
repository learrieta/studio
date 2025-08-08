import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Logo = () => (
  <a href="#" className="flex items-center space-x-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8 text-primary"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
    <span className="text-2xl font-headline font-bold text-foreground">
      RenovateRight
    </span>
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
            <Button asChild style={{ backgroundColor: '#131b26' }} className="font-semibold text-white hover:bg-gray-800">
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
                    <Button asChild style={{ backgroundColor: '#131b26' }} className="mt-8 w-full font-semibold text-white hover:bg-gray-800">
                        <a href="#quote">Get a Quote</a>
                    </Button>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
