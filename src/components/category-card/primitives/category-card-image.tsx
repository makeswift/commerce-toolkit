'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { useCategoryCard } from '@/components/category-card';
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
  const { textColorScheme } = useCategoryCard();

  const Component = asChild ? Slot : 'img';

  return (
    <Component
      className={cn(
        'h-full w-full scale-100 select-none object-cover transition-transform duration-500 ease-out group-hover:scale-110',
        {
          light: 'bg-[var(--category-card-light-background,hsl(var(--contrast-100)))]',
          dark: 'bg-[var(--category-card-dark-background,hsl(var(--contrast-500)))]',
        }[textColorScheme],
        className,
      )}
      data-slot="category-card-image"
      {...props}
    />
  );
}
