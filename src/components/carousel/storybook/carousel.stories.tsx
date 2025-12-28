import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { ComponentType } from 'react';

import { Carousel, type CarouselProps } from '@/components/carousel';
import * as CarouselPrimitive from '@/components/carousel/primitives';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A responsive carousel component built on top of Embla Carousel. Supports customizable navigation, scrollbar, and flexible item layouts.

## CSS Variables

\`\`\`css
:root {
  --carousel-light-scrollbar: hsl(var(--foreground));
  --carousel-dark-scrollbar: hsl(var(--background));
  --carousel-focus: hsl(var(--primary));
  --carousel-light-button: hsl(var(--foreground));
  --carousel-dark-button: hsl(var(--background));
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showScrollbar: {
      control: 'boolean',
      description: 'Whether to show the scrollbar indicator',
    },
    showNav: {
      control: 'boolean',
      description: 'Whether to show the previous/next navigation buttons',
    },
    items: {
      control: false,
      description: 'Array of ReactNode items to display in the carousel',
    },
    opts: {
      control: false,
      description: 'Embla Carousel options for customizing behavior',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className="bg-background px-6 py-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<CarouselProps>;

const products = [
  {
    name: 'Natural Fiber Scrub Brush',
    image: 'https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=900',
    price: '$8.99',
  },
  {
    name: 'Minimal Ceramic Soap Dispenser',
    image: 'https://images.unsplash.com/photo-1597816189341-6ed558ab017e?w=900',
    price: '$18.00',
  },
  {
    name: 'Linen Hand Towel',
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=900',
    price: '$12.00',
  },
  {
    name: 'Amber Glass Spray Bottle',
    image: 'https://images.unsplash.com/photo-1638609927127-aeb9e74c3cfd?w=900',
    price: '$13.00',
  },
  {
    name: 'Bamboo Countertop Brush',
    image: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=900',
    price: '$10.50',
  },
  {
    name: 'Stoneware Soap Tray',
    image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=900',
    price: '$16.00',
  },
];

const productItems = products.map((product) => (
  <div className="w-48 shrink-0" key={product.name}>
    <div className="aspect-square overflow-hidden rounded-lg bg-contrast-100">
      <img alt={product.name} className="h-full w-full object-cover" src={product.image} />
    </div>
    <div className="mt-3">
      <p className="text-sm font-medium text-foreground">{product.name}</p>
      <p className="mt-1 text-sm text-contrast-500">{product.price}</p>
    </div>
  </div>
));

export const Default: Story = {
  args: {
    items: productItems,
    showScrollbar: true,
    showNav: true,
  },
};

export const WithoutScrollbar: Story = {
  args: {
    items: productItems,
    showScrollbar: false,
    showNav: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hide the scrollbar by setting `showScrollbar` to `false`.',
      },
    },
  },
};

export const WithoutNav: Story = {
  args: {
    items: productItems,
    showScrollbar: true,
    showNav: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hide the navigation arrows by setting `showNav` to `false`.',
      },
    },
  },
};

/**
 * The Carousel can be built using composable primitives for full customization.
 * This example shows the component anatomy using the primitive components.
 */
export const ComposableAnatomy: Story = {
  render: () => (
    <CarouselPrimitive.Root>
      <CarouselPrimitive.Viewport>
        <CarouselPrimitive.Content>
          {products.map((product) => (
            <CarouselPrimitive.Item key={product.name}>
              <div className="w-48 shrink-0">
                <div className="aspect-square overflow-hidden rounded-lg bg-contrast-100">
                  <img
                    alt={product.name}
                    className="h-full w-full object-cover"
                    src={product.image}
                  />
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium text-foreground">{product.name}</p>
                  <p className="mt-1 text-sm text-contrast-500">{product.price}</p>
                </div>
              </div>
            </CarouselPrimitive.Item>
          ))}
        </CarouselPrimitive.Content>
      </CarouselPrimitive.Viewport>
      <CarouselPrimitive.Controls>
        <CarouselPrimitive.Scrollbar />
        <CarouselPrimitive.Nav>
          <CarouselPrimitive.Prev>
            <ArrowLeft className="h-6 w-6" strokeWidth={1.5} />
          </CarouselPrimitive.Prev>
          <CarouselPrimitive.Next>
            <ArrowRight className="h-6 w-6" strokeWidth={1.5} />
          </CarouselPrimitive.Next>
        </CarouselPrimitive.Nav>
      </CarouselPrimitive.Controls>
    </CarouselPrimitive.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Use the composable primitives to build custom carousel layouts:

\`\`\`tsx
import * as CarouselPrimitive from '@/components/carousel/primitives';
import { ArrowLeft, ArrowRight } from 'lucide-react';

<CarouselPrimitive.Root>
  <CarouselPrimitive.Viewport>
    <CarouselPrimitive.Content>
      <CarouselPrimitive.Item>
        {/* Your content */}
      </CarouselPrimitive.Item>
    </CarouselPrimitive.Content>
  </CarouselPrimitive.Viewport>
  <CarouselPrimitive.Controls>
    <CarouselPrimitive.Scrollbar />
    <CarouselPrimitive.Nav>
      <CarouselPrimitive.Prev>
        <ArrowLeft />
      </CarouselPrimitive.Prev>
      <CarouselPrimitive.Next>
        <ArrowRight />
      </CarouselPrimitive.Next>
    </CarouselPrimitive.Nav>
  </CarouselPrimitive.Controls>
</CarouselPrimitive.Root>
\`\`\`
        `,
      },
    },
  },
};
