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
      className={cn('focus-primary absolute inset-0 rounded-2xl', className)}
      data-slot="card-link"
      {...props}
    />
  );
}
