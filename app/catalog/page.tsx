import { Metadata } from "next";
import CatalogClient from "./catalogPage.client";

export const metadata: Metadata = {
  title: 'Campervan Catalog',
  description:
    'Browse available campervans. Filter by equipment, vehicle type and location.',
  keywords: ['camper catalog', 'rent campervan', 'RV list'],
  openGraph: {
    title: 'Campervan Catalog — TravelTrucks',
    description: 'Browse and filter available campervans.',
    url: '/catalog',
  },
};

export default function CatalogPage() {
  return <CatalogClient />;
}