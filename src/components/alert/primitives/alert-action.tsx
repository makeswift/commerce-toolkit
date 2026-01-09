'use client';

import type { ComponentProps } from 'react';

import { useAlert } from '@/components/alert';
import { Button } from '@/components/button';

export type AlertActionProps = ComponentProps<typeof Button>;

export function AlertAction({ children, ...props }: AlertActionProps) {
  const { action } = useAlert();

  if (!action) return null;

  const { label, onClick } = action;

  return (
    <Button data-slot="alert-action" onClick={onClick} size="x-small" variant="ghost" {...props}>
      {label}
    </Button>
  );
}
