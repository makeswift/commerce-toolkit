import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SkeletonBoxProps = ComponentProps<'div'>;

export function SkeletonBox({ className, ...props }: SkeletonBoxProps) {
  return (
    <div className={cn('bg-[--fill-pending]', className)} data-slot="skeleton-box" {...props} />
  );
}
