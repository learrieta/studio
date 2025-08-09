import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'RenovateRight | Quality Remodeling',
  description: 'High-quality home remodeling services in Lima. We specialize in kitchen, bath, and whole-house renovations to create the home of your dreams.',
  keywords: 'home remodeling, kitchen renovation, bathroom remodel, general contractor, Lima, renovation services, home improvement',
  openGraph: {
    title: 'RenovateRight | Quality Remodeling in Lima',
    description: 'Transform your space with Lima\'s top-rated home remodeling experts. Quality craftsmanship for kitchen, bath, and whole-house renovations.',
    url: 'https://renovateright.com', // Replace with your actual domain
    siteName: 'RenovateRight',
    images: [
      {
        url: '/logo.jpg', // Path to your OG image
        width: 1200,
        height: 630,
        alt: 'A beautifully remodeled kitchen by RenovateRight',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RenovateRight | Top-Tier Home Remodeling',
    description: 'From dream kitchens to spa-like bathrooms, RenovateRight brings your vision to life with expert remodeling services in Lima.',
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
    <html lang="en">
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
