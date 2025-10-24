import { clsx } from 'clsx';

import type { ReactNode } from 'react';

export interface SkeletonIconProps {
  className?: string;
  icon: ReactNode;
}

export function SkeletonIcon({ className, icon }: SkeletonIconProps) {
  return (
    <div className={clsx('text-[var(--skeleton,hsl(var(--contrast-300)))] opacity-25', className)}>
      {icon}
    </div>
  );
}
