import * as Dialog from '@radix-ui/react-dialog';
import type { ComponentProps } from 'react';

export type SidePanelTriggerProps = ComponentProps<typeof Dialog.Trigger>;

export function SidePanelTrigger({ ...props }: SidePanelTriggerProps) {
  return <Dialog.Trigger data-slot="side-panel-trigger" {...props} />;
}
