'use client';

import { X } from 'lucide-react';
import type { ComponentProps } from 'react';

import { useAlert } from '@/components/alert';
import { Button } from '@/components/button';

export type AlertDismissProps = ComponentProps<typeof Button>;

export function AlertDismiss({ ...props }: AlertDismissProps) {
  const { dismiss } = useAlert();

  const { label, onClick } = dismiss;

  return (
    <Button
      aria-label={label}
      data-slot="alert-dismiss"
      onClick={onClick}
      shape="circle"
      size="x-small"
      variant="ghost"
      {...props}
    >
      <X absoluteStrokeWidth size={20} strokeWidth={1} />
    </Button>
  );
}
