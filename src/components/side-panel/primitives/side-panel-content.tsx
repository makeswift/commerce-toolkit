'use client';

import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type SidePanelContentProps = ComponentProps<typeof Dialog.Content>;

export function SidePanelContent({ children, className, ...props }: SidePanelContentProps) {
  return (
    <Dialog.Content
      className={cn(
        'fixed inset-y-0 right-0 flex w-96 max-w-full flex-col bg-[var(--side-panel-background,var(--background))] font-[var(--side-panel-content-font-family,var(--font-family-body))] transition duration-500 [animation-timing-function:cubic-bezier(0.25,1,0,1)]',
        // Open state
        'data-[state=open]:animate-in data-[state=open]:slide-in-from-right',
        // Closed state
        'data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right',
        className,
      )}
      data-slot="side-panel-content"
      {...props}
    >
      {children}
    </Dialog.Content>
  );
}
