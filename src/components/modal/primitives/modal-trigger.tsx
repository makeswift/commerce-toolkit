import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

export type ModalTriggerProps = ComponentProps<typeof Dialog.Trigger>;

export function ModalTrigger({ children, ...props }: ModalTriggerProps) {
  return (
    <Dialog.Trigger data-slot="modal-trigger" {...props}>
      {children}
    </Dialog.Trigger>
  );
}
