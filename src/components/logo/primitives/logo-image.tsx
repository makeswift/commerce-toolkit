import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface LogoImageProps extends ComponentProps<'img'> {
  asChild?: boolean;
}

export function LogoImage({ asChild = false, className, children, ...props }: LogoImageProps) {
  const imageClassName = cn('object-contain object-left', className);

  if (asChild && Boolean(children)) {
    return <Slot className={imageClassName}>{children}</Slot>;
  }

  return <img className={imageClassName} {...props} />;
}
