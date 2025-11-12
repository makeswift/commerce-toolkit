'use client';

import { X } from 'lucide-react';
import type { ComponentProps } from 'react';

import { useAlert } from '@/components/alert';
import { Button } from '@/components/button';

export type AlertCloseButtonProps = ComponentProps<typeof Button>;

export function AlertCloseButton({ ...props }: AlertCloseButtonProps) {
  const { dismiss } = useAlert();

  const { label, onClick } = dismiss;

  return (
    <Button
      aria-label={label}
      data-slot="alert-close-button"
      onClick={onClick}
      shape="circle"
      size="x-small"
      variant="ghost"
      {...props}
    >
      <X size={20} strokeWidth={1} />
    </Button>
  );
}
