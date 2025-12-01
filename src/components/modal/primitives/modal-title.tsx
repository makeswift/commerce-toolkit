import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ModalTitleProps = ComponentProps<typeof Dialog.Title>;

export function ModalTitle({ children, className, ...props }: ModalTitleProps) {
  return (
    <Dialog.Title className={cn('sr-only', className)} data-slot="modal-title" {...props}>
      {children}
    </Dialog.Title>
  );
}
