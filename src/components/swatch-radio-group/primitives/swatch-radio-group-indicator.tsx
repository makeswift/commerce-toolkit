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
        // Base layout
        'disabled-icon absolute inset-0 hidden place-content-center',
        // Colors
        'text-[var(--swatch-radio-group-light-icon,hsl(var(--foreground)))]',
        className,
      )}
      data-slot="swatch-radio-group-indicator"
      {...props}
    >
      {children}
    </div>
  );
}
