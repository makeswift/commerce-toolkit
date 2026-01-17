'use client';

import type { ComponentProps } from 'react';

import { Button } from '@/components/button';
import { useCarousel } from '@/components/carousel';

export type CarouselPrevProps = ComponentProps<typeof Button>;

export function CarouselPrev({ children, className, ...props }: CarouselPrevProps) {
  const { canScrollPrev, scrollPrev } = useCarousel();

  return (
    <Button
      className={className}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      shape="circle"
      size="small"
      title="Previous"
      type="button"
      variant="ghost"
      {...props}
    >
      {children}
    </Button>
  );
}
