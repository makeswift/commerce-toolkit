import { clsx } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

import { useCarousel } from '@/components/carousel/primitives/carousel-provider';

export function CarouselContent({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  const { carouselRef } = useCarousel();

  return (
    <div className="w-full" ref={carouselRef}>
      <div {...props} className={clsx('-ml-4 flex @2xl:-ml-5', className)} />
    </div>
  );
}
