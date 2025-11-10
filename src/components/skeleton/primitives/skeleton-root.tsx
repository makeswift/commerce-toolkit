import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SkeletonRootProps = ComponentProps<'div'> & {
  pending?: boolean;
  hideOverflow?: boolean;
};

export function SkeletonRoot({
  className,
  children,
  pending = false,
  hideOverflow = false,
  ...props
}: SkeletonRootProps) {
  return (
    <div
      className={cn('@container', hideOverflow && 'overflow-hidden', className)}
      data-pending={pending ? '' : undefined}
      data-slot="skeleton-root"
      role={pending ? 'status' : undefined}
      {...props}
    >
      {children}
      {pending && <span className="sr-only">Loading...</span>}
    </div>
  );
}
