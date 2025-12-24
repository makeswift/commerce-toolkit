import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type FieldGroupProps = ComponentProps<'div'>;

export function FieldGroup({ className, children, ...props }: FieldGroupProps) {
  return (
    <div
      className={cn(
        'group/field-group flex w-full flex-col gap-8 @container/field-group',
        // Nested state (inside another field-group)
        '[[data-slot=field-group]_&]:gap-5',
        // Sibling state (following legend or description)
        '[[data-slot=field-description]+&]:mt-5 [[data-slot=field-legend]+&]:mt-5',
        className,
      )}
      data-slot="field-group"
      {...props}
    >
      {children}
    </div>
  );
}
