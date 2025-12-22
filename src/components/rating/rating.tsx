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
 *   --rating-icon: hsl(var(--foreground));
 *   --rating-border: hsl(var(--contrast-100));
 *   --rating-text: hsl(var(--contrast-400));
 * }
 * ```
 */
export function Rating({
  showRating = true,
  showTotalReviews = true,
  rating,
  totalReviews,
  className,
}: Readonly<RatingProps>) {
  return (
    <RatingPrimitive.Root className={className} rating={rating} showRating={showRating}>
      <RatingPrimitive.Stars />
      <RatingPrimitive.Value totalReviews={showTotalReviews ? totalReviews : undefined} />
    </RatingPrimitive.Root>
  );
}
