import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
<<<<<<< HEAD
  title: 'JCTC Soluciones Integrales | Quality Remodeling',
  description: 'High-quality home remodeling services in Lima. We specialize in kitchen, bath, and whole-house renovations to create the home of your dreams.',
  keywords: 'home remodeling, kitchen renovation, bathroom remodel, general contractor, Lima, renovation services, home improvement',
  openGraph: {
    title: 'JCTC Soluciones Integrales | Quality Remodeling in Lima',
    description: 'Transform your space with Lima\'s top-rated home remodeling experts. Quality craftsmanship for kitchen, bath, and whole-house renovations.',
    url: 'https://JCTCSoluciones.com', // Replace with your actual domain
    siteName: 'JCTC Soluciones Integrales',
=======
  title: 'Soluciones Integrales | Remodelaciones de Calidad en Lima',
  description: 'Servicios de remodelación de casas de alta calidad en Lima. Nos especializamos en renovaciones de cocinas, baños y casas completas para crear el hogar de tus sueños.',
  keywords: 'remodelación de casas, renovación de cocinas, remodelación de baños, contratista general, Lima, servicios de renovación, mejoramiento del hogar',
  openGraph: {
    title: 'Soluciones Integrales | Remodelaciones de Calidad en Lima',
    description: 'Transforma tu espacio con los mejores expertos en remodelación de casas de Lima. Calidad artesanal para renovaciones de cocinas, baños y casas completas.',
    url: 'https://soluciones-integrales.com', // Replace with your actual domain
    siteName: 'Soluciones Integrales',
>>>>>>> dc043c0ebcb5c5073c27bc332c3b94709997ae3b
    images: [
      {
        url: '/logo.jpg', // Path to your OG image
        width: 1200,
        height: 630,
<<<<<<< HEAD
        alt: 'A beautifully remodeled kitchen by JCTC Soluciones Integrales',
=======
        alt: 'Una cocina hermosamente remodelada por Soluciones Integrales',
>>>>>>> dc043c0ebcb5c5073c27bc332c3b94709997ae3b
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
<<<<<<< HEAD
    title: 'JCTC Soluciones Integrales | Top-Tier Home Remodeling',
    description: 'From dream kitchens to spa-like bathrooms, JCTC Soluciones Integrales brings your vision to life with expert remodeling services in Lima.',
=======
    title: 'Soluciones Integrales | Remodelación de Casas de Primer Nivel',
    description: 'Desde cocinas de ensueño hasta baños tipo spa, Soluciones Integrales hace realidad tu visión con servicios expertos de remodelación en Lima.',
>>>>>>> dc043c0ebcb5c5073c27bc332c3b94709997ae3b
    images: ['/logo.jpg'], // Path to your Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
