'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface BreadcrumbsLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function BreadcrumbsLink({ asChild = false, className, ...props }: BreadcrumbsLinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn(
        'group/underline text-[var(--breadcrumbs-primary-text,var(--foreground))]',
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
        className,
      )}
      data-slot="breadcrumbs-link"
      {...props}
    />
  );
}
