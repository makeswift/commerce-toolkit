import * as RatingPrimitive from '@/components/rating';

export interface RatingProps {
  showRating?: boolean;
  showTotalReviews?: boolean;
  rating: number;
  totalReviews?: number;
  className?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --rating-fill: var(--foreground);
 *   --rating-text: var(--text-secondary);
 * }
 * ```
 */
export function Rating({
  showRating = true,
  showTotalReviews = true,
  rating,
  totalReviews,
  className,
}: RatingProps) {
  return (
    <RatingPrimitive.Root
      className={className}
      rating={rating}
      showRating={showRating}
      showTotalReviews={showTotalReviews}
      totalReviews={totalReviews}
    >
      <RatingPrimitive.Stars />
      <RatingPrimitive.Value>
        <RatingPrimitive.Total />
      </RatingPrimitive.Value>
    </RatingPrimitive.Root>
  );
}
