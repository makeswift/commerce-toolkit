import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FieldItemProps = ComponentProps<'div'> & {
  orientation?: 'vertical' | 'horizontal';
};

export function FieldItem({
  className,
  children,
  orientation = 'vertical',
  ...props
}: FieldItemProps) {
  return (
    <div
      className={cn(
        'group/field-item flex',
        // Vertical orientation (default)
        'data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-2',
        // Horizontal orientation
        'data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:items-center data-[orientation=horizontal]:gap-3',
        className,
      )}
      data-label-orientation={orientation}
      data-orientation={orientation}
      data-slot="field-item"
      {...props}
    >
      {children}
    </div>
  );
}
