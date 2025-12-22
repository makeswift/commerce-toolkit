import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type CardRadioGroupThumbnailProps = ComponentProps<'div'>;

export function CardRadioGroupThumbnail({
  className,
  children,
  ...props
}: CardRadioGroupThumbnailProps) {
  return (
    <div className={cn('relative aspect-square h-full', className)} {...props}>
      {children}
    </div>
  );
}
