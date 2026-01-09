import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/lib';

export interface ButtonLoaderIconProps {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}

export function ButtonLoaderIcon({ asChild = false, className, children }: ButtonLoaderIconProps) {
  if (asChild) {
    return (
      <Slot className={cn('animate-spin', className)} data-slot="button-loader-icon">
        {children}
      </Slot>
    );
  }

  return <Loader2 className={cn('animate-spin', className)} data-slot="button-loader-icon" />;
}
