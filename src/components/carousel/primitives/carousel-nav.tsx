import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CarouselNavProps = ComponentProps<'div'>;

export function CarouselNav({ className, children, ...props }: CarouselNavProps) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props} data-slot="carousel-nav">
      {children}
    </div>
  );
}
