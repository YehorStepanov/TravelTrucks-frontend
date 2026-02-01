import { FilterOptions, Truck } from '@/types/Truck';
import api from './api';

export async function getCampers(filters: FilterOptions) {
  try {
    const { data } = await api.get<{
      totalPages: number;
      page: number;
      campers: Truck[];
    }>(`/campers`, {
      params: {
        location: filters.location,
        features: filters.features,
        form: filters.form,
        page: filters.page,
      },
    });
    return {
      ...data,
      page: Number(data.page),
      totalPages: Number(data.totalPages),
    };
  } catch (err) {
    console.log(err);
    return null;
  }
}

interface getCampersByIdAnswer {
  data: Truck;
  message: string;
  status: number;
}

export async function getCampersById(id: string) {
  try {
    const { data } = await api.get<getCampersByIdAnswer>(`/campers/${id}`);
    return data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
