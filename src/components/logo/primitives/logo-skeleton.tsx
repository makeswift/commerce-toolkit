import type { ComponentProps } from 'react';

import * as SkeletonPrimitive from '@/components/skeleton';
import { cn } from '@/lib';

export type LogoSkeletonProps = ComponentProps<typeof SkeletonPrimitive.Box>;

export function LogoSkeleton({ className, ...props }: LogoSkeletonProps) {
  return (
    <SkeletonPrimitive.Box
      className={cn('h-6 w-16 rounded-md', className)}
      data-slot="logo-skeleton"
      {...props}
    />
  );
}
