import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface BlogPostCardImageProps extends ComponentProps<'img'> {
  asChild?: boolean;
}

export function BlogPostCardImage({
  className,
  asChild = false,
  ...props
}: BlogPostCardImageProps) {
  const Component = asChild ? Slot : 'img';

  return (
    <Component
      className={cn(
        'h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110',
        className,
      )}
      data-slot="blog-post-card-image"
      {...props}
    />
  );
}
