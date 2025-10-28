import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

export function CarouselItem({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      aria-roledescription="slide"
      className={clsx('min-w-0 shrink-0 grow-0 pl-4 @2xl:pl-5', className)}
      role="group"
    />
  );
}
