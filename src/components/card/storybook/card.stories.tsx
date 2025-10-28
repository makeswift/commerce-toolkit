import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, Package, Shield, Truck } from 'lucide-react';

import { Card, type CardProps } from '@/components/card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'text',
      description: 'The HTML element to render as',
    },
  },
};

export default meta;
type Story = StoryObj<CardProps<'div'>>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold">Default Card</h3>
        <p className="mt-2 text-sm text-contrast-400">
          This is a simple card component with some basic content.
        </p>
      </div>
    ),
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
};

export const WithLink: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold">Clickable Card</h3>
        <p className="mt-2 text-sm text-contrast-400">
          This card is clickable and will navigate to a new page.
        </p>
        <div className="mt-4 flex items-center gap-2 font-semibold text-foreground">
          <span>Learn more</span>
          <ArrowRight
            className="transition-transform duration-100 ease-linear group-hover/card:translate-x-1"
            size={20}
          />
        </div>
      </div>
    ),
    link: {
      href: '#',
      ariaLabel: 'Learn more about this card',
    },
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
};

export const WithIcon: Story = {
  args: {
    children: (
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-highlight">
          <Package className="text-primary-shadow" size={24} />
        </div>
        <h3 className="text-lg font-semibold">Free Shipping</h3>
        <p className="mt-2 text-sm text-contrast-400">
          Get free shipping on all orders over $50. No code required.
        </p>
      </div>
    ),
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
};

export const FeatureCard: Story = {
  args: {
    children: (
      <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-highlight">
          <Shield className="text-primary-shadow" size={24} />
        </div>
        <h3 className="text-lg font-semibold">Secure Checkout</h3>
        <p className="mt-2 text-sm text-contrast-400">
          Your payment information is encrypted and secure. We never store your credit card details.
        </p>
        <div className="mt-4 flex items-center gap-2 font-semibold text-foreground">
          <span>View security policy</span>
          <ArrowRight
            className="transition-transform duration-100 ease-linear group-hover/card:translate-x-1"
            size={18}
          />
        </div>
      </div>
    ),
    link: {
      href: '#',
      ariaLabel: 'View our security policy',
    },
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
};

export const AccountSignup: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold">Sign up for a personal account</h3>
        <p className="mt-4 text-sm text-contrast-400">
          Create a personal account to enjoy faster checkout, save shipping addresses, track your
          orders, and build your shopping lists.
        </p>
        <div className="mt-6 flex items-center gap-3 font-semibold">
          <span>Create personal account</span>
          <ArrowRight
            className="transition-transform duration-100 ease-linear group-hover/card:translate-x-1"
            size={20}
          />
        </div>
      </div>
    ),
    link: {
      href: '#',
      ariaLabel: 'Sign up for a personal account',
    },
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
};

export const MinimalContent: Story = {
  args: {
    children: (
      <div className="text-center">
        <h3 className="text-base font-semibold">Simple Card</h3>
      </div>
    ),
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
};

export const LongContent: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold">Returns & Exchanges</h3>
        <p className="mt-2 text-sm text-contrast-400">
          We want you to be completely satisfied with your purchase. If for any reason you&apos;re
          not happy with your order, you can return it within 30 days for a full refund. Items must
          be unused and in their original packaging. Some exclusions may apply.
        </p>
        <div className="mt-4 flex items-center gap-2 font-semibold text-foreground">
          <span>Read full policy</span>
          <ArrowRight
            className="transition-transform duration-100 ease-linear group-hover/card:translate-x-1"
            size={18}
          />
        </div>
      </div>
    ),
    link: {
      href: '#',
      ariaLabel: 'Read our full return policy',
    },
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
};

export const AsArticle: Meta<typeof Card> = {
  args: {
    as: 'article' as const,
    children: (
      <div>
        <h3 className="text-lg font-semibold">This is a section element</h3>
        <p className="mt-2 text-sm text-contrast-400">
          Using the &quot;as&quot; prop, you can render this card as any HTML element.
        </p>
      </div>
    ),
  },
  decorators: [(Story) => <div className="w-96">{Story()}</div>],
};

export const FeatureGrid: Story = {
  render: () => (
    <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-highlight">
            <Truck className="text-primary-shadow" size={24} />
          </div>
          <h3 className="text-base font-semibold">Fast Delivery</h3>
          <p className="mt-2 text-sm text-contrast-400">
            Get your order delivered within 2-3 business days.
          </p>
        </div>
      </Card>
      <Card>
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-highlight">
            <Shield className="text-primary-shadow" size={24} />
          </div>
          <h3 className="text-base font-semibold">Secure Payment</h3>
          <p className="mt-2 text-sm text-contrast-400">Your payment info is always protected.</p>
        </div>
      </Card>
      <Card>
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-highlight">
            <Package className="text-primary-shadow" size={24} />
          </div>
          <h3 className="text-base font-semibold">Easy Returns</h3>
          <p className="mt-2 text-sm text-contrast-400">30-day return policy on all items.</p>
        </div>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const InteractiveCards: Story = {
  render: () => (
    <div className="grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
      <Card
        link={{
          href: '#',
          ariaLabel: 'View all products',
        }}
      >
        <div>
          <h3 className="text-lg font-semibold">Shop All Products</h3>
          <p className="mt-2 text-sm text-contrast-400">
            Browse our complete collection of products.
          </p>
          <div className="text-foreshadow mt-4 flex items-center gap-2 font-semibold">
            <span>Browse now</span>
            <ArrowRight
              className="transition-transform duration-100 ease-linear group-hover/card:translate-x-1"
              size={18}
            />
          </div>
        </div>
      </Card>
      <Card
        link={{
          href: '#',
          ariaLabel: 'View sale items',
        }}
      >
        <div>
          <h3 className="text-lg font-semibold">Sale Items</h3>
          <p className="mt-2 text-sm text-contrast-400">Save up to 50% on select products.</p>
          <div className="text-foreshadow mt-4 flex items-center gap-2 font-semibold">
            <span>Shop sale</span>
            <ArrowRight
              className="transition-transform duration-100 ease-linear group-hover/card:translate-x-1"
              size={18}
            />
          </div>
        </div>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
