'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CategoryCardImageProps = ComponentProps<'img'> & {
  asChild?: boolean;
};

export function CategoryCardImage({
  className,
  children,
  asChild = false,
  ...props
}: CategoryCardImageProps) {
  const Component = asChild ? Slot : 'img';

  return (
    <Component
      className={cn(
        'h-full w-full scale-100 select-none bg-[--fill-pending] object-cover transition-transform duration-500 ease-out',
        // Group hover state
        'group-hover/category-card:scale-110',
        className,
      )}
      data-slot="category-card-image"
      {...props}
    />
  );
}
