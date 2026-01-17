import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib';

export type SkeletonIconProps = ComponentProps<'div'> & {
  icon: ReactNode;
};

export function SkeletonIcon({ className, icon, ...props }: SkeletonIconProps) {
  return (
    <div className={cn('text-[--fill-pending]', className)} data-slot="skeleton-icon" {...props}>
      {icon}
    </div>
  );
}
