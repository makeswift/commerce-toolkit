import type { ComponentProps, ElementType } from 'react';

import { cn } from '@/lib';

export type CardRootProps<E extends ElementType = 'div'> = Omit<ComponentProps<E>, 'as'> & {
  as?: E;
};

export function CardRoot<T extends ElementType = 'div'>({
  as,
  className,
  children,
  ...props
}: CardRootProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component
      className={cn(
        'group/card relative w-full rounded-2xl border p-6 @container',
        'border-[var(--card-border-color,var(--contrast-200))] bg-[var(--card-background,var(--background))] has-[a]:hover:bg-[var(--card-hover-background,color-mix(in_oklab,var(--contrast-100)_50%,transparent))]',
        // Hover state (when card contains a link)
        'has-[a]:hover:bg-[var(--card-hover-background,color-mix(in_oklab,var(--contrast-100)_50%,transparent))]',
        className,
      )}
      data-slot="card-root"
      {...props}
    >
      {children}
    </Component>
  );
}
