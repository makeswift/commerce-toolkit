'use client';

import type { ComponentProps } from 'react';

import { Button } from '../../button';
export type AlertButtonProps = ComponentProps<typeof Button>;

export function AlertButton({ children, ...props }: AlertButtonProps) {
  return (
    <Button data-slot="alert-button" size="x-small" variant="ghost" {...props}>
      {children}
    </Button>
  );
}
