import type { Meta, StoryObj } from '@storybook/react-vite';
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
A responsive carousel component built on [Embla Carousel](https://www.embla-carousel.com/). Supports customizable navigation, scrollbar, and flexible item layouts.

## CSS Variables

\`\`\`css
:root {
  --carousel-fill-scrollbar: var(--foreground);
}
\`\`\`

## Container Queries

The carousel uses container queries to adjust item spacing at the \`@2xl\` breakpoint (42rem / 672px):

| Element | Below @2xl | @2xl and above |
|---------|------------|----------------|
| Item gap | pl-4 (-ml-4) | pl-5 (-ml-5) |
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
    prevIcon: {
      control: false,
      description: 'Custom previous icon configuration with `asChild` support',
    },
    nextIcon: {
      control: false,
      description: 'Custom next icon configuration with `asChild` support',
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

/**
 * Use the composable primitives to build custom carousel layouts.
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
            <CarouselPrimitive.PrevIcon />
          </CarouselPrimitive.Prev>
          <CarouselPrimitive.Next>
            <CarouselPrimitive.NextIcon />
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

<CarouselPrimitive.Root>
  <CarouselPrimitive.Viewport>
    <CarouselPrimitive.Content>
      <CarouselPrimitive.Item>{/* Your content */}</CarouselPrimitive.Item>
    </CarouselPrimitive.Content>
  </CarouselPrimitive.Viewport>
  <CarouselPrimitive.Controls>
    <CarouselPrimitive.Scrollbar />
    <CarouselPrimitive.Nav>
      <CarouselPrimitive.Prev>
        <CarouselPrimitive.PrevIcon />
      </CarouselPrimitive.Prev>
      <CarouselPrimitive.Next>
        <CarouselPrimitive.NextIcon />
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
