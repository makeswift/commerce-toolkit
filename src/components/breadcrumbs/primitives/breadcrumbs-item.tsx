import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BreadcrumbsItemProps = ComponentProps<'li'>;

export function BreadcrumbsItem({ className, children, ...props }: BreadcrumbsItemProps) {
  return (
    <li
      className={cn('inline-flex items-center gap-x-1.5', className)}
      data-slot="breadcrumbs-item"
      {...props}
    >
      {children}
    </li>
  );
}
