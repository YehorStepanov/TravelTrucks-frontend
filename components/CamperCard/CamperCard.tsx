import { Truck } from '@/types/Truck';
import css from './CamperCard.module.css';
import Image from 'next/image';
import Features from '../Features/Features';
import Link from 'next/link';
import clsx from 'clsx';
import { useFavoritesStore } from '@/lib/store/favorite';

interface CamperCardProps {
  truck: Truck;
}

export default function CamperCard({ truck }: CamperCardProps) {
  const {
    name,
    price,
    rating,
    location,
    description,
    gallery,
    reviews,
  } = truck;
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const isFavorite = useFavoritesStore((state) => state.isFavorite(truck._id));

  return (
    <div className={css.card}>
      {/* Image */}
      <Image
        src={gallery[0]?.original}
        alt={name}
        width={292}
        height={320}
        className={css.image}
      />

      {/* Content */}
      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.title}>{name}</h2>
          <div className={css.price}>
            €{price.toFixed(2)}
            <svg className={clsx(css.heart, isFavorite && css.active)} width="25" onClick={() => toggleFavorite(truck._id)} height="24">
              <use href="/img/sprite.svg#icon-heart"></use>
            </svg>
          </div>
        </div>

        {/* Rating & location */}
        <div className={css.meta}>
          <div className={css.rating}>
            <svg className={css.favorite} width="16" height="16">
              <use href="/img/sprite.svg#icon-star"></use>
            </svg>
            <span className={css.nextSvg}>
              {rating}({reviews.length} Reviews)
            </span>
          </div>
          <span className={css.location}>
            <svg className="" width="16" height="16">
              <use href="/img/sprite.svg#icon-map"></use>
            </svg>
            <span className={css.nextSvg}>{location}</span>
          </span>
        </div>

        {/* Description */}
        <p className={css.description}>{description.slice(0, 100)}...</p>

        {/* Features */}
        <Features truck={truck} max={4}/>

        {/* Link */}
        <Link className={css.showMore} href={`/catalog/${truck._id}`}>Show more</Link>
      </div>
    </div>
  );
}
