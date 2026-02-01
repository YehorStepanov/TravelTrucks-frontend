import { Metadata } from 'next';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import TruckPageClient from './truckPage.client';
import { getCampersById } from '@/lib/api/clientApi';

interface TruckPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: TruckPageProps): Promise<Metadata> {
  const truck = await getCampersById(params.id);

  if (!truck) {
    return {
      title: 'Camper not found',
    };
  }

  const { name, description, gallery } = truck;

  return {
    title: name,
    description: description.slice(0, 150),
    openGraph: {
      title: name,
      description,
      images: [
        {
          url: gallery?.[0]?.original || '/img/og-default.jpg',
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: name,
      description,
      images: [gallery?.[0]?.original || '/img/og-default.jpg'],
    },
    alternates: {
      canonical: `/catalog/${params.id}`,
    },
  };
}

export default async function TruckPage({ params }: TruckPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['truck', id],
    queryFn: () => getCampersById(id),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TruckPageClient />
    </HydrationBoundary>
  );
}
