import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '@/components/button';
import { Modal, type ModalProps } from '@/components/modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Accessible title for the dialog (visually hidden)',
    },
    isOpen: {
      control: 'boolean',
      description: 'Controls open state (stories manage this with local state)',
    },
    setOpen: {
      table: { disable: true },
      description: 'Setter for open state',
    },
    trigger: {
      description: 'Trigger element rendered as Dialog.Trigger (passed via asChild)',
    },
    children: {
      description: 'Dialog content',
    },
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {
    isOpen: false,
    setOpen: () => undefined,
    title: 'Example modal',
    trigger: <Button variant="primary">Open modal</Button>,
    children: null,
  },
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <Modal
        isOpen={open}
        setOpen={setOpen}
        title={args.title}
        trigger={<Button variant="primary">Open modal</Button>}
      >
        <div className="w-[28rem] max-w-full">
          <h2 className="text-lg font-semibold">Welcome</h2>
          <p className="mt-2 text-sm text-contrast-400">
            This is a basic modal. It uses a background overlay and prevents body scroll while open.
          </p>
          <div className="mt-4 flex justify-end gap-2">
            <Button onClick={() => setOpen(false)} variant="secondary">
              Close
            </Button>
            <Button onClick={() => setOpen(false)}>Continue</Button>
          </div>
        </div>
      </Modal>
    );
  },
};
