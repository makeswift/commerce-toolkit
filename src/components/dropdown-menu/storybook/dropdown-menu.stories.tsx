import type { Meta, StoryObj } from '@storybook/react-vite';

import { DropdownMenu } from '@/components/dropdown-menu';

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'The alignment of the dropdown menu',
    },
    sideOffset: {
      control: 'number',
      description: 'The offset from the trigger',
    },
    showScrollArea: {
      control: 'boolean',
      description: 'Whether to show a scroll area',
    },
  },
  args: {
    label: 'Menu',
    items: [
      { type: 'item', props: { children: 'Item 1' } },
      { type: 'item', props: { children: 'Item 2' } },
      { type: 'separator' },
      { type: 'item', props: { children: 'Item 3' } },
    ],
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Options',
    items: [
      { type: 'item', props: { children: 'New Tab' } },
      { type: 'item', props: { children: 'New Window' } },
      { type: 'separator' },
      { type: 'item', props: { children: 'Settings' } },
      { type: 'item', props: { children: 'Help' } },
    ],
  },
};

export const WithCheckboxItems: Story = {
  args: {
    label: 'View',
    items: [
      { type: 'checkbox', props: { children: 'Status Bar', checked: true } },
      { type: 'checkbox', props: { children: 'Activity Bar', checked: false } },
      { type: 'checkbox', props: { children: 'Panel', checked: true } },
    ],
  },
};

export const WithGroups: Story = {
  args: {
    label: 'Edit',
    items: [
      {
        type: 'group',
        items: [
          { type: 'item', props: { children: 'Cut' } },
          { type: 'item', props: { children: 'Copy' } },
          { type: 'item', props: { children: 'Paste' } },
        ],
      },
      { type: 'separator' },
      {
        type: 'group',
        items: [
          { type: 'item', props: { children: 'Undo' } },
          { type: 'item', props: { children: 'Redo' } },
        ],
      },
    ],
  },
};

export const WithSubMenu: Story = {
  args: {
    label: 'File',
    items: [
      { type: 'item', props: { children: 'New File' } },
      { type: 'item', props: { children: 'Open File' } },
      { type: 'separator' },
      {
        type: 'sub',
        trigger: { props: { children: 'Recent Files' } },
        content: {
          items: [
            { type: 'item', props: { children: 'document.txt' } },
            { type: 'item', props: { children: 'project.ts' } },
            { type: 'item', props: { children: 'notes.md' } },
          ],
        },
      },
      { type: 'separator' },
      { type: 'item', props: { children: 'Exit' } },
    ],
  },
};
