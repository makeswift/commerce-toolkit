import { clsx } from 'clsx';
import type { ReactNode } from 'react';

export interface SkeletonRootProps {
  className?: string;
  children?: ReactNode;
  pending?: boolean;
  hideOverflow?: boolean;
}

export function SkeletonRoot({
  className,
  children,
  pending = false,
  hideOverflow = false,
}: SkeletonRootProps) {
  return (
    <div
      className={clsx('@container', hideOverflow && 'overflow-hidden', className)}
      data-pending={pending ? '' : undefined}
      data-slot="skeleton-root"
      role={pending ? 'status' : undefined}
    >
      {children}
      {pending && <span className="sr-only">Loading...</span>}
    </div>
  );
}
