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
A dropdown menu for displaying actions or options. Built on Radix UI with support for items, checkboxes, submenus, and groups.

## CSS Variables

\`\`\`css
:root {
  --dropdown-menu-fill: var(--background);
  --dropdown-menu-font: var(--font-body);
  --dropdown-menu-text: var(--text-secondary);
  --dropdown-menu-fill-hover: var(--contrast-100);
  --dropdown-menu-text-hover: var(--text-primary);
  --dropdown-menu-text-error: var(--error);
  --dropdown-menu-fill-error: var(--error-background);
  --dropdown-menu-text-error-hover: var(--error-foreground);
}
\`\`\`

## Node Types

- \`{ type: 'item', props: { ... } }\` — Standard menu item
- \`{ type: 'checkbox', props: { checked, onCheckedChange, ... } }\` — Checkbox item
- \`{ type: 'separator' }\` — Visual separator
- \`{ type: 'group', items: [...] }\` — Group of related items
- \`{ type: 'sub', trigger: { props }, content: { items } }\` — Submenu
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
      description: 'Dropdown alignment relative to trigger',
    },
    sideOffset: {
      control: 'number',
      description: 'Offset from trigger in pixels',
    },
    showScrollArea: {
      control: 'boolean',
      description: 'Enable scroll area for long menus',
    },
    trigger: {
      control: false,
      description: 'Custom trigger element (default: ellipsis icon)',
    },
    triggerIcon: {
      control: false,
      description: 'Custom trigger icon with `asChild` support',
    },
    nodes: {
      control: false,
      description: 'Array of menu nodes (item, checkbox, separator, group, sub)',
    },
  },
};

export default meta;
type Story = StoryObj<DropdownMenuProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with items and a danger action.',
      },
    },
  },
  args: {
    label: 'Actions',
    nodes: [
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

export const WithSubmenu: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `type: "sub"` for nested menus.',
      },
    },
  },
  args: {
    label: 'More Options',
    nodes: [
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

export const WithCheckboxItems: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `type: "checkbox"` for toggleable options with a custom trigger.',
      },
    },
  },
  args: {
    label: 'View Options',
    trigger: <Button size="small">View Options</Button>,
    nodes: [
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

export const CustomTriggerIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `triggerIcon` with `asChild` to customize the default trigger icon.',
      },
    },
  },
  args: {
    label: 'Actions',
    triggerIcon: {
      asChild: true,
      children: <MoreVerticalIcon size={20} />,
    },
    nodes: [
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

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use primitives to build custom dropdown menus.',
      },
      source: {
        code: `
import * as DropdownMenuPrimitive from '@/components/dropdown-menu/primitives';

<DropdownMenuPrimitive.Root>
  <DropdownMenuPrimitive.Trigger asChild>
    <Button size="small">Open Menu</Button>
  </DropdownMenuPrimitive.Trigger>
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content>
      <DropdownMenuPrimitive.ScrollArea>
        <DropdownMenuPrimitive.Label>Actions</DropdownMenuPrimitive.Label>
        <DropdownMenuPrimitive.Item>Edit</DropdownMenuPrimitive.Item>
        <DropdownMenuPrimitive.Item>Duplicate</DropdownMenuPrimitive.Item>
        <DropdownMenuPrimitive.Separator />
        <DropdownMenuPrimitive.Item variant="danger">Delete</DropdownMenuPrimitive.Item>
      </DropdownMenuPrimitive.ScrollArea>
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
</DropdownMenuPrimitive.Root>
        `,
      },
    },
  },
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
