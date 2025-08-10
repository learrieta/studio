import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Soluciones Integrales | Remodelaciones de Calidad en Lima',
  description: 'Servicios de remodelación de casas de alta calidad en Lima. Nos especializamos en renovaciones de cocinas, baños y casas completas para crear el hogar de tus sueños.',
  keywords: 'remodelación de casas, renovación de cocinas, remodelación de baños, contratista general, Lima, servicios de renovación, mejoramiento del hogar',
  openGraph: {
    title: 'Soluciones Integrales | Remodelaciones de Calidad en Lima',
    description: 'Transforma tu espacio con los mejores expertos en remodelación de casas de Lima. Calidad artesanal para renovaciones de cocinas, baños y casas completas.',
    url: 'https://soluciones-integrales.com', // Replace with your actual domain
    siteName: 'Soluciones Integrales',
    images: [
      {
        url: '/logo.jpg', // Path to your OG image
        width: 1200,
        height: 630,
        alt: 'Una cocina hermosamente remodelada por Soluciones Integrales',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soluciones Integrales | Remodelación de Casas de Primer Nivel',
    description: 'Desde cocinas de ensueño hasta baños tipo spa, Soluciones Integrales hace realidad tu visión con servicios expertos de remodelación en Lima.',
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
