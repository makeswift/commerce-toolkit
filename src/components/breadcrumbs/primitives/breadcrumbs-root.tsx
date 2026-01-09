import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type BreadcrumbsRootProps = ComponentProps<'nav'>;

export function BreadcrumbsRoot({ className, children, ...props }: BreadcrumbsRootProps) {
  return (
    <nav className={cn(className)} data-slot="breadcrumbs-root" {...props}>
      {children}
    </nav>
  );
}
