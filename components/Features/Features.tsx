import { Truck } from "@/types/Truck";
import css from "./Features.module.css";
import FeatureElem from "./FeatureElem";
import { FEATURES_CONFIG } from "@/types/featuresConfig";

interface FeaturesProps {
  truck: Truck;
  max?: number; 
}

export default function Features({ truck, max }: FeaturesProps) {
  const features = FEATURES_CONFIG
    .filter((feature) => feature.isEnabled(truck))
    .slice(0, max ?? FEATURES_CONFIG.length);

  return (
    <ul className={css.list}>
      {features.map((feature) => (
        <FeatureElem
          key={feature.label}
          label={feature.label}
          icon={feature.icon}
        />
      ))}
    </ul>
  );
}