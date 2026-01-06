import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CategoryCardTitleProps = ComponentProps<'h3'>;

export function CategoryCardTitle({ children, className, ...props }: CategoryCardTitleProps) {
  return (
    <h3
      className={cn(
        'font-semibold leading-tight text-[var(--category-card-light-text,var(--foreground))]',
        // Text size: small
        'group-data-[text-size=small]/category-card:text-lg group-data-[text-size=small]/category-card:tracking-normal',
        'group-data-[text-size=small]/category-card:@xs:text-xl',
        // Text size: medium
        'group-data-[text-size=medium]/category-card:text-xl group-data-[text-size=medium]/category-card:tracking-normal',
        'group-data-[text-size=medium]/category-card:@xs:text-2xl',
        // Text size: large
        'group-data-[text-size=large]/category-card:text-2xl group-data-[text-size=large]/category-card:tracking-tight',
        'group-data-[text-size=large]/category-card:@xs:text-3xl',
        // Text size: x-large
        'group-data-[text-size=x-large]/category-card:text-3xl group-data-[text-size=x-large]/category-card:tracking-tight',
        'group-data-[text-size=x-large]/category-card:@xs:text-4xl',
        className,
      )}
      data-slot="category-card-title"
      {...props}
    >
      {children}
    </h3>
  );
}
