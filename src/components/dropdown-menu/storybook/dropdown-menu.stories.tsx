import type { Meta, StoryObj } from '@storybook/react-vite';
import { Copy, Edit, Mail, MoreVerticalIcon, Share2, Trash2 } from 'lucide-react';

import { Button } from '@/components/button';
import { DropdownMenu, type DropdownMenuProps } from '@/components/dropdown-menu';
import * as DropdownMenuPrimitive from '@/components/dropdown-menu/primitives';

const noop = () => {
  // no-op for storybook
};

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A dropdown menu component for displaying a list of actions or options. Built on Radix UI primitives with support for items, checkboxes, submenus, and groups.

## CSS Variables

\`\`\`css
:root {
  --dropdown-menu-background: var(--background);
  --dropdown-menu-border: var(--contrast-100);
  --dropdown-menu-focus: var(--brand);
  --dropdown-menu-item-focus: var(--brand);
  --dropdown-menu-item-text: var(--contrast-400);
  --dropdown-menu-item-text-hover: var(--foreground);
  --dropdown-menu-item-danger-text: var(--error);
  --dropdown-menu-item-danger-text-hover: color-mix(in oklab, var(--error), black 75%);
  --dropdown-menu-item-background: transparent;
  --dropdown-menu-item-background-hover: var(--contrast-100);
  --dropdown-menu-item-danger-background: var(--error);
  --dropdown-menu-item-danger-background-hover: color-mix(in oklab, var(--error), white 75%);
  --dropdown-menu-item-font-family: var(--font-family-body);
  --dropdown-menu-seperator: var(--contrast-200);
}
\`\`\`

## Usage

### High-Level Component

The \`DropdownMenu\` component uses a data-driven \`items\` array:

\`\`\`tsx
import { DropdownMenu } from '@/components/dropdown-menu';

<DropdownMenu
  label="Actions"
  items={[
    { type: 'item', props: { children: 'Edit', onClick: handleEdit } },
    { type: 'item', props: { children: 'Duplicate', onClick: handleDuplicate } },
    { type: 'separator' },
    { type: 'item', props: { children: 'Delete', variant: 'danger' } },
  ]}
/>
\`\`\`

### Item Types

- \`{ type: 'item', props: { ... } }\` - Standard menu item
- \`{ type: 'checkbox', props: { checked, onCheckedChange, ... } }\` - Checkbox item
- \`{ type: 'separator' }\` - Visual separator
- \`{ type: 'group', items: [...] }\` - Group of related items
- \`{ type: 'sub', trigger: { props }, content: { items } }\` - Submenu

### Custom Trigger

Pass a custom \`trigger\` element. Default is an ellipsis icon button:

\`\`\`tsx
<DropdownMenu
  label="Account"
  trigger={<Button>Open Menu</Button>}
  items={[...]}
/>
\`\`\`

### Custom Trigger Icon

Customize the default trigger icon using the \`triggerIcon\` prop with \`asChild\`:

\`\`\`tsx
<DropdownMenu
  label="Actions"
  triggerIcon={{
    asChild: true,
    children: <MoreVerticalIcon size={20} />,
  }}
  items={[...]}
/>
\`\`\`

The \`TriggerIcon\` primitive is also available for composable usage:

\`\`\`tsx
<DropdownMenuPrimitive.TriggerIcon asChild>
  <MyCustomIcon />
</DropdownMenuPrimitive.TriggerIcon>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as DropdownMenu from '@/components/dropdown-menu';
import { Button } from '@/components/button';

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild>
    <Button>Open</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content>
      <DropdownMenu.ScrollArea>
        <DropdownMenu.Label>Actions</DropdownMenu.Label>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item variant="danger">Delete</DropdownMenu.Item>
      </DropdownMenu.ScrollArea>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Accessible label for the menu',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment of the dropdown relative to the trigger',
    },
    sideOffset: {
      control: 'number',
      description: 'Offset from the trigger in pixels',
    },
    showScrollArea: {
      control: 'boolean',
      description: 'Whether to enable scroll area for long menus',
    },
    trigger: {
      control: false,
      description: 'Custom trigger element (default: ellipsis icon button)',
    },
    triggerIcon: {
      control: false,
      description: 'Custom trigger icon with asChild support',
    },
    items: {
      control: false,
      description: 'Array of menu items (item, checkbox, separator, group, sub)',
    },
  },
};

export default meta;
type Story = StoryObj<DropdownMenuProps>;

// Default dropdown menu
export const Default: Story = {
  args: {
    label: 'Actions',
    items: [
      {
        type: 'item',
        props: {
          children: (
            <>
              <Edit size={16} />
              <span>Edit</span>
            </>
          ),
          onClick: noop,
        },
      },
      {
        type: 'item',
        props: {
          children: (
            <>
              <Copy size={16} />
              <span>Duplicate</span>
            </>
          ),
          onClick: noop,
        },
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        props: {
          children: (
            <>
              <Trash2 size={16} />
              <span>Delete</span>
            </>
          ),
          onClick: noop,
          variant: 'danger',
        },
      },
    ],
  },
};

// With submenu
export const WithSubmenu: Story = {
  args: {
    label: 'More Options',
    items: [
      {
        type: 'item',
        props: {
          children: (
            <>
              <Edit size={16} />
              <span>Edit</span>
            </>
          ),
        },
      },
      {
        type: 'sub',
        trigger: {
          props: {
            children: (
              <>
                <Share2 size={16} />
                <span>Share</span>
              </>
            ),
          },
        },
        content: {
          items: [
            {
              type: 'item',
              props: {
                children: (
                  <>
                    <Mail size={16} />
                    <span>Email</span>
                  </>
                ),
              },
            },
            {
              type: 'item',
              props: {
                children: (
                  <>
                    <Copy size={16} />
                    <span>Copy Link</span>
                  </>
                ),
              },
            },
          ],
        },
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        props: {
          children: (
            <>
              <Trash2 size={16} />
              <span>Delete</span>
            </>
          ),
          variant: 'danger',
        },
      },
    ],
  },
};

// With checkbox items
export const WithCheckboxItems: Story = {
  args: {
    label: 'View Options',
    trigger: <Button size="small">View Options</Button>,
    items: [
      {
        type: 'checkbox',
        props: {
          children: 'Show toolbar',
          checked: true,
          onCheckedChange: noop,
        },
      },
      {
        type: 'checkbox',
        props: {
          children: 'Show status bar',
          checked: false,
          onCheckedChange: noop,
        },
      },
      {
        type: 'checkbox',
        props: {
          children: 'Show sidebar',
          checked: true,
          onCheckedChange: noop,
        },
      },
    ],
  },
};

// Custom trigger icon
export const CustomTriggerIcon: Story = {
  args: {
    label: 'Actions',
    triggerIcon: {
      asChild: true,
      children: <MoreVerticalIcon size={20} />,
    },
    items: [
      {
        type: 'item',
        props: {
          children: (
            <>
              <Edit size={16} />
              <span>Edit</span>
            </>
          ),
          onClick: noop,
        },
      },
      {
        type: 'item',
        props: {
          children: (
            <>
              <Copy size={16} />
              <span>Duplicate</span>
            </>
          ),
          onClick: noop,
        },
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        props: {
          children: (
            <>
              <Trash2 size={16} />
              <span>Delete</span>
            </>
          ),
          onClick: noop,
          variant: 'danger',
        },
      },
    ],
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <Button size="small">Open Menu</Button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content>
          <DropdownMenuPrimitive.ScrollArea>
            <DropdownMenuPrimitive.Label>Actions</DropdownMenuPrimitive.Label>
            <DropdownMenuPrimitive.Item>
              <Edit size={16} />
              <span>Edit</span>
            </DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Item>
              <Copy size={16} />
              <span>Duplicate</span>
            </DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Separator />
            <DropdownMenuPrimitive.Item variant="danger">
              <Trash2 size={16} />
              <span>Delete</span>
            </DropdownMenuPrimitive.Item>
          </DropdownMenuPrimitive.ScrollArea>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  ),
};
