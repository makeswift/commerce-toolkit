import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SwatchRadioGroupColorProps = ComponentProps<'span'> & {
  color: string;
};

export function SwatchRadioGroupColor({
  color,
  children,
  className,
  ...props
}: SwatchRadioGroupColorProps) {
  return (
    <span
      className={cn(
        // Base layout
        'block size-full',
        // Borders & Rounded
        'rounded-full border [border-color:var(--swatch-radio-group-light-option-border,color-mix(in_oklab,hsl(var(--foreground))_10%,transparent))]',
        // Group states
        'group-disabled:opacity-20',
        className,
      )}
      data-slot="swatch-radio-group-color"
      style={{ backgroundColor: color }}
      {...props}
    >
      {children}
    </span>
  );
}
