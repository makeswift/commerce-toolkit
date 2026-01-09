import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heart } from 'lucide-react';
import { useState } from 'react';

import { Favorite, type FavoriteProps } from '@/components/favorite';
import * as FavoritePrimitive from '@/components/favorite/primitives';

const meta: Meta<typeof Favorite> = {
  title: 'Components/Favorite',
  component: Favorite,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A toggle button for marking items as favorites. Features an animated heart icon with pressed state.

## CSS Variables

\`\`\`css
:root {
  --favorite-focus: var(--brand);
  --favorite-border: var(--contrast-100);
  --favorite-icon: var(--foreground);
  --favorite-on-background: var(--contrast-100);
  --favorite-off-border: var(--contrast-200);
}
\`\`\`

## Usage

### High-Level Component

The \`Favorite\` component is controlled via \`checked\` and \`setChecked\`:

\`\`\`tsx
import { Favorite } from '@/components/favorite';
import { useState } from 'react';

function Example() {
  const [isFavorite, setIsFavorite] = useState(false);

  return <Favorite checked={isFavorite} setChecked={setIsFavorite} />;
}
\`\`\`

### Custom Icon

Use the \`icon\` prop with \`asChild\` to provide a custom icon:

\`\`\`tsx
import { Favorite } from '@/components/favorite';
import { Heart } from 'lucide-react';

<Favorite
  checked={checked}
  setChecked={setChecked}
  icon={{ asChild: true, children: <Heart size={20} /> }}
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as Favorite from '@/components/favorite';

<Favorite.Root pressed={checked} onPressedChange={setChecked}>
  <Favorite.Heart />
</Favorite.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the favorite is active/checked',
    },
    setChecked: {
      control: false,
      description: 'Callback when the checked state changes',
    },
    icon: {
      control: false,
      description: 'Custom icon configuration with asChild support',
    },
  },
};

export default meta;

type Story = StoryObj<FavoriteProps>;

// Default controlled favorite
export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return <Favorite checked={checked} setChecked={setChecked} />;
  },
};

// With custom icon
export const WithCustomIcon: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <Favorite
        checked={checked}
        icon={{ asChild: true, children: <Heart size={20} /> }}
        setChecked={setChecked}
      />
    );
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <FavoritePrimitive.Root onPressedChange={setChecked} pressed={checked}>
        <FavoritePrimitive.Heart />
      </FavoritePrimitive.Root>
    );
  },
};
