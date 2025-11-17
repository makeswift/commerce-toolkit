import * as RatingPrimitive from '@/components/rating';

export interface RatingProps {
  showRating?: boolean;
  rating: number;
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
export function Rating({ showRating = true, rating, className }: Readonly<RatingProps>) {
  return (
    <RatingPrimitive.Provider rating={rating} showRating={showRating}>
      <RatingPrimitive.Root className={className}>
        <RatingPrimitive.Stars />
        <RatingPrimitive.Value />
      </RatingPrimitive.Root>
    </RatingPrimitive.Provider>
  );
}
