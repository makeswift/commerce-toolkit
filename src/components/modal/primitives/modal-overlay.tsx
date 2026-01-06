import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ModalOverlayProps = ComponentProps<typeof Dialog.Overlay>;

export function ModalOverlay({ children, className, ...props }: ModalOverlayProps) {
  return (
    <Dialog.Overlay
      className={cn(
        'fixed inset-0 z-30 flex items-center justify-center bg-[var(--modal-overlay-background,color-mix(in_oklab,var(--foreground)_50%,transparent))] @container',
        className,
      )}
      data-slot="modal-overlay"
      {...props}
    >
      {children}
    </Dialog.Overlay>
  );
}
