import { Truck } from '@/types/Truck';
import css from './TruckFeatures.module.css';
import Features from '../Features/Features';
import { vehicleSpecsKeys } from '@/types/featuresConfig';

interface TruckFeaturesProps {
  truck: Truck;
}

export default function TruckFeatures({ truck }: TruckFeaturesProps) {
  return (
    <div className={css.featuresContainer}>
      <Features truck={truck} />
      <h2 className={css.title}>Vehicle details</h2>
      <hr className={css.line} />
      <ul className={css.vehicleList}>
        {vehicleSpecsKeys.map((key) => {
          let value = truck[key];
          switch (value) {
            case 'alcove':
                value = 'Alcove';                
                break;
            case 'panelTruck':
                value = 'Panel truck';                
                break;
            case 'fullyIntegrated':
                value = 'Fully integrated truck';                
                break;
          
            default:
                break;
          }
          if (!value) return null;
          return (
            <li key={key} className={css.vehicleElem}>
              <span className={css.vehicleText}>{key[0].toUpperCase() + key.slice(1)}</span>
              <span className={css.vehicleText}>{value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
