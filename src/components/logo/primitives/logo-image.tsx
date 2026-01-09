import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface LogoImageProps extends ComponentProps<'img'> {
  asChild?: boolean;
}

export function LogoImage({ asChild = false, className, children, ...props }: LogoImageProps) {
  const Component = asChild ? Slot : 'img';

  return (
    <Component
      className={cn('object-contain object-left', className)}
      data-slot="logo-image"
      {...props}
    >
      {children}
    </Component>
  );
}
