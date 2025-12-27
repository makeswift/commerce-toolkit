import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface CompareDrawerImageProps extends ComponentProps<'img'> {
  asChild?: boolean;
}

export function CompareDrawerImage({
  children,
  className,
  asChild = false,
  ...props
}: CompareDrawerImageProps) {
  const Component = asChild ? Slot : 'img';

  return (
    <Component
      className={cn(
        'size-full object-cover transition-transform duration-500 ease-out',
        // Group hover state
        'group-hover/compare-drawer-link:scale-110',
        className,
      )}
      data-slot="compare-drawer-image"
      {...props}
    />
  );
}
