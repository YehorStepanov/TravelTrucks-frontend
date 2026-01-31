import { getCampers } from '@/lib/api/clientApi';
import { FilterOptions, Truck } from '@/types/Truck';
import CamperCard from '../CamperCard/CamperCard';
import { useEffect, useState } from 'react';
import css from "./CampersList.module.css"

interface CampersListProps {
  filters: FilterOptions;
  showMore: ()=>void;
}

export default function CampersList({ filters,showMore }: CampersListProps) {
  const [data, setData] = useState<{totalPages: number ,page: number,campers: Truck[];} | null>(null);

  useEffect(() => {
  async function fetchCampers() {
    const result = await getCampers(filters);

    setData((prev) => {
      if (!result) return prev;
      if (!prev || result.page === 1) {
        return result;
      }
      return {
        ...result,
        campers: [...prev.campers, ...result.campers],
      };
    });
  }

  fetchCampers();
}, [filters]);

  if (!data) {
    return <div className={css.loading}>Loading...</div>;
  }
  const isEnabled = data.totalPages > data.page;

  
  return (
    <div className={css.list}>
      {data?.campers.map((camper: Truck) => (
        <CamperCard key={camper._id} truck={camper} />
      ))}
      {isEnabled && <button className={css.showMore} onClick={showMore}>Show More</button>}
    </div>
  );
}
