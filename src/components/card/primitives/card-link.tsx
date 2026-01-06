import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface CardLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function CardLink({ asChild = false, className, children, ...props }: CardLinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn(
        'absolute inset-0 rounded-2xl',
        'focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--card-focus,var(--primary))]',
        className,
      )}
      data-slot="card-link"
      {...props}
    />
  );
}
