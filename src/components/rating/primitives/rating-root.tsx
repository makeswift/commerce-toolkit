import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type RatingRootProps = ComponentProps<'div'>;

export function RatingRoot({ children, className, ...props }: RatingRootProps) {
  return (
    <div className={cn('flex items-center', className)} {...props}>
      {children}
    </div>
  );
}
