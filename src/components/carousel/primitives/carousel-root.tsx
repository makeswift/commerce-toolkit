'use client';

import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';
import { KeyboardEvent, useCallback } from 'react';

import { useCarousel } from './carousel-provider';

export interface CarouselRootProps extends ComponentPropsWithoutRef<'div'> {
  hideOverflow?: boolean;
}

export function CarouselRoot({
  children,
  className,
  hideOverflow = true,
  ...props
}: CarouselRootProps) {
  const { scrollPrev, scrollNext } = useCarousel();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  return (
    <div
      {...props}
      aria-roledescription="carousel"
      className={clsx('relative p-1.5 @container', hideOverflow && 'overflow-hidden', className)}
      onKeyDownCapture={handleKeyDown}
      role="region"
    >
      {children}
    </div>
  );
}
