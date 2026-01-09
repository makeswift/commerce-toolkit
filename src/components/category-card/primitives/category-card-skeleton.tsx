import type { ComponentProps } from 'react';

import * as SkeletonPrimitive from '@/components/skeleton';
import { cn } from '@/lib';

export type CategoryCardSkeletonProps = ComponentProps<'div'>;

export function CategoryCardSkeleton({ className, ...props }: CategoryCardSkeletonProps) {
  return (
    <div className={cn('@container', className)} data-slot="category-card-skeleton" {...props}>
      <SkeletonPrimitive.Box
        className={cn(
          'rounded-[var(--category-card-border-radius,1rem)]',
          // Aspect ratio variants
          'group-data-[aspect-ratio=1/1]/category-card:aspect-square',
          'group-data-[aspect-ratio=3/4]/category-card:aspect-[3/4]',
          'group-data-[aspect-ratio=5/6]/category-card:aspect-[5/6]',
        )}
      />
      <div className="mt-3">
        <SkeletonPrimitive.Text characterCount={10} className="rounded text-lg" />
      </div>
    </div>
  );
}
