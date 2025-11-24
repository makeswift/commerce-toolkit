import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface CardLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function CardLink({ asChild = false, className, children, ...props }: CardLinkProps) {
  const linkClassName = cn(
    'absolute inset-0 rounded-2xl',
    'focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--card-focus,hsl(var(--primary)))]',
    className,
  );

  if (asChild) {
    return (
      <Slot className={linkClassName} data-slot="card-link" {...props}>
        {children}
      </Slot>
    );
  }

  return (
    <a className={linkClassName} data-slot="card-link" {...props}>
      {children}
    </a>
  );
}
