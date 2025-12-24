'use client';

import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface CardRadioGroupImageProps extends ComponentProps<'img'> {
  asChild?: boolean;
}

export function CardRadioGroupImage({
  className,
  children,
  asChild = false,
  ...props
}: CardRadioGroupImageProps) {
  const Component = asChild ? Slot : 'img';

  return <Component className={cn('bg-background object-fill', className)} {...props} />;
}
