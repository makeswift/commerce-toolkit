import type { ComponentProps } from 'react';

import * as SkeletonPrimitive from '@/components/skeleton';
import { cn } from '@/lib';

export type CardSkeletonProps = ComponentProps<'div'>;

export function CardSkeleton({ className, ...props }: CardSkeletonProps) {
  return (
    <div className={cn('@container', className)} {...props}>
      <SkeletonPrimitive.Box />
    </div>
  );
}
