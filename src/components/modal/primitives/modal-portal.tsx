import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

export type ModalPortalProps = ComponentProps<typeof Dialog.Portal>;

export function ModalPortal({ children, ...props }: ModalPortalProps) {
  return <Dialog.Portal {...props}>{children}</Dialog.Portal>;
}
