import type { Metadata } from "next";
import 'modern-normalize';
import "./globals.css";
import Header from "@/components/Header/Header";
import { inter } from "./fonts";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";


export const metadata: Metadata = {
  metadataBase: new URL('https://travel-trucks-frontend-seven.vercel.app'), 
  title: {
    default: 'TravelTrucks — Campervan Rental',
    template: '%s | TravelTrucks',
  },
  description:
    'Rent modern campervans across Ukraine. Comfortable motorhomes for road trips, travel and adventure.',
  keywords: [
    'campervan rental',
    'motorhome rent',
    'RV rental',
    'campers Ukraine',
    'TravelTrucks',
  ],
  openGraph: {
    title: 'TravelTrucks — Campervan Rental',
    description:
      'Choose a campervan and start your journey. Comfortable vehicles for unforgettable trips.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TravelTrucks',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TravelTrucks — Campervan Rental',
    description: 'Find and rent campervans for your adventure.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.className}`}>
      <TanStackProvider>
      <body>
        <Header />
        {children}
      </body>
      </TanStackProvider>
    </html>
  );
}
