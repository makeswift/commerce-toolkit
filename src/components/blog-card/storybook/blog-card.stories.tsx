import type { Meta, StoryObj } from '@storybook/react-vite';

import * as BlogCardPrimitive from '@/components/blog-card';
import { BlogCard, type BlogCardProps } from '@/components/blog-card/blog-card';

const meta: Meta<typeof BlogCard> = {
  title: 'Components/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A card component for displaying blog post previews with image, title, content summary, date, and optional author.

## CSS Variables

\`\`\`css
:root {
  --blog-card-text-primary: var(--text-primary);
  --blog-card-text-secondary: var(--text-secondary);
  --blog-card-font-title: var(--font-body);
  --blog-card-font-content: var(--font-body);
}
\`\`\`

## Container Queries

The component adapts at the \`@lg\` breakpoint (32rem).

| Element | Below @lg       | @lg and above    |
|---------|-----------------|------------------|
| Title   | text-base, mt-3 | text-xl, mt-4    |
| Content | text-sm, mt-2   | text-base, mt-3  |
| Details | text-sm         | text-base        |
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['5/6', '3/4', '4/3', '1/1'],
      description: 'Thumbnail image aspect ratio',
    },
    title: {
      control: 'text',
      description: 'Blog post title',
    },
    content: {
      control: 'text',
      description: 'Content summary',
    },
    date: {
      control: 'text',
      description: 'Publication date',
    },
    author: {
      control: 'text',
      description: 'Author name (optional)',
    },
    image: {
      control: 'object',
      description: 'Image object with `src` and `alt`',
    },
    link: {
      control: 'object',
      description: 'Link object with `href` and `ariaLabel`',
    },
  },
};

export default meta;
type Story = StoryObj<BlogCardProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Blog card with image, title, content, date, and author.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  args: {
    title: "Sustainable Cleaning: A Beginner's Guide",
    content:
      'Discover how small changes in your cleaning routine can make a big impact on the environment. From natural ingredients to reusable tools, we cover everything you need to get started.',
    date: 'December 15, 2024',
    author: 'Sarah Mitchell',
    image: {
      src: 'https://images.unsplash.com/photo-1685052392996-5c042ab4c170?w=900',
      alt: 'Eco-friendly cleaning supplies arranged on a wooden surface',
    },
    link: {
      href: '/blog/sustainable-cleaning-guide',
      ariaLabel: "Read Sustainable Cleaning: A Beginner's Guide",
    },
  },
};

export const WithoutImage: Story = {
  parameters: {
    docs: {
      description: {
        story: 'When no image is provided, a fallback displays the title text.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'Natural Cleaning Ingredients You Already Have',
    content:
      'Your pantry is full of powerful cleaning agents. Learn how to use vinegar, baking soda, and lemon to keep your home sparkling clean.',
    date: 'December 5, 2024',
    author: 'James Chen',
    link: {
      href: '/blog/natural-cleaning-ingredients',
      ariaLabel: 'Read Natural Cleaning Ingredients You Already Have',
    },
  },
};

export const ContainerQueries: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Typography and spacing adapt at the `@lg` breakpoint (32rem).',
      },
      source: {
        code: `
// Small container - text-base title, text-sm content
<div className="w-72">
  <BlogCard {...props} />
</div>

// Large container - text-xl title, text-base content
<div className="w-[32rem]">
  <BlogCard {...props} />
</div>
        `,
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-2 text-sm text-contrast-400">Small container (below @lg breakpoint)</p>
        <div className="w-72">
          <BlogCard
            content="Discover how small changes in your cleaning routine can make a big impact on the environment."
            date="December 15, 2024"
            image={{
              src: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=900',
              alt: 'Bamboo countertop brush',
            }}
            link={{
              href: '/blog/eco-cleaning',
              ariaLabel: 'Read Eco-Friendly Cleaning Tips',
            }}
            title="Eco-Friendly Cleaning Tips"
          />
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm text-contrast-400">Large container (at @lg breakpoint)</p>
        <div className="w-[32rem]">
          <BlogCard
            content="Discover how small changes in your cleaning routine can make a big impact on the environment."
            date="December 15, 2024"
            image={{
              src: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=900',
              alt: 'Bamboo countertop brush',
            }}
            link={{
              href: '/blog/eco-cleaning',
              ariaLabel: 'Read Eco-Friendly Cleaning Tips',
            }}
            title="Eco-Friendly Cleaning Tips"
          />
        </div>
      </div>
    </div>
  ),
};

export const ComposableAnatomy: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use primitives to build custom blog card layouts.',
      },
      source: {
        code: `
import * as BlogCardPrimitive from '@/components/blog-card';

<BlogCardPrimitive.Root aspectRatio="4/3">
  <BlogCardPrimitive.Thumbnail>
    <BlogCardPrimitive.Image src="..." alt="..." />
  </BlogCardPrimitive.Thumbnail>
  <BlogCardPrimitive.Title>Post Title</BlogCardPrimitive.Title>
  <BlogCardPrimitive.Content>Summary text...</BlogCardPrimitive.Content>
  <BlogCardPrimitive.Details>
    <BlogCardPrimitive.Date>December 15, 2024</BlogCardPrimitive.Date>
    <BlogCardPrimitive.Author>Author Name</BlogCardPrimitive.Author>
  </BlogCardPrimitive.Details>
  <BlogCardPrimitive.Link href="/blog/post" aria-label="Read post" />
</BlogCardPrimitive.Root>
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <BlogCardPrimitive.Root aspectRatio="4/3">
      <BlogCardPrimitive.Thumbnail>
        <BlogCardPrimitive.Image
          alt="Glass soap pump bottles on a shelf"
          src="https://images.unsplash.com/photo-1606448009227-af1758630e60?w=900"
        />
      </BlogCardPrimitive.Thumbnail>
      <BlogCardPrimitive.Title>DIY Natural Cleaning Solutions</BlogCardPrimitive.Title>
      <BlogCardPrimitive.Content>
        Create your own effective cleaning products using simple, natural ingredients. Safe for your
        family and the environment.
      </BlogCardPrimitive.Content>
      <BlogCardPrimitive.Details>
        <BlogCardPrimitive.Date>November 20, 2024</BlogCardPrimitive.Date>
        <BlogCardPrimitive.Author>Emma Wilson</BlogCardPrimitive.Author>
      </BlogCardPrimitive.Details>
      <BlogCardPrimitive.Link
        aria-label="Read DIY Natural Cleaning Solutions"
        href="/blog/diy-natural-cleaning"
      />
    </BlogCardPrimitive.Root>
  ),
};

export const Skeleton: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Loading state while blog post data loads.',
      },
      source: {
        code: `
<BlogCardPrimitive.Root aspectRatio="4/3">
  <BlogCardPrimitive.Skeleton />
</BlogCardPrimitive.Root>
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <BlogCardPrimitive.Root aspectRatio="4/3">
      <BlogCardPrimitive.Skeleton />
    </BlogCardPrimitive.Root>
  ),
};
