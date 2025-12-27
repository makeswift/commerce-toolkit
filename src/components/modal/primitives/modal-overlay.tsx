import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ModalOverlayProps = ComponentProps<typeof Dialog.Overlay>;

export function ModalOverlay({ children, className, ...props }: ModalOverlayProps) {
  return (
    <Dialog.Overlay
      className={cn(
        'fixed inset-0 z-30 flex items-center justify-center bg-[var(--modal-overlay-background,color-mix(in_oklab,var(--foreground)_50%,transparent))] @container',
        // Open state
        'data-[state=open]:duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0',
        // Closed state
        'data-[state=closed]:duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        className,
      )}
      data-slot="modal-overlay"
      {...props}
    >
      {children}
    </Dialog.Overlay>
  );
}
