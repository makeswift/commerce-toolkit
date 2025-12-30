import type { ComponentProps } from 'react';

import { Rating } from '@/components/rating';
import { cn } from '@/lib';

export type ProductCardRatingProps = ComponentProps<typeof Rating>;

export function ProductCardRating({ className, ...props }: ProductCardRatingProps) {
  return <Rating className={cn('mt-2', className)} data-slot="product-card-rating" {...props} />;
}
