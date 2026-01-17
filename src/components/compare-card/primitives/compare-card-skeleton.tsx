import type { ComponentProps } from 'react';

import * as ProductCardPrimitive from '@/components/product-card';
import * as SkeletonPrimitive from '@/components/skeleton';
import { cn } from '@/lib';

export type CompareCardSkeletonProps = ComponentProps<'div'>;

export function CompareCardSkeleton({ className, ...props }: CompareCardSkeletonProps) {
  return (
    <div
      className={cn('w-full max-w-md divide-y divide-[--border-subtle] @container', className)}
      data-slot="compare-card-skeleton"
      {...props}
    >
      <div className="mb-2 space-y-4 pb-4">
        <ProductCardPrimitive.Root>
          <ProductCardPrimitive.Skeleton />
        </ProductCardPrimitive.Root>
        <SkeletonPrimitive.Box className="h-12 rounded-full" />
      </div>
      <div className="space-y-4 py-4 text-xs">
        <SkeletonPrimitive.Text characterCount={10} className="rounded" />
        <SkeletonPrimitive.Box className="h-6 w-32 rounded" />
      </div>
      <div className="space-y-4 py-4 text-xs">
        <SkeletonPrimitive.Text characterCount={12} className="rounded" />
        <div className="text-sm">
          <SkeletonPrimitive.Text characterCount="full" className="rounded" />
          <SkeletonPrimitive.Text characterCount={45} className="rounded" />
          <SkeletonPrimitive.Text characterCount={40} className="rounded" />
        </div>
      </div>
    </div>
  );
}
