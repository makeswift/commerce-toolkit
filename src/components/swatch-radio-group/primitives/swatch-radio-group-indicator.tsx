import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SwatchRadioGroupIndicatorProps = ComponentProps<'div'>;

export function SwatchRadioGroupIndicator({
  className,
  children,
  ...props
}: SwatchRadioGroupIndicatorProps) {
  return (
    <div
      className={cn(
        'disabled-icon absolute inset-0 hidden place-content-center text-[--swatch-radio-group-icon,var(--form-fill-icon)]',
        className,
      )}
      data-slot="swatch-radio-group-indicator"
      {...props}
    >
      {children}
    </div>
  );
}
