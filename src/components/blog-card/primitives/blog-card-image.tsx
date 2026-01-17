import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface BlogCardImageProps extends ComponentProps<'img'> {
  asChild?: boolean;
}

export function BlogCardImage({ className, asChild = false, ...props }: BlogCardImageProps) {
  const Component = asChild ? Slot : 'img';

  return (
    <Component
      className={cn(
        'h-full w-full object-cover transition-transform duration-500 ease-out group-hover/blog-card:scale-110',
        className,
      )}
      data-slot="blog-card-image"
      {...props}
    />
  );
}
