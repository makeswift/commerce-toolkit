'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface SwatchRadioGroupImageProps extends ComponentProps<'img'> {
  asChild?: boolean;
}

export function SwatchRadioGroupImage({
  className,
  children,
  asChild = false,
  ...props
}: SwatchRadioGroupImageProps) {
  const Component = asChild ? Slot : 'img';

  return <Component className={cn(className)} data-slot="swatch-radio-group-image" {...props} />;
}
