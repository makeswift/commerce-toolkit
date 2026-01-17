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
        'focus-primary group/underline text-[--breadcrumbs-text-primary,var(--primary-text)]',
        className,
      )}
      data-slot="breadcrumbs-link"
      {...props}
    />
  );
}
