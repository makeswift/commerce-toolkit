'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Carousel, type CarouselProps } from '@/components/carousel';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
    alt: 'Product 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
    alt: 'Product 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop',
    alt: 'Product 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&h=800&fit=crop',
    alt: 'Product 4',
  },
  {
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
    alt: 'Product 5',
  },
  {
    src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&h=800&fit=crop',
    alt: 'Product 6',
  },
];

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CarouselProps>;

export const Default: Story = {
  render: () => (
    <Carousel
      items={images.map((image, index) => (
        <div
          className="relative aspect-square w-48 overflow-hidden rounded-lg bg-contrast-100"
          key={index}
        >
          <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
        </div>
      ))}
    />
  ),
};

export const Loop: Story = {
  render: () => (
    <Carousel
      opts={{ loop: true }}
      items={images.slice(0, 4).map((image, index) => (
        <div
          className="relative aspect-square w-48 overflow-hidden rounded-lg bg-contrast-100"
          key={index}
        >
          <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
        </div>
      ))}
    />
  ),
};

export const AlignStart: Story = {
  render: () => (
    <Carousel
      opts={{ align: 'start' }}
      items={images.map((image, index) => (
        <div
          className="relative aspect-square w-48 overflow-hidden rounded-lg bg-contrast-100"
          key={index}
        >
          <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
        </div>
      ))}
    />
  ),
};

export const AlignCenter: Story = {
  render: () => (
    <Carousel
      opts={{ align: 'center' }}
      items={images.map((image, index) => (
        <div
          className="relative aspect-square w-48 overflow-hidden rounded-lg bg-contrast-100"
          key={index}
        >
          <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
        </div>
      ))}
    />
  ),
};

export const HideScrollbar: Story = {
  render: () => (
    <Carousel
      showScrollbar={false}
      items={images.map((image, index) => (
        <div
          className="relative aspect-square w-48 overflow-hidden rounded-lg bg-contrast-100"
          key={index}
        >
          <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
        </div>
      ))}
    />
  ),
};

export const HideNav: Story = {
  render: () => (
    <Carousel
      showNav={false}
      items={images.map((image, index) => (
        <div
          className="relative aspect-square w-48 overflow-hidden rounded-lg bg-contrast-100"
          key={index}
        >
          <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
        </div>
      ))}
    />
  ),
};

export const HideAllControls: Story = {
  render: () => (
    <Carousel
      showScrollbar={false}
      showNav={false}
      items={images.map((image, index) => (
        <div
          className="relative aspect-square w-48 overflow-hidden rounded-lg bg-contrast-100"
          key={index}
        >
          <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
        </div>
      ))}
    />
  ),
};

export const DarkColorScheme: Story = {
  render: () => (
    <div className="rounded-lg bg-foreground p-6">
      <Carousel
        colorScheme="dark"
        items={images.map((image, index) => (
          <div
            className="relative aspect-square w-48 overflow-hidden rounded-lg bg-contrast-100"
            key={index}
          >
            <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
          </div>
        ))}
      />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const TestimonialCarousel: Story = {
  render: () => (
    <Carousel
      opts={{ loop: true }}
      items={[
        {
          text: 'Amazing product! Exceeded all my expectations.',
          author: 'Sarah Johnson',
          role: 'Customer',
        },
        {
          text: 'Fast shipping and excellent quality. Highly recommended!',
          author: 'Michael Chen',
          role: 'Verified Buyer',
        },
        {
          text: "Best purchase I've made this year. Will buy again!",
          author: 'Emily Rodriguez',
          role: 'Regular Customer',
        },
      ].map((testimonial, index) => (
        <div
          className="w-64 rounded-lg border border-contrast-200 bg-background p-6 text-center"
          key={index}
        >
          <p className="text-sm italic text-contrast-400">&quot;{testimonial.text}&quot;</p>
          <p className="mt-3 font-semibold">{testimonial.author}</p>
          <p className="text-xs text-contrast-400">{testimonial.role}</p>
        </div>
      ))}
    />
  ),
};
