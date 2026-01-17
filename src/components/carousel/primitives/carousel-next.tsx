'use client';

import type { ComponentProps } from 'react';

import { Button } from '@/components/button';
import { useCarousel } from '@/components/carousel';

export type CarouselNextProps = ComponentProps<'button'>;

export function CarouselNext({ children, className, ...props }: CarouselNextProps) {
  const { canScrollNext, scrollNext } = useCarousel();

  return (
    <Button
      className={className}
      disabled={!canScrollNext}
      onClick={scrollNext}
      shape="circle"
      size="small"
      title="Next"
      type="button"
      variant="ghost"
      {...props}
    >
      {children}
    </Button>
  );
}
