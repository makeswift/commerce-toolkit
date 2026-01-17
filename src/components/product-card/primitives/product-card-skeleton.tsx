import { ComponentProps } from 'react';

import * as SkeletonPrimitive from '@/components/skeleton';
import { cn } from '@/lib';

export type ProductCardSkeletonProps = ComponentProps<typeof SkeletonPrimitive.Root>;

export function ProductCardSkeleton({ className, ...props }: ProductCardSkeletonProps) {
  return (
    <SkeletonPrimitive.Root className={cn(className)} data-slot="product-card-skeleton" {...props}>
      <SkeletonPrimitive.Box
        className={cn(
          'rounded-[var(--product-card-radius,1rem)]',
          'group-data-[aspect-ratio=5/6]/product-card:aspect-[5/6]',
          'group-data-[aspect-ratio=3/4]/product-card:aspect-[3/4]',
          'group-data-[aspect-ratio=1/1]/product-card:aspect-square',
        )}
      />
      <div className="mt-2 flex flex-col items-start gap-x-4 gap-y-3 px-1 @xs:mt-3 @xs:flex-row">
        <div className="flex-1 text-sm @[16rem]:text-base">
          <SkeletonPrimitive.Text characterCount={10} className="rounded" />
          <SkeletonPrimitive.Text characterCount={8} className="rounded" />
          <SkeletonPrimitive.Text characterCount={6} className="rounded" />
        </div>
      </div>
    </SkeletonPrimitive.Root>
  );
}
