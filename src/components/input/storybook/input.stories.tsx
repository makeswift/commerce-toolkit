import type { Meta, StoryObj } from '@storybook/react-vite';
import { DollarSign, Search } from 'lucide-react';

import { Input, type InputProps } from '@/components/input';
import * as InputPrimitive from '@/components/input/primitives';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A text input with support for prepended icons.

## CSS Variables

\`\`\`css
:root {
  --input-fill: var(--form-fill);
  --input-fill-icon: var(--form-fill-icon);
  --input-fill-disabled: var(--form-fill-disabled);
  --input-text: var(--form-text-primary);
  --input-text-placeholder: var(--form-text-placeholder);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the input',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The HTML input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when empty',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    prependIcon: {
      control: false,
      description:
        'Icon configuration object with `asChild` and `children` props. Use `asChild: true` to render a custom icon.',
    },
  },
  args: {
    placeholder: 'Enter text...',
  },
  decorators: [(Story) => <div className="w-64">{Story()}</div>],
};

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const AllSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Three size options are available: `small`, `medium` (default), and `large`.',
      },
      source: {
        code: `
<Input size="small" placeholder="Small input" />
<Input size="medium" placeholder="Medium input" />
<Input size="large" placeholder="Large input" />
        `,
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="Small input" size="small" />
      <Input placeholder="Medium input" size="medium" />
      <Input placeholder="Large input" size="large" />
    </div>
  ),
};

export const WithPrependIcon: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Add a prepended icon using the `prependIcon` prop. Pass `asChild: true` to use a custom icon component.',
      },
      source: {
        code: `
<Input
  placeholder="Search..."
  prependIcon={{ asChild: true, children: <Search /> }}
/>

<Input
  placeholder="0.00"
  prependIcon={{ asChild: true, children: <DollarSign /> }}
  type="number"
/>
        `,
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="Search..." prependIcon={{ asChild: true, children: <Search /> }} />
      <Input
        placeholder="0.00"
        prependIcon={{ asChild: true, children: <DollarSign /> }}
        type="number"
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Cannot edit this',
  },
  parameters: {
    docs: {
      description: {
        story: 'The `disabled` prop prevents user interaction and applies reduced opacity styling.',
      },
    },
  },
};

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Use the primitive components to build custom input layouts.

| Primitive                      | Description                                           |
|--------------------------------|-------------------------------------------------------|
| \`InputPrimitive.Root\`        | Container with border, background, and focus states.  |
| \`InputPrimitive.Prepend\`     | Positioned wrapper for prepend content.               |
| \`InputPrimitive.PrependIcon\` | Icon with \`asChild\` support; defaults to search.    |
| \`InputPrimitive.Field\`       | The actual input element with styling.                |
        `,
      },
      source: {
        code: `
import * as InputPrimitive from '@/components/input/primitives';

<InputPrimitive.Root prepend size="medium">
  <InputPrimitive.Prepend>
    <InputPrimitive.PrependIcon />
  </InputPrimitive.Prepend>
  <InputPrimitive.Field placeholder="Search products..." />
</InputPrimitive.Root>
        `,
      },
    },
  },
  render: () => (
    <InputPrimitive.Root prepend size="medium">
      <InputPrimitive.Prepend>
        <InputPrimitive.PrependIcon />
      </InputPrimitive.Prepend>
      <InputPrimitive.Field placeholder="Search products..." />
    </InputPrimitive.Root>
  ),
};
