import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface LogoLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function LogoLink({ asChild = false, className, children, ...props }: LogoLinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component className={cn('focus-primary', className)} data-slot="logo-link" {...props}>
      {children}
    </Component>
  );
}
