import type { ComponentProps } from 'react';

import * as SkeletonPrimitive from '@/components/skeleton';
import { cn } from '@/lib/utils';

export type BlogPostCardSkeletonProps = ComponentProps<'div'> & {
  aspectRatio?: '5:6' | '3:4' | '4:3' | '1:1';
};

export function BlogPostCardSkeleton({
  className,
  aspectRatio = '4:3',
  ...props
}: BlogPostCardSkeletonProps) {
  return (
    <div className={cn('w-full max-w-md @container', className)} {...props}>
      <SkeletonPrimitive.Box
        className={cn(
          'mb-4 w-full rounded-2xl',
          {
            '5:6': 'aspect-[5/6]',
            '3:4': 'aspect-[3/4]',
            '4:3': 'aspect-[4/3]',
            '1:1': 'aspect-square',
          }[aspectRatio],
        )}
      />
      <SkeletonPrimitive.Text characterCount={25} className="mt-4 rounded text-lg" />
      <div className="mt-1.5">
        <SkeletonPrimitive.Text characterCount="full" className="rounded text-sm" />
        <SkeletonPrimitive.Text characterCount="full" className="rounded text-sm" />
        <SkeletonPrimitive.Text characterCount={15} className="rounded text-sm" />
      </div>
      <SkeletonPrimitive.Text characterCount={10} className="mt-3 rounded text-sm" />
    </div>
  );
}
