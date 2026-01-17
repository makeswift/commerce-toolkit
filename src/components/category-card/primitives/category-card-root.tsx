'use client';

import type { ComponentProps, ElementType } from 'react';

import { cn } from '@/lib';

export type CategoryCardRootProps<E extends ElementType = 'article'> = Omit<
  ComponentProps<E>,
  'as'
> & {
  as?: E;
  aspectRatio?: '5/6' | '3/4' | '1/1';
  textSize?: 'small' | 'medium' | 'large' | 'x-large';
  textColor?: 'light' | 'dark';
  iconColor?: 'light' | 'dark';
  showOverlay?: boolean;
};

export function CategoryCardRoot<T extends ElementType = 'article'>({
  className,
  children,
  as,
  aspectRatio = '5/6',
  textSize = 'small',
  textColor = 'dark',
  iconColor = 'dark',
  showOverlay = true,
  ...props
}: CategoryCardRootProps<T>) {
  const CategoryCardRootElement = as ?? 'article';

  return (
    <CategoryCardRootElement
      className={cn(
        'group/category-card relative flex w-full max-w-md cursor-pointer flex-col rounded-[var(--category-card-radius,1rem)] @container [font-family:var(--category-card-font,var(--font-body))]',
        // Text size gap variants
        'data-[text-size=small]:gap-2',
        'data-[text-size=medium]:gap-3',
        'data-[text-size=large]:gap-4',
        'data-[text-size=x-large]:gap-5',
        className,
      )}
      data-aspect-ratio={aspectRatio}
      data-icon-color={iconColor}
      data-show-overlay={showOverlay}
      data-slot="category-card-root"
      data-text-color={textColor}
      data-text-size={textSize}
      {...props}
    >
      {children}
    </CategoryCardRootElement>
  );
}
