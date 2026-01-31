import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[];
  toggleFavorite: (truckId: string) => void;
  isFavorite: (truckId: string) => boolean;
}

export const useFavoritesStore = create(
  persist<FavoritesState>(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (truckId) => {
        const { favorites } = get();
        if (favorites.includes(truckId)) {
          set({ favorites: favorites.filter((id) => id !== truckId) });
        } else {
          set({ favorites: [...favorites, truckId] });
        }
      },
      isFavorite: (truckId) => {
        return get().favorites.includes(truckId);
      },
    }),
    {
      name: 'favorites-storage',
    },
  ),
);
