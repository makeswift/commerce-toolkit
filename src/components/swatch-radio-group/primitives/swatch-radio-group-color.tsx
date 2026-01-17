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
        'block size-full rounded-full border [border-color:color-mix(in_oklab,var(--foreground)_10%,transparent)]',
        // Group disabled state
        'group-disabled/swatch-radio-group-item:opacity-20',
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
