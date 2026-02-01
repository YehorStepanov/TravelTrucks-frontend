import { Metadata } from 'next';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import TruckPageClient from './truckPage.client';
import { getCampersById } from '@/lib/api/clientApi';

export const metadata: Metadata = {
  title: 'Щоденник',
  description: 'Проглядайте та редагуйте записи у щоденнику',
};

interface TruckPageProps {
  params: Promise<{ id: string }>;
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
