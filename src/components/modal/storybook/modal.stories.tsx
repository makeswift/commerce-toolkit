import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '@/components/button';
import { Modal, type ModalProps } from '@/components/modal';
import * as ModalPrimitive from '@/components/modal/primitives';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A modal dialog for content requiring user attention. Built on Radix UI Dialog with overlay and focus management.

## CSS Variables

\`\`\`css
:root {
  --modal-fill: var(--background);
  --modal-fill-overlay: color-mix(in oklab, var(--foreground) 50%, transparent);
}
\`\`\`

## Container Queries

The modal content adapts its padding based on overlay width.

| Element | Below @sm | @sm – @5xl | @5xl and above |
|---------|-----------|------------|----------------|
| Content | px-3 py-5 | px-6 py-8  | px-20 py-10    |
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Accessible title (visually hidden)',
    },
    isOpen: {
      control: 'boolean',
      description: 'Controlled open state',
    },
    setOpen: {
      control: false,
      description: 'Callback to update open state',
    },
    trigger: {
      control: false,
      description: 'Element that opens the modal',
    },
    children: {
      control: false,
      description: 'Modal content',
    },
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A controlled modal with overlay and focus trap.',
      },
      source: {
        code: `
const [open, setOpen] = useState(false);

<Modal
  isOpen={open}
  setOpen={setOpen}
  title="Example Modal"
  trigger={<Button variant="primary">Open Modal</Button>}
>
  <div>
    <h2>Welcome</h2>
    <p>Modal content here.</p>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </div>
</Modal>
        `,
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Modal
        isOpen={open}
        setOpen={setOpen}
        title="Example Modal"
        trigger={<Button variant="primary">Open Modal</Button>}
      >
        <div>
          <h2 className="text-lg font-semibold">Welcome</h2>
          <p className="mt-2 text-sm text-contrast-400">
            This modal uses a background overlay and prevents body scroll while open.
          </p>
          <div className="mt-4 flex justify-end gap-2">
            <Button onClick={() => setOpen(false)} variant="outline">
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)} variant="primary">
              Continue
            </Button>
          </div>
        </div>
      </Modal>
    );
  },
};

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use primitive components for custom layouts.',
      },
      source: {
        code: `
const [open, setOpen] = useState(false);

<ModalPrimitive.Root open={open} onOpenChange={setOpen}>
  <ModalPrimitive.Trigger asChild>
    <Button>Open Modal</Button>
  </ModalPrimitive.Trigger>
  <ModalPrimitive.Portal>
    <ModalPrimitive.Overlay>
      <ModalPrimitive.Content>
        <ModalPrimitive.Title>Dialog Title</ModalPrimitive.Title>
        <p>Your content here.</p>
      </ModalPrimitive.Content>
    </ModalPrimitive.Overlay>
  </ModalPrimitive.Portal>
</ModalPrimitive.Root>
        `,
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ModalPrimitive.Root onOpenChange={setOpen} open={open}>
        <ModalPrimitive.Trigger asChild>
          <Button variant="primary">Open Modal</Button>
        </ModalPrimitive.Trigger>
        <ModalPrimitive.Portal>
          <ModalPrimitive.Overlay>
            <ModalPrimitive.Content>
              <ModalPrimitive.Title>Composable Modal</ModalPrimitive.Title>
              <div>
                <h2 className="text-lg font-semibold">Custom Layout</h2>
                <p className="mt-2 text-sm text-contrast-400">
                  Using primitives for full control over the modal structure.
                </p>
                <div className="mt-4 flex justify-end">
                  <Button onClick={() => setOpen(false)} variant="primary">
                    Close
                  </Button>
                </div>
              </div>
            </ModalPrimitive.Content>
          </ModalPrimitive.Overlay>
        </ModalPrimitive.Portal>
      </ModalPrimitive.Root>
    );
  },
};
