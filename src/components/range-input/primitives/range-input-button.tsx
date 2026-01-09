import type { ComponentProps } from 'react';

import { Button } from '@/components/button';
import { cn } from '@/lib';

export type RangeInputButtonProps = ComponentProps<typeof Button>;

export function RangeInputButton({ className, children, ...props }: RangeInputButtonProps) {
  return (
    <Button className={cn(className)} data-slot="range-input-button" {...props}>
      {children}
    </Button>
  );
}
