import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Copy,
  Download,
  Edit,
  FileText,
  Mail,
  Printer,
  Save,
  Settings,
  Share2,
  Trash2,
  User,
} from 'lucide-react';

import { Button } from '@/components/button';
import { DropdownMenu, type DropdownMenuProps } from '@/components/dropdown-menu';

const meta: Meta<typeof DropdownMenu> = {
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
      description: 'Whether to show the scroll area',
    },
  },
};

export default meta;
type Story = StoryObj<DropdownMenuProps>;

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
          onClick: () => console.log('Edit clicked'),
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
          onClick: () => console.log('Duplicate clicked'),
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
          onClick: () => console.log('Delete clicked'),
          variant: 'danger',
        },
      },
    ],
  },
};

export const WithCustomTrigger: Story = {
  args: {
    label: 'Account',
    trigger: (
      <Button size="medium" variant="secondary">
        <User size={18} />
        My Account
      </Button>
    ),
    items: [
      {
        type: 'item',
        props: {
          children: (
            <>
              <User size={16} />
              <span>Profile</span>
            </>
          ),
        },
      },
      {
        type: 'item',
        props: {
          children: (
            <>
              <Settings size={16} />
              <span>Settings</span>
            </>
          ),
        },
      },
      {
        type: 'separator',
      },
      {
        type: 'item',
        props: {
          children: 'Sign out',
          variant: 'danger',
        },
      },
    ],
  },
};

export const WithCheckboxItems: Story = {
  args: {
    label: 'View Options',
    trigger: (
      <Button size="small" variant="ghost">
        <Settings size={18} />
      </Button>
    ),
    items: [
      {
        type: 'checkbox',
        props: {
          children: 'Show toolbar',
          checked: true,
          onCheckedChange: (checked) => console.log('Toolbar:', checked),
        },
      },
      {
        type: 'checkbox',
        props: {
          children: 'Show status bar',
          checked: false,
          onCheckedChange: (checked) => console.log('Status bar:', checked),
        },
      },
      {
        type: 'checkbox',
        props: {
          children: 'Show sidebar',
          checked: true,
          onCheckedChange: (checked) => console.log('Sidebar:', checked),
        },
      },
    ],
  },
};

export const WithGroups: Story = {
  args: {
    label: 'File Menu',
    trigger: (
      <Button variant="secondary">
        <FileText size={18} />
        File
      </Button>
    ),
    items: [
      {
        type: 'group',
        items: [
          {
            type: 'item',
            props: {
              children: (
                <>
                  <Save size={16} />
                  <span>Save</span>
                </>
              ),
            },
          },
          {
            type: 'item',
            props: {
              children: (
                <>
                  <Download size={16} />
                  <span>Download</span>
                </>
              ),
            },
          },
        ],
      },
      {
        type: 'separator',
      },
      {
        type: 'group',
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
                  <Share2 size={16} />
                  <span>Share Link</span>
                </>
              ),
            },
          },
        ],
      },
    ],
  },
};

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
            {
              type: 'item',
              props: {
                children: (
                  <>
                    <Share2 size={16} />
                    <span>Social Media</span>
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
              <Download size={16} />
              <span>Download</span>
            </>
          ),
        },
      },
    ],
  },
};

export const ComplexMenu: Story = {
  args: {
    label: 'Document Actions',
    trigger: (
      <Button size="medium" variant="primary">
        <FileText size={18} />
        Actions
      </Button>
    ),
    items: [
      {
        type: 'group',
        items: [
          {
            type: 'item',
            props: {
              children: (
                <>
                  <Edit size={16} />
                  <span>Edit Document</span>
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
                  <span>Make a Copy</span>
                </>
              ),
            },
          },
        ],
      },
      {
        type: 'separator',
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
                    <span>Send via Email</span>
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
        type: 'group',
        items: [
          {
            type: 'item',
            props: {
              children: (
                <>
                  <Download size={16} />
                  <span>Download PDF</span>
                </>
              ),
            },
          },
          {
            type: 'item',
            props: {
              children: (
                <>
                  <Printer size={16} />
                  <span>Print</span>
                </>
              ),
            },
          },
        ],
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
              <span>Delete Document</span>
            </>
          ),
          variant: 'danger',
        },
      },
    ],
  },
};

export const AlignStart: Story = {
  args: {
    label: 'Options',
    align: 'start',
    items: [
      {
        type: 'item',
        props: {
          children: 'Option 1',
        },
      },
      {
        type: 'item',
        props: {
          children: 'Option 2',
        },
      },
      {
        type: 'item',
        props: {
          children: 'Option 3',
        },
      },
    ],
  },
};

export const AlignEnd: Story = {
  args: {
    label: 'Options',
    align: 'end',
    items: [
      {
        type: 'item',
        props: {
          children: 'Option 1',
        },
      },
      {
        type: 'item',
        props: {
          children: 'Option 2',
        },
      },
      {
        type: 'item',
        props: {
          children: 'Option 3',
        },
      },
    ],
  },
};

export const WithScrollArea: Story = {
  args: {
    label: 'Select Item',
    trigger: (
      <Button size="medium" variant="secondary">
        Choose Option
      </Button>
    ),
    showScrollArea: true,
    items: Array.from({ length: 20 }, (_, i) => ({
      type: 'item' as const,
      props: {
        children: `Option ${i + 1}`,
        onClick: () => console.log(`Option ${i + 1} clicked`),
      },
    })),
  },
};
