import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

export type SelectPortalProps = ComponentProps<typeof SelectPrimitive.Portal>;

export function SelectPortal({ children, ...props }: SelectPortalProps) {
  return (
    <SelectPrimitive.Portal data-slot="select-portal" {...props}>
      {children}
    </SelectPrimitive.Portal>
  );
}
