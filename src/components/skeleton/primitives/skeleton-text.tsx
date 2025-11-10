import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SkeletonTextProps = ComponentProps<'div'> & {
  characterCount?: number | 'full';
};

export function SkeletonText({ characterCount = 10, className, ...props }: SkeletonTextProps) {
  return (
    <div
      className={cn('flex h-[1lh] items-center', className)}
      data-slot="skeleton-text"
      {...props}
    >
      <div
        className={cn(
          `h-[1ex] max-w-full rounded-[inherit] bg-[var(--skeleton,color-mix(in_oklab,hsl(var(--contrast-300))_15%,transparent))]`,
        )}
        style={{ width: characterCount === 'full' ? '100%' : `${characterCount}ch` }}
      />
    </div>
  );
}
