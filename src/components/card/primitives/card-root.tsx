import type { ComponentProps, ElementType } from 'react';

import { cn } from '@/lib';

export type CardRootProps<E extends ElementType = 'article'> = Omit<ComponentProps<E>, 'as'> & {
  as?: E;
};

export function CardRoot<T extends ElementType = 'div'>({
  as,
  className,
  children,
}: CardRootProps<T>) {
  const CardRootElement = as ?? 'div';

  return (
    <CardRootElement
      className={cn(
        'group/card relative w-full rounded-2xl border p-6 @container',
        'border-[var(--card-border-color,hsl(var(--contrast-200)))] bg-[var(--card-background,hsl(var(--background)))] has-[a]:hover:bg-[var(--card-hover-background,color-mix(in_oklab,hsl(var(--contrast-100))_50%,transparent))]',
        'transition-colors duration-300 ease-linear',
        className,
      )}
      data-slot="card-root"
    >
      {children}
    </CardRootElement>
  );
}
