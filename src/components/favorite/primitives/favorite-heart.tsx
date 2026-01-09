'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps, ReactNode } from 'react';

import { cn } from '@/lib';

export interface FavoriteHeartProps extends Omit<ComponentProps<'svg'>, 'children'> {
  asChild?: boolean;
  children?: ReactNode;
}

export function FavoriteHeart({
  asChild = false,
  className,
  children,
  ...props
}: FavoriteHeartProps) {
  const iconStyles = cn(
    'transform-gpu transition-transform duration-300 ease-out',
    // Active state
    'group-active/favorite:scale-75 group-active/favorite:animate-heart-pulse',
    // Hover state
    'sm:group-hover/favorite:scale-110',
    className,
  );

  if (asChild) {
    return (
      <Slot className={iconStyles} data-slot="favorite-heart">
        {children}
      </Slot>
    );
  }

  return (
    <svg
      className={iconStyles}
      data-slot="favorite-heart"
      fill="none"
      height="21"
      viewBox="0 0 20 21"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Line Heart (visible when off, hidden when on) */}
      <path
        className="transition delay-100 group-data-[state=on]/favorite:-translate-x-px group-data-[state=on]/favorite:-translate-y-px group-data-[state=on]/favorite:scale-110 group-data-[state=on]/favorite:opacity-0"
        d="M17.3666 4.34166C16.941 3.91583 16.4356 3.57803 15.8794 3.34757C15.3232 3.1171 14.727 2.99847 14.1249 2.99847C13.5229 2.99847 12.9267 3.1171 12.3705 3.34757C11.8143 3.57803 11.3089 3.91583 10.8833 4.34166L9.99994 5.225L9.1166 4.34166C8.25686 3.48192 7.0908 2.99892 5.87494 2.99892C4.65908 2.99892 3.49301 3.48192 2.63327 4.34166C1.77353 5.20141 1.29053 6.36747 1.29053 7.58333C1.29053 8.79919 1.77353 9.96525 2.63327 10.825L3.5166 11.7083L9.99994 18.1917L16.4833 11.7083L17.3666 10.825C17.7924 10.3994 18.1302 9.89401 18.3607 9.33779C18.5912 8.78158 18.7098 8.1854 18.7098 7.58333C18.7098 6.98126 18.5912 6.38508 18.3607 5.82887C18.1302 5.27265 17.7924 4.76729 17.3666 4.34166Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner Filler Heart (scales up when on) */}
      <path
        className="origin-center scale-0 transition-transform duration-300 ease-out group-data-[state=on]/favorite:scale-100 group-data-[state=on]/favorite:fill-current"
        d="M17.3666 4.34166C16.941 3.91583 16.4356 3.57803 15.8794 3.34757C15.3232 3.1171 14.727 2.99847 14.1249 2.99847C13.5229 2.99847 12.9267 3.1171 12.3705 3.34757C11.8143 3.57803 11.3089 3.91583 10.8833 4.34166L9.99994 5.225L9.1166 4.34166C8.25686 3.48192 7.0908 2.99892 5.87494 2.99892C4.65908 2.99892 3.49301 3.48192 2.63327 4.34166C1.77353 5.20141 1.29053 6.36747 1.29053 7.58333C1.29053 8.79919 1.77353 9.96525 2.63327 10.825L3.5166 11.7083L9.99994 18.1917L16.4833 11.7083L17.3666 10.825C17.7924 10.3994 18.1302 9.89401 18.3607 9.33779C18.5912 8.78158 18.7098 8.1854 18.7098 7.58333C18.7098 6.98126 18.5912 6.38508 18.3607 5.82887C18.1302 5.27265 17.7924 4.76729 17.3666 4.34166Z"
      />
    </svg>
  );
}
