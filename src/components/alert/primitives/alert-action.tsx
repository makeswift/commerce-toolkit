'use client';

import type { ComponentProps } from 'react';

import { Button } from '@/components/button';
import { cn } from '@/lib';

export type AlertActionProps = ComponentProps<typeof Button>;

export function AlertAction({ children, className, ...props }: AlertActionProps) {
  return (
    <Button
      className={cn('shrink-0', className)}
      data-slot="alert-action"
      size="x-small"
      variant="ghost"
      {...props}
    >
      {children}
    </Button>
  );
}
