import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib';

export type SkeletonIconProps = ComponentProps<'div'> & {
  icon: ReactNode;
};

export function SkeletonIcon({ className, icon, ...props }: SkeletonIconProps) {
  return (
    <div
      className={cn('text-[var(--skeleton,hsl(var(--contrast-300)))] opacity-25', className)}
      data-slot="skeleton-icon"
      {...props}
    >
      {icon}
    </div>
  );
}
