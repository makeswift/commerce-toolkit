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
A modal dialog component for displaying content that requires user attention. Built on Radix UI Dialog primitives with overlay and focus management.

## CSS Variables

\`\`\`css
:root {
  --modal-background: var(--background);
  --modal-overlay-background: color-mix(in oklab, var(--foreground) 50%, transparent);
}
\`\`\`

## Usage

### High-Level Component

The \`Modal\` component is controlled via \`isOpen\` and \`setOpen\`:

\`\`\`tsx
import { Modal } from '@/components/modal';
import { Button } from '@/components/button';
import { useState } from 'react';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      isOpen={open}
      setOpen={setOpen}
      title="Confirm Action"
      trigger={<Button>Open Modal</Button>}
    >
      <p>Are you sure you want to continue?</p>
      <Button onClick={() => setOpen(false)}>Close</Button>
    </Modal>
  );
}
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Modal from '@/components/modal';
import { Button } from '@/components/button';

<Modal.Root open={open} onOpenChange={setOpen}>
  <Modal.Trigger asChild>
    <Button>Open</Button>
  </Modal.Trigger>
  <Modal.Portal>
    <Modal.Overlay>
      <Modal.Content>
        <Modal.Title>Dialog Title</Modal.Title>
        <p>Your content here.</p>
      </Modal.Content>
    </Modal.Overlay>
  </Modal.Portal>
</Modal.Root>
\`\`\`

## Primitives

| Primitive | Description |
|-----------|-------------|
| \`Modal.Root\` | Container with \`open\` and \`onOpenChange\` props. |
| \`Modal.Trigger\` | Element that opens the modal. Supports \`asChild\`. |
| \`Modal.Portal\` | Renders content in a portal. |
| \`Modal.Overlay\` | Background overlay with animation. |
| \`Modal.Content\` | Modal content container with focus trap. |
| \`Modal.Title\` | Accessible title (visually hidden by default). |
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Accessible title for the dialog (visually hidden)',
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
      description: 'Trigger element that opens the modal',
    },
    children: {
      control: false,
      description: 'Modal content',
    },
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

// Default modal
export const Default: Story = {
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

// Composable anatomy example
export const ComposableAnatomy: Story = {
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
