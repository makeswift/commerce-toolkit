import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CarouselContentProps = ComponentProps<'div'>;

export function CarouselContent({ className, children, ...props }: CarouselContentProps) {
  return (
    <div className={cn('-ml-4 flex @2xl:-ml-5', className)} data-slot="carousel-content" {...props}>
      {children}
    </div>
  );
}
