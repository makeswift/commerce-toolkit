import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SwatchRadioGroupThumbnailProps = ComponentProps<'span'>;

export function SwatchRadioGroupThumbnail({
  className,
  children,
  ...props
}: SwatchRadioGroupThumbnailProps) {
  return (
    <span
      className={cn(
        'relative block size-full overflow-hidden rounded-full border border-[var(--swatch-radio-group-light-option-border,color-mix(in_oklab,var(--foreground)_10%,transparent))] bg-clip-padding shadow',
        className,
      )}
      data-slot="swatch-radio-group-thumbnail"
      {...props}
    >
      {children}
    </span>
  );
}
