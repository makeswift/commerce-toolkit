'use client';

import { X } from 'lucide-react';
import type { ComponentProps } from 'react';

import { Button } from '@/components/button';

export type AlertCloseButtonProps = ComponentProps<typeof Button>;

export function AlertCloseButton({ ...props }: AlertCloseButtonProps) {
  return (
    <Button data-slot="alert-close-button" shape="circle" size="x-small" variant="ghost" {...props}>
      <X size={20} strokeWidth={1} />
    </Button>
  );
}
