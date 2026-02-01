import clsx from 'clsx';
import css from './TruckReview.module.css';

interface ReviewProps {
  review: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
    _id: string;
  };
}

export default function Review({ review }: ReviewProps) {
  const countStars = Math.ceil(review.reviewer_rating);
  const stars = Array.from({ length: 5 }, (_, i) => i < countStars);

  return (
    <li className={css.reviewElem}>
      <div className={css.headerContainer}>
        <div className={css.circle}>
          <p className={css.char}>{review.reviewer_name[0]}</p>
        </div>
        <div className={css.nameRating}>
          <p className={css.name}>{review.reviewer_name}</p>

          {/* Rating */}
          <ul className={css.starsList}>
            {stars.map((isActive, i) => (
              <li key={i} className={css.starsElem}>
                <svg
                  className={clsx(isActive ? css.active : css.disable)}
                  width="16"
                  height="16"
                >
                  <use href="/img/sprite.svg#icon-star" />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={css.comment}>{review.comment}</p>
    </li>
  );
}
