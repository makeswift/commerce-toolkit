import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CompareDrawerImageProps = ComponentProps<'div'> & {
  asChild?: boolean;
};

export function CompareDrawerImage({
  children,
  className,
  asChild = false,
  ...props
}: CompareDrawerImageProps) {
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
        'relative aspect-square w-12 shrink-0 bg-[var(--compare-drawer-card-image-background,hsl(var(--contrast-100)))]',
        className,
      )}
      data-slot="compare-drawer-image"
      {...props}
    >
      {renderImage()}
    </div>
  );
}
