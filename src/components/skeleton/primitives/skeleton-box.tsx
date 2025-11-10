import { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SkeletonBoxProps = ComponentProps<'div'>;

export function SkeletonBox({ className, ...props }: SkeletonBoxProps) {
  return (
    <div
      className={cn(
        'bg-[var(--skeleton,color-mix(in_oklab,hsl(var(--contrast-300))_15%,transparent))]',
        className,
      )}
      data-slot="skeleton-box"
      {...props}
    />
  );
}
