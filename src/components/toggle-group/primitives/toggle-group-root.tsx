import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ToggleGroupRootProps = ComponentProps<typeof ToggleGroupPrimitive.Root>;

export function ToggleGroupRoot({ children, className, ...props }: ToggleGroupRootProps) {
  return (
    <ToggleGroupPrimitive.Root
      className={cn(
        // Base layout
        'flex flex-wrap gap-2',
        className,
      )}
      data-slot="toggle-group-root"
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Root>
  );
}
