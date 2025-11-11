'use client';

import type { ComponentProps } from 'react';

import { Button } from '@/components/button';

import { useAlert } from './alert-provider';
export type AlertButtonProps = ComponentProps<typeof Button>;

export function AlertButton({ children, ...props }: AlertButtonProps) {
  const { action } = useAlert();

  if (!action) return null;

  const { label, onClick } = action;

  return (
    <Button data-slot="alert-button" onClick={onClick} size="x-small" variant="ghost" {...props}>
      {label}
    </Button>
  );
}
