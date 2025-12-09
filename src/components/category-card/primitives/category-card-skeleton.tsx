import type { ComponentProps } from 'react';

import * as SkeletonPrimitive from '@/components/skeleton';
import { cn } from '@/lib';

import { useCategoryCard } from '../primitives';

export type CategoryCardSkeletonProps = ComponentProps<'div'>;

export function CategoryCardSkeleton({ className, ...props }: CategoryCardSkeletonProps) {
  const { aspectRatio } = useCategoryCard();

  return (
    <div className={cn('@container', className)} {...props} data-slot="category-card-skeleton">
      <SkeletonPrimitive.Box
        className={cn(
          'rounded-[var(--category-card-border-radius,1rem)]',
          {
            '5:6': 'aspect-[5/6]',
            '3:4': 'aspect-[3/4]',
            '1:1': 'aspect-square',
          }[aspectRatio],
        )}
      />
      <div className="mt-3">
        <SkeletonPrimitive.Text characterCount={10} className="rounded text-lg" />
      </div>
    </div>
  );
}
