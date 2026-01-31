'use client';
import { useState } from 'react';
import css from './catalogPage.module.css';
import CampersList from '@/components/CampersList/CampersList';
import FiltersSidebar from '@/components/FiltersSidebar/FiltersSidebar';
import { FilterOptions } from '@/types/Truck';

export default function CatalogClient() {
  const [filters, setFilters] = useState<FilterOptions>({
    location: '',
    features: [],
    form: '',
    page: 1,
  });
  function showMore(){
    setFilters({ ...filters,page: (filters.page+1)}
    );
  } 
  return (
    <div className={css.layout}>
      <FiltersSidebar initialValues={filters} onChange={setFilters} />
      <CampersList filters={filters} showMore={showMore}/>
    </div>
  );
}
