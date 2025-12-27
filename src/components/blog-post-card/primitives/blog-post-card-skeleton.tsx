import type { ComponentProps } from 'react';

import * as SkeletonPrimitive from '@/components/skeleton';
import { cn } from '@/lib';

export type BlogPostCardSkeletonProps = ComponentProps<'div'>;

export function BlogPostCardSkeleton({ className, ...props }: BlogPostCardSkeletonProps) {
  return (
    <div
      className={cn('w-full max-w-md @container', className)}
      data-slot="blog-post-card-skeleton"
      {...props}
    >
      <SkeletonPrimitive.Box
        className={cn(
          'mb-4 w-full rounded-2xl',
          'group-data-[aspect-ratio=5/6]/blog-post-card:aspect-[5/6]',
          'group-data-[aspect-ratio=3/4]/blog-post-card:aspect-[3/4]',
          'group-data-[aspect-ratio=4/3]/blog-post-card:aspect-[4/3]',
          'group-data-[aspect-ratio=1/1]/blog-post-card:aspect-square',
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
