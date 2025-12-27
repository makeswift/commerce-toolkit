import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { ComponentProps } from 'react';

import * as SkeletonPrimitive from '@/components/skeleton';
import { cn } from '@/lib';

export type CursorPaginationSkeletonProps = ComponentProps<'div'>;

export function CursorPaginationSkeleton({ className, ...props }: CursorPaginationSkeletonProps) {
  return (
    <div
      className={cn('py-10 text-[var(--cursor-pagination-icon,var(--foreground))]', className)}
      data-slot="cursor-pagination-skeleton"
      {...props}
    >
      <div className="flex items-center justify-center gap-3">
        <SkeletonPrimitive.Icon
          className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full border border-[var(--cursor-pagination-border,var(--contrast-100))]"
          icon={<ArrowLeft absoluteStrokeWidth size={24} strokeWidth={1} />}
        />
        <SkeletonPrimitive.Icon
          className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full border border-[var(--cursor-pagination-border,var(--contrast-100))]"
          icon={<ArrowRight absoluteStrokeWidth size={24} strokeWidth={1} />}
        />
      </div>
    </div>
  );
}
