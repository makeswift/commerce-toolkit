'use client';

import { Star as RatingStar, useRating } from '@/components/rating';

export function RatingStars() {
  const { resetStarIndex } = useRating();

  resetStarIndex();

  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <RatingStar key={i} />
      ))}
    </>
  );
}
