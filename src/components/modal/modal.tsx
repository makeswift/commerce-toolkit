import type { ReactNode } from 'react';

import * as ModalPrimitive from '@/components/modal';

export interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  trigger: ReactNode;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --modal-background: hsl(var(--background));
 *   --modal-overlay-background: color-mix(in oklab, hsl(var(--foreground)) 50%, transparent);
 * }
 * ```
 */
export function Modal({ className, children, isOpen, setOpen, title, trigger }: ModalProps) {
  return (
    <ModalPrimitive.Root onOpenChange={setOpen} open={isOpen}>
      <ModalPrimitive.Trigger asChild>{trigger}</ModalPrimitive.Trigger>
      <ModalPrimitive.Portal>
        <ModalPrimitive.Overlay>
          <ModalPrimitive.Content className={className} onOpenAutoFocus={(e) => e.preventDefault()}>
            <ModalPrimitive.Title>{title}</ModalPrimitive.Title>
            {children}
          </ModalPrimitive.Content>
        </ModalPrimitive.Overlay>
      </ModalPrimitive.Portal>
    </ModalPrimitive.Root>
  );
}
