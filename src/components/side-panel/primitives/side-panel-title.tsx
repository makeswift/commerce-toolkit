'use client';

import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SidePanelTitleProps = ComponentProps<typeof Dialog.Title>;

export function SidePanelTitle({ children, className, ...props }: SidePanelTitleProps) {
  return (
    <Dialog.Title
      className={cn(
        'text-2xl font-medium text-[--side-panel-text-primary,var(--text-primary)] [font-family:var(--side-panel-font-title,var(--font-heading))] @lg:text-3xl',
        className,
      )}
      data-slot="side-panel-title"
      {...props}
    >
      {children}
    </Dialog.Title>
  );
}
