import { Truck } from '@/types/Truck';

export type FeatureConfigItem = {
  label: string;
  icon: string;
  isEnabled: (truck: Truck) => boolean;
};
export const vehicleSpecsKeys = [
  'form',
  'length',
  'width',
  'height',
  'tank',
  'consumption',
] as const;

export const FEATURES_CONFIG: FeatureConfigItem[] = [
  {
    label: 'Automatic',
    icon: 'Automatic',
    isEnabled: (truck) => truck.transmission === 'automatic',
  },
  {
    label: 'AC',
    icon: 'AC',
    isEnabled: (truck) => truck.AC,
  },
  {
    label: 'Bathroom',
    icon: 'Bathroom',
    isEnabled: (truck) => truck.bathroom,
  },
  {
    label: 'Kitchen',
    icon: 'Kitchen',
    isEnabled: (truck) => truck.kitchen,
  },
  {
    label: 'TV',
    icon: 'Tv',
    isEnabled: (truck) => truck.TV,
  },
  {
    label: 'Radio',
    icon: 'Radio',
    isEnabled: (truck) => truck.radio,
  },
  {
    label: 'Refrigerator',
    icon: 'Refrigerator',
    isEnabled: (truck) => truck.refrigerator,
  },
  {
    label: 'Microwave',
    icon: 'Microwave',
    isEnabled: (truck) => truck.microwave,
  },
  {
    label: 'Gas',
    icon: 'Gas',
    isEnabled: (truck) => truck.gas,
  },
  {
    label: 'Water',
    icon: 'Water',
    isEnabled: (truck) => truck.water,
  },
];
