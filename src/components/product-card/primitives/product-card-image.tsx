import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface ProductCardImageProps extends ComponentProps<'img'> {
  asChild?: boolean;
}

export function ProductCardImage({
  className,
  children,
  asChild = false,
  ...props
}: ProductCardImageProps) {
  const Component = asChild ? Slot : 'img';

  return (
    <Component
      className={cn(
        'h-full w-full scale-100 select-none bg-[var(--product-card-light-background,hsl(var(--contrast-100)))] object-cover transition-transform duration-500 ease-out group-hover:scale-110',
        className,
      )}
      data-slot="product-card-image"
      {...props}
    />
  );
}
