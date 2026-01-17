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
        'border-[--border] bg-[--card-fill,var(--background)] has-[a]:hover:bg-[color-mix(in_oklch,var(--card-fill-hover,var(--contrast-100))_50%,transparent)]',
        className,
      )}
      data-slot="card-root"
      {...props}
    >
      {children}
    </Component>
  );
}
