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
  --favorite-fill-icon: var(--foreground);
  --favorite-fill: var(--contrast-100);
}
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
      description: 'Custom icon with `asChild` support for rendering custom icons',
    },
  },
};

export default meta;

type Story = StoryObj<FavoriteProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A controlled favorite toggle. Click to see the heart fill animation.',
      },
      source: {
        code: `
const [checked, setChecked] = useState(false);

<Favorite checked={checked} setChecked={setChecked} />
        `,
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false);

    return <Favorite checked={checked} setChecked={setChecked} />;
  },
};

export const WithCustomIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use the `icon` prop with `asChild` to provide a custom icon.',
      },
      source: {
        code: `
const [checked, setChecked] = useState(false);

<Favorite
  checked={checked}
  setChecked={setChecked}
  icon={{ asChild: true, children: <Heart size={20} /> }}
/>
        `,
      },
    },
  },
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

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use primitive components for custom layouts.',
      },
      source: {
        code: `
const [checked, setChecked] = useState(false);

<FavoritePrimitive.Root onPressedChange={setChecked} pressed={checked}>
  <FavoritePrimitive.Heart />
</FavoritePrimitive.Root>
        `,
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <FavoritePrimitive.Root onPressedChange={setChecked} pressed={checked}>
        <FavoritePrimitive.Heart />
      </FavoritePrimitive.Root>
    );
  },
};
