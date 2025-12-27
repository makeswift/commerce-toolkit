'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { Banner, type BannerProps } from '@/components/banner';
import * as BannerPrimitive from '@/components/banner/primitives';
import { Button } from '@/components/button';

// Wrapper component to handle banner reset functionality
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
    // Clear localStorage on mount
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
A dismissible banner component for displaying promotional messages, announcements, and notifications at the top of a page.

## CSS Variables

\`\`\`css
:root {
  --banner-focus: var(--foreground);
  --banner-background: var(--brand);
  --banner-text: var(--foreground);
  --banner-close-icon: color-mix(in oklab, var(--foreground) 50%, transparent);
  --banner-close-icon-hover: var(--foreground);
  --banner-close-background: transparent;
  --banner-close-background-hover: color-mix(in oklab, var(--background) 40%, transparent);
  --banner-font-family: var(--font-family-body);
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
      description: 'Unique identifier for localStorage persistence',
    },
    children: {
      control: 'text',
      description: 'The content to display in the banner',
    },
    hideDismiss: {
      control: 'boolean',
      description: 'Whether to hide the dismiss button',
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

export const ShippingPromotion: Story = {
  render: () => (
    <BannerWithReset id="shipping-promo-banner">
      🚚 <strong>Free shipping</strong> on all orders over $50
    </BannerWithReset>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Banners support rich content including emojis and HTML elements like `<strong>`.',
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
            <BannerPrimitive.Dismiss />
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
    <BannerPrimitive.Dismiss />
  </BannerPrimitive.Content>
</BannerPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};
