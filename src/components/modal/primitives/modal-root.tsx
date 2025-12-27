import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

export type ModalRootProps = ComponentProps<typeof Dialog.Root>;

export function ModalRoot({ children, ...props }: ModalRootProps) {
  return <Dialog.Root {...props}>{children}</Dialog.Root>;
}
