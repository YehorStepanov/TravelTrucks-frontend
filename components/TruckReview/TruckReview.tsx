import { Truck } from '@/types/Truck';
import css from './TruckReview.module.css';
import Review from './Review';

interface TruckReviewProps {
  truck: Truck;
}
export default function TruckReview({ truck }: TruckReviewProps) {
  return (
    <ul className={css.reviewsContainer}>
      {truck.reviews.map((review) => {
        return <Review key={review._id} review={review} />;
      })}
    </ul>
  );
}
