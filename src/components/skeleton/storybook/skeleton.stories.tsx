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
Composable skeleton loading primitives for building loading states.

## CSS Variables

\`\`\`css
:root {
  --fill-pending: oklch(var(--contrast-100-lch));
}
\`\`\`

## Primitives

- \`Skeleton.Root\` — Container with \`pending\` prop for accessibility
- \`Skeleton.Box\` — Rectangular placeholder (requires size via className)
- \`Skeleton.Text\` — Text placeholder with \`characterCount\` prop
- \`Skeleton.Icon\` — Icon placeholder with \`icon\` prop
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Combine primitives to build custom loading states.',
      },
      source: {
        code: `
<Skeleton.Root pending>
  <Skeleton.Box className="h-40 w-64 rounded" />
  <div className="mt-3 space-y-2">
    <Skeleton.Text characterCount={15} />
    <Skeleton.Text characterCount={10} />
  </div>
</Skeleton.Root>
        `,
      },
    },
  },
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

export const TextVariations: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `characterCount` to set text width. Use `"full"` for 100% width.',
      },
      source: {
        code: `
<Skeleton.Root>
  <Skeleton.Text characterCount={10} />
  <Skeleton.Text characterCount={20} />
  <Skeleton.Text characterCount="full" />
</Skeleton.Root>
        `,
      },
    },
  },
  render: () => (
    <Skeleton.Root className="space-y-2">
      <Skeleton.Text characterCount={10} />
      <Skeleton.Text characterCount={20} />
      <Skeleton.Text characterCount="full" />
    </Skeleton.Root>
  ),
};

export const WithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use `Skeleton.Icon` with an `icon` prop for icon placeholders.',
      },
      source: {
        code: `
import { Image } from 'lucide-react';

<Skeleton.Root>
  <Skeleton.Icon icon={<Image size={48} />} />
</Skeleton.Root>
        `,
      },
    },
  },
  render: () => (
    <Skeleton.Root>
      <Skeleton.Icon icon={<ImageIcon size={48} />} />
    </Skeleton.Root>
  ),
};
