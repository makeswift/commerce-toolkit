import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image as ImageIcon } from 'lucide-react';

import * as Skeleton from '@/components/skeleton';

const meta: Meta = {
  title: 'Components/Skeleton',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A set of composable skeleton loading primitives for building loading states. Use these to create placeholder UIs while content is loading.

## CSS Variables

\`\`\`css
:root {
  --skeleton: color-mix(in oklab, var(--contrast-300) 15%, transparent);
}
\`\`\`

## Composable Anatomy

The Skeleton component is composable-only. Combine the primitives to build custom loading states:

\`\`\`tsx
import * as Skeleton from '@/components/skeleton';
import { Image } from 'lucide-react';

<Skeleton.Root pending>
  <Skeleton.Box className="h-40 w-full rounded" />
  <Skeleton.Text characterCount={20} />
  <Skeleton.Text characterCount="full" />
  <Skeleton.Icon icon={<Image size={24} />} />
</Skeleton.Root>
\`\`\`

### Primitives

- \`Skeleton.Root\` - Container with \`pending\` prop for accessibility
- \`Skeleton.Box\` - Generic rectangular placeholder
- \`Skeleton.Text\` - Text placeholder with \`characterCount\` prop
- \`Skeleton.Icon\` - Icon placeholder with \`icon\` prop
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Default composable example
export const Default: Story = {
  render: () => (
    <Skeleton.Root pending>
      <Skeleton.Box className="h-40 w-64 rounded" />
      <div className="mt-3 space-y-2">
        <Skeleton.Text characterCount={15} />
        <Skeleton.Text characterCount={10} />
      </div>
    </Skeleton.Root>
  ),
};

// Text variations
export const TextVariations: Story = {
  render: () => (
    <Skeleton.Root className="space-y-2">
      <Skeleton.Text characterCount={10} />
      <Skeleton.Text characterCount={20} />
      <Skeleton.Text characterCount="full" />
    </Skeleton.Root>
  ),
};

// With icon
export const WithIcon: Story = {
  render: () => (
    <Skeleton.Root>
      <Skeleton.Icon icon={<ImageIcon size={48} />} />
    </Skeleton.Root>
  ),
};
