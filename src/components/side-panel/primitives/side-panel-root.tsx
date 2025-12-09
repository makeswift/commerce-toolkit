import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

export type SidePanelRootProps = ComponentProps<typeof Dialog.Root>;

export function SidePanelRoot({ ...props }: SidePanelRootProps) {
  return <Dialog.Root data-slot="side-panel-root" {...props} />;
}
