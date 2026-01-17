import type { ComponentProps } from 'react';

import { Button } from '@/components/button';

export type ChipButtonProps = ComponentProps<typeof Button>;

export function ChipButton({ className, children, ...props }: ChipButtonProps) {
  return (
    <Button
      className={className}
      data-slot="chip-button"
      shape="circle"
      size="2x-small"
      variant="ghost"
      {...props}
    >
      {children}
    </Button>
  );
}
