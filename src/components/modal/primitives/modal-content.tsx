import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

export type ModalContentProps = ComponentProps<typeof Dialog.Content>;

export function ModalContent({ children, className, ...props }: ModalContentProps) {
  return (
    <Dialog.Content
      className={cn(
        'mx-3 my-10 max-h-[90%] max-w-3xl overflow-y-auto rounded-xl bg-[--modal-fill,var(--background)] px-3 py-5 transition ease-out @sm:px-6 @sm:py-8 @5xl:px-20 @5xl:py-10',
        // Focus styles
        'focus:outline-none',
        // Open styles
        'data-[state=open]:duration-200 data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-16',
        // Closed styles
        'data-[state=closed]:duration-200 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-16',
        className,
      )}
      data-slot="modal-content"
      {...props}
    >
      {children}
    </Dialog.Content>
  );
}
