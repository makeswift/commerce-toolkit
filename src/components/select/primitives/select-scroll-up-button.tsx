import * as SelectPrimitive from '@radix-ui/react-select';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SelectScrollUpButtonProps = ComponentProps<typeof SelectPrimitive.ScrollUpButton>;

export function SelectScrollUpButton({ children, className, ...props }: SelectScrollUpButtonProps) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn(
        // Base layout
        'flex w-full cursor-default items-center justify-center',
        // Spacing
        'py-3',
        className,
      )}
      data-slot="select-scroll-up-button"
      {...props}
    >
      {children}
    </SelectPrimitive.ScrollUpButton>
  );
}
