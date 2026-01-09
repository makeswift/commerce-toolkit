import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BreadcrumbsListProps = ComponentProps<'ol'>;

export function BreadcrumbsList({ className, children, ...props }: BreadcrumbsListProps) {
  return (
    <ol
      className={cn(
        'flex flex-wrap items-center gap-x-1.5 font-[family-name:var(--breadcrumbs-font-family,var(--font-family-body))] text-sm @xl:text-base',
        className,
      )}
      data-slot="breadcrumbs-list"
      {...props}
    >
      {children}
    </ol>
  );
}
