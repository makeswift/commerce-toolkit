'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Buttons,
  Carousel,
  type CarouselProps,
  Content,
  Item,
  Scrollbar,
} from '@/components/carousel';

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
    <Carousel>
      <Content>
        {images.map((image, index) => (
          <Item className="basis-full md:basis-1/2 lg:basis-1/3" key={index}>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-contrast-100">
              <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
            </div>
          </Item>
        ))}
      </Content>
    </Carousel>
  ),
};

export const WithButtons: Story = {
  render: () => (
    <Carousel>
      <Content className="mb-6">
        {images.map((image, index) => (
          <Item className="basis-full md:basis-1/2 lg:basis-1/3" key={index}>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-contrast-100">
              <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
            </div>
          </Item>
        ))}
      </Content>
      <div className="flex justify-end">
        <Buttons />
      </div>
    </Carousel>
  ),
};

export const WithScrollbar: Story = {
  render: () => (
    <Carousel>
      <Content className="mb-6">
        {images.map((image, index) => (
          <Item className="basis-full md:basis-1/2 lg:basis-1/3" key={index}>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-contrast-100">
              <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
            </div>
          </Item>
        ))}
      </Content>
      <Scrollbar />
    </Carousel>
  ),
};

export const WithButtonsAndScrollbar: Story = {
  render: () => (
    <Carousel>
      <Content className="mb-6">
        {images.map((image, index) => (
          <Item className="basis-full md:basis-1/2 lg:basis-1/3" key={index}>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-contrast-100">
              <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
            </div>
          </Item>
        ))}
      </Content>
      <div className="flex w-full items-center justify-between">
        <Scrollbar />
        <Buttons />
      </div>
    </Carousel>
  ),
};

export const Loop: Story = {
  render: () => (
    <Carousel opts={{ loop: true }}>
      <Content className="mb-6">
        {images.slice(0, 4).map((image, index) => (
          <Item className="basis-full md:basis-1/2" key={index}>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-contrast-100">
              <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
            </div>
          </Item>
        ))}
      </Content>
      <div className="flex w-full items-center justify-between">
        <Scrollbar />
        <Buttons />
      </div>
    </Carousel>
  ),
};

export const SingleItem: Story = {
  render: () => (
    <Carousel>
      <Content className="mb-6">
        {images.map((image, index) => (
          <Item className="basis-full" key={index}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-contrast-100">
              <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
            </div>
          </Item>
        ))}
      </Content>
      <div className="flex w-full items-center justify-between">
        <Scrollbar />
        <Buttons />
      </div>
    </Carousel>
  ),
};

export const FourPerView: Story = {
  render: () => (
    <Carousel>
      <Content className="mb-6">
        {images.map((image, index) => (
          <Item className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4" key={index}>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-contrast-100">
              <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
            </div>
          </Item>
        ))}
      </Content>
      <div className="flex w-full items-center justify-between">
        <Scrollbar />
        <Buttons />
      </div>
    </Carousel>
  ),
};

export const DarkButtons: Story = {
  render: () => (
    <div className="rounded-lg bg-foreground p-6">
      <Carousel>
        <Content className="mb-6">
          {images.map((image, index) => (
            <Item className="basis-full md:basis-1/2 lg:basis-1/3" key={index}>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-contrast-100">
                <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
              </div>
            </Item>
          ))}
        </Content>
        <div className="flex w-full items-center justify-between">
          <Scrollbar colorScheme="dark" />
          <Buttons colorScheme="dark" />
        </div>
      </Carousel>
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const WithCards: Story = {
  render: () => (
    <Carousel>
      <Content className="mb-6">
        {images.map((image, index) => (
          <Item className="basis-full md:basis-1/2 lg:basis-1/3" key={index}>
            <div className="overflow-hidden rounded-lg border border-contrast-200 bg-background p-4">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-contrast-100">
                <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
              </div>
              <h3 className="text-base font-semibold">Product {index + 1}</h3>
              <p className="mt-1 text-sm text-contrast-400">High-quality product description</p>
              <p className="mt-2 text-lg font-bold">${(index + 1) * 25}.00</p>
            </div>
          </Item>
        ))}
      </Content>
      <div className="flex w-full items-center justify-between">
        <Scrollbar />
        <Buttons />
      </div>
    </Carousel>
  ),
};

export const AlignStart: Story = {
  render: () => (
    <Carousel opts={{ align: 'start' }}>
      <Content className="mb-6">
        {images.map((image, index) => (
          <Item className="basis-full md:basis-1/2 lg:basis-1/3" key={index}>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-contrast-100">
              <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
            </div>
          </Item>
        ))}
      </Content>
      <div className="flex w-full items-center justify-between">
        <Scrollbar />
        <Buttons />
      </div>
    </Carousel>
  ),
};

export const TestimonialCarousel: Story = {
  render: () => (
    <Carousel opts={{ loop: true }}>
      <Content className="mb-6">
        {[
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
          <Item className="basis-full" key={index}>
            <div className="rounded-lg border border-contrast-200 bg-background p-8 text-center">
              <p className="text-lg italic text-contrast-400">&quot;{testimonial.text}&quot;</p>
              <p className="mt-4 font-semibold">{testimonial.author}</p>
              <p className="text-sm text-contrast-400">{testimonial.role}</p>
            </div>
          </Item>
        ))}
      </Content>
      <div className="flex w-full items-center justify-center gap-6">
        <Buttons />
        <Scrollbar />
      </div>
    </Carousel>
  ),
};
