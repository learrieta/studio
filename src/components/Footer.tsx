import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <a href="#" className="flex items-center">
              <Image
                src="/logo.jpeg"
                alt="RenovateRight Logo"
                width={150}
                height={60}
              />
            </a>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Phone className="h-4 w-4 text-foreground" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Mail className="h-4 w-4 text-foreground" />
                <span>contact@renovateright.com</span>
              </li>
              <li className="flex items-center gap-2 transition-colors hover:text-foreground">
                <MapPin className="h-4 w-4 text-foreground" />
                <span>123 Remodel St, Design City, USA</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">Service Areas</h3>
            <p className="mt-2 text-muted-foreground">
              Proudly serving Design City, Builder Town, and the greater Metro Architect region.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RenovateRight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
