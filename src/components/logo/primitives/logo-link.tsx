import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface LogoLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function LogoLink({ asChild = false, className, children, ...props }: LogoLinkProps) {
  const linkClassName = cn(
    'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--logo-focus,hsl(var(--primary)))]',
    className,
  );

  if (asChild) {
    return (
      <Slot className={linkClassName} {...props}>
        {children}
      </Slot>
    );
  }

  return (
    <a className={linkClassName} {...props}>
      {children}
    </a>
  );
}
