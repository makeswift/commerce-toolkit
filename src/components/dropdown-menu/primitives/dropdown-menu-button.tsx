import type { ComponentProps } from 'react';

import { Button } from '@/components/button';

export type DropdownMenuButtonProps = ComponentProps<typeof Button>;

export function DropdownMenuButton({ className, children, ...props }: DropdownMenuButtonProps) {
  return (
    <Button className={className} shape="circle" size="small" variant="ghost" {...props}>
      {children}
    </Button>
  );
}
