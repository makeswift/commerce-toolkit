'use client';

import { X } from 'lucide-react';
import type { ComponentProps } from 'react';

import { Button } from '@/components/button';
import { cn } from '@/lib';

export type AlertDismissProps = ComponentProps<typeof Button>;

export function AlertDismiss({ children, className, ...props }: AlertDismissProps) {
  return (
    <Button
      className={cn('shrink-0', className)}
      data-slot="alert-dismiss"
      shape="circle"
      size="x-small"
      variant="ghost"
      {...props}
    >
      <X absoluteStrokeWidth size={20} strokeWidth={1} />
      <span className="sr-only">{children ?? 'Dismiss'}</span>
    </Button>
  );
}
