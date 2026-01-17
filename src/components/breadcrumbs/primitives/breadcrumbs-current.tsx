import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BreadcrumbsCurrentProps = ComponentProps<'span'>;

export function BreadcrumbsCurrent({ className, children, ...props }: BreadcrumbsCurrentProps) {
  return (
    <span
      aria-current="page"
      aria-disabled="true"
      className={cn('text-[--breadcrumbs-text-secondary,var(--text-secondary)]', className)}
      data-slot="breadcrumbs-current"
      role="link"
      {...props}
    >
      {children}
    </span>
  );
}
