import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export interface BlogPostCardImageProps extends ComponentProps<'div'> {
  asChild?: boolean;
}

export function BlogPostCardImage({
  asChild = false,
  className,
  children,
  ...props
}: BlogPostCardImageProps) {
  const imageClassName =
    'h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110';

  const renderImage = () => {
    if (asChild && Boolean(children)) {
      return <Slot className={imageClassName}>{children}</Slot>;
    }

    return children;
  };

  return (
    <div
      className={cn(
        'relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--blog-post-card-image-background,hsl(var(--contrast-100)))]',
        className,
      )}
      {...props}
    >
      {renderImage()}
    </div>
  );
}
