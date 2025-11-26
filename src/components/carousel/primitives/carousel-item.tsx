import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CarouselItemProps = ComponentProps<'div'>;

export function CarouselItem({ className, ...props }: CarouselItemProps) {
  return (
    <div
      {...props}
      aria-roledescription="slide"
      className={cn('min-w-0 shrink-0 grow-0 pl-4 @2xl:pl-5', className)}
      role="group"
      data-slot="carousel-item"
    />
  );
}
