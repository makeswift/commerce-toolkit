'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { Banner, type BannerProps } from '@/components/banner';
import * as BannerPrimitive from '@/components/banner/primitives';
import { Button } from '@/components/button';

// Wrapper component to handle banner reset functionality for Storybook demos
const BannerWithReset = ({
  id,
  children,
  hideDismiss,
  onDismiss,
}: {
  id: string;
  children: ReactNode;
  hideDismiss?: boolean;
  onDismiss?: () => void;
}) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    localStorage.removeItem(`${id}-hidden-banner`);
  }, [id]);

  const handleReset = () => {
    localStorage.removeItem(`${id}-hidden-banner`);
    setKey((prev) => prev + 1);
  };

  return (
    <div className="pb-4">
      <Banner hideDismiss={hideDismiss ?? false} id={id} key={key} onDismiss={onDismiss}>
        {children}
      </Banner>
      <div className="mt-8 flex justify-center">
        <Button onClick={handleReset} variant="primary">
          Reset Banner
        </Button>
      </div>
    </div>
  );
};

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A dismissible banner component for displaying promotional messages, announcements, and notifications at the top of a page. The banner persists its dismissed state in localStorage.

## CSS Variables

\`\`\`css
:root {
  --banner-text: var(--text-primary);
  --banner-fill: var(--brand);
  --banner-fill-icon: var(--foreground);
  --banner-font: var(--font-body);
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier used for localStorage persistence of dismissed state',
    },
    children: {
      control: 'text',
      description: 'The content to display in the banner',
    },
    hideDismiss: {
      control: 'boolean',
      description: 'Whether to hide the dismiss button',
    },
    onDismiss: {
      description: 'Callback function called when the banner is dismissed',
    },
    dismissIcon: {
      description: 'Configuration for a custom dismiss icon with `asChild` and `children` props',
    },
  },
};

export default meta;
type Story = StoryObj<BannerProps>;

export const Default: Story = {
  render: () => (
    <BannerWithReset id="default-banner">
      Get 15% off and free shipping with discount code &quot;WELCOME&quot;
    </BannerWithReset>
  ),
};

export const WithoutDismiss: Story = {
  render: () => (
    <BannerWithReset hideDismiss id="no-dismiss-banner">
      Important: Our store will be closed on December 25th
    </BannerWithReset>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Set `hideDismiss` to `true` to display a permanent banner that cannot be dismissed by the user.',
      },
    },
  },
};

/**
 * The Banner can be built using composable primitives for full customization.
 * This example shows the component anatomy using the primitive components.
 */
export const ComposableAnatomy: Story = {
  render: () => {
    const [key, setKey] = useState(0);
    const bannerId = 'composable-banner';

    useEffect(() => {
      localStorage.removeItem(`${bannerId}-hidden-banner`);
    }, []);

    const handleReset = () => {
      localStorage.removeItem(`${bannerId}-hidden-banner`);
      setKey((prev) => prev + 1);
    };

    return (
      <div className="pb-4">
        <BannerPrimitive.Root id={bannerId} key={key}>
          <BannerPrimitive.Content>
            <BannerPrimitive.Text>
              ✨ <strong>Summer Sale:</strong> Up to 50% off select items. Shop now!
            </BannerPrimitive.Text>
            <BannerPrimitive.Dismiss>
              <BannerPrimitive.DismissIcon />
            </BannerPrimitive.Dismiss>
          </BannerPrimitive.Content>
        </BannerPrimitive.Root>
        <div className="mt-8 flex justify-center">
          <Button onClick={handleReset} variant="primary">
            Reset Banner
          </Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom banner layouts:

\`\`\`tsx
import * as BannerPrimitive from '@/components/banner/primitives';

<BannerPrimitive.Root id="unique-id">
  <BannerPrimitive.Content>
    <BannerPrimitive.Text>Banner message</BannerPrimitive.Text>
    <BannerPrimitive.Dismiss>
      <BannerPrimitive.DismissIcon />
    </BannerPrimitive.Dismiss>
  </BannerPrimitive.Content>
</BannerPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};
