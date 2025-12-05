'use client';

import { createContext, use, useMemo } from 'react';
import type { ComponentProps, ElementType } from 'react';

import { cn } from '@/lib';

interface CategoryCardContext {
  textColorScheme: 'light' | 'dark';
  iconColorScheme: 'light' | 'dark';
  aspectRatio: '5:6' | '3:4' | '1:1';
  textSize: 'small' | 'medium' | 'large' | 'x-large';
  showOverlay: boolean;
}

export const CategoryCardContext = createContext<CategoryCardContext | undefined>(undefined);

export type CategoryCardRootProps<E extends ElementType = 'article'> = Omit<
  ComponentProps<E>,
  'as'
> & {
  as?: E;
  textColorScheme?: 'light' | 'dark';
  iconColorScheme?: 'light' | 'dark';
  aspectRatio?: '5:6' | '3:4' | '1:1';
  textSize?: 'small' | 'medium' | 'large' | 'x-large';
  showOverlay?: boolean;
};

export function CategoryCardRoot<T extends ElementType = 'article'>({
  className,
  children,
  as,
  textColorScheme = 'light',
  iconColorScheme = 'light',
  aspectRatio = '5:6',
  textSize = 'small',
  showOverlay = true,
  ...props
}: CategoryCardRootProps<T>) {
  const CategoryCardRootElement = as ?? 'article';

  const contextValues = useMemo(
    () => ({
      textColorScheme,
      iconColorScheme,
      aspectRatio,
      textSize,
      showOverlay,
    }),
    [textColorScheme, iconColorScheme, aspectRatio, textSize, showOverlay],
  );

  return (
    <CategoryCardContext.Provider value={contextValues}>
      <CategoryCardRootElement
        className={cn(
          'group relative flex w-full max-w-md cursor-pointer flex-col gap-2 rounded-[var(--category-card-border-radius,1rem)] font-[var(--category-card-font-family,var(--font-family-body))] @container',
          {
            small: 'gap-2',
            medium: 'gap-3',
            large: 'gap-4',
            'x-large': 'gap-5',
          }[textSize],
          className,
        )}
        data-slot="category-card-root"
        {...props}
      >
        {children}
      </CategoryCardRootElement>
    </CategoryCardContext.Provider>
  );
}

export function useCategoryCard() {
  const context = use(CategoryCardContext);

  if (context === undefined) {
    throw new Error('useCategoryCard must be used within a CategoryCardRoot');
  }

  return context;
}
