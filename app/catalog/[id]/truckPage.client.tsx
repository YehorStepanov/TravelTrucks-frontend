'use client';

import { getCampersById } from '@/lib/api/clientApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import css from './TruckPage.module.css';
import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import TruckFeatures from '@/components/TruckFeatures/TruckFeatures';
import FooterForm from '@/components/FooterForm/FooterForm';
import TruckReview from '@/components/TruckReview/TruckReview';

export default function TruckPageClient() {
  const [whatShow, SetWhatShow] = useState<boolean>(true);

  const { id } = useParams<{ id: string }>();
  const {
    data: truck
  } = useQuery({
    queryKey: ['truck', id],
    queryFn: () => getCampersById(id),
    refetchOnMount: false,
  });
  if (!truck) {
    return <p>Server Error</p>;
  }
  const { name, price, rating, location, description, gallery, reviews } =
    truck;

  return (
    <main className={css.main}>
      {/* Name */}
      <h1 className={css.name}>{name}</h1>

      {/* Rating & location */}
      <div className={css.meta}>
        <div className={css.rating}>
          <svg className={css.star} width="16" height="16">
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

      {/* Price */}
      <p className={css.price}>€{price.toFixed(2)}</p>

      {/* Images */}
      <ul className={css.imageList}>
        {gallery.map((image) => (
          <li className={css.imageElem} key={image._id}>
            <Image
            className={css.image}
              src={image.original}
              width={292}
              height={312}
              alt={'Image of truck'}
            />
          </li>
        ))}
      </ul>

      {/* Description */}
      <p className={css.description}>{description}</p>

      {/* Buttons */}
      <div className={css.buttonContainer}>
        <button
          className={clsx(css.button, whatShow ? css.active : '')}
          type="button"
          onClick={() => {
            SetWhatShow(true);
          }}
        >
          Features
        </button>
        <button
          className={clsx(css.button, whatShow ? '' : css.active)}
          type="button"
          onClick={() => {
            SetWhatShow(false);
          }}
        >
          Reviews
        </button>
      </div>

      {/* Reviews Features Form */}
      <div className={css.footerContainer}>
        {whatShow ? (
          <TruckFeatures truck={truck}/>
        ) : (
          <TruckReview truck={truck}/>
        )}
        <FooterForm />
      </div>
    </main>
  );
}
