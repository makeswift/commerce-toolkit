import type { ComponentProps, ReactNode } from 'react';

import { ButtonLink } from '@/components/button-link';
import { cn } from '@/lib';

export interface CompareDrawerSubmitProps extends ComponentProps<typeof ButtonLink> {
  icon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

export function CompareDrawerSubmit({ className, children, ...props }: CompareDrawerSubmitProps) {
  return (
    <ButtonLink className={cn(className)} data-slot="compare-drawer-submit" {...props}>
      {children}
    </ButtonLink>
  );
}
