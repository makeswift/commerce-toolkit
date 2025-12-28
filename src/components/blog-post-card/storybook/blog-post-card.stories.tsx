import type { Meta, StoryObj } from '@storybook/react-vite';

import * as BlogPostCardPrimitive from '@/components/blog-post-card';
import { BlogPostCard, type BlogPostCardProps } from '@/components/blog-post-card/blog-post-card';

const meta: Meta<typeof BlogPostCard> = {
  title: 'Components/BlogPostCard',
  component: BlogPostCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The BlogPostCard component displays a blog post preview with image, title, content summary, date, and optional author.

## CSS Variables

The following CSS variables can be used to customize the BlogPostCard component:

\`\`\`css
:root {
  --blog-post-card-focus: hsl(var(--primary));
  --blog-post-card-image-background: hsl(var(--contrast-100));
  --blog-post-card-empty-text: color-mix(in oklab, hsl(var(--foreground)) 15%, transparent);
  --blog-post-card-title-text: hsl(var(--foreground));
  --blog-post-card-content-text: hsl(var(--contrast-400));
  --blog-post-card-author-date-text: hsl(var(--foreground));
  --blog-post-card-font-family: var(--font-family-body);
  --blog-post-card-summary-text: hsl(var(--contrast-400));
}
\`\`\`

## Aspect Ratios

The component supports four aspect ratios for the thumbnail image:
- \`4/3\` (default) - Landscape, ideal for blog imagery
- \`5/6\` - Slightly tall
- \`3/4\` - Portrait orientation
- \`1/1\` - Square format
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['5/6', '3/4', '4/3', '1/1'],
      description: 'The aspect ratio of the thumbnail image',
    },
    title: {
      control: 'text',
      description: 'The blog post title',
    },
    content: {
      control: 'text',
      description: 'The blog post content summary',
    },
    date: {
      control: 'text',
      description: 'The publication date',
    },
    author: {
      control: 'text',
      description: 'The author name (optional)',
    },
    image: {
      control: 'object',
      description: 'The thumbnail image object with src and alt',
    },
    link: {
      control: 'object',
      description: 'The link object with href and ariaLabel',
    },
  },
};

export default meta;
type Story = StoryObj<BlogPostCardProps>;

function StoryWrapper({ children }: { children: React.ReactNode }) {
  return <div className="w-80">{children}</div>;
}

/**
 * The default BlogPostCard displays a thumbnail, title, content summary, and date.
 */
export const Default: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  args: {
    title: "Sustainable Cleaning: A Beginner's Guide",
    content:
      'Discover how small changes in your cleaning routine can make a big impact on the environment. From natural ingredients to reusable tools, we cover everything you need to get started.',
    date: 'December 15, 2024',
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

/**
 * BlogPostCard with an author displayed below the date.
 */
export const WithAuthor: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  args: {
    title: 'The Art of Minimalist Home Organization',
    content:
      'Learn how to declutter your space and create a serene home environment with our step-by-step guide to minimalist organization principles.',
    date: 'December 10, 2024',
    author: 'Sarah Mitchell',
    image: {
      src: 'https://images.unsplash.com/photo-1597816189341-6ed558ab017e?w=900',
      alt: 'Minimal ceramic soap dispenser in a clean bathroom',
    },
    link: {
      href: '/blog/minimalist-home-organization',
      ariaLabel: 'Read The Art of Minimalist Home Organization',
    },
  },
};

/**
 * BlogPostCard without an image displays a fallback with the title.
 */
export const WithoutImage: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
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

/**
 * BlogPostCard with a square aspect ratio.
 */
export const SquareAspectRatio: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  args: {
    aspectRatio: '1/1',
    title: 'Zero-Waste Kitchen Essentials',
    content:
      'Transform your kitchen into an eco-friendly space with these essential zero-waste products and practices.',
    date: 'November 28, 2024',
    image: {
      src: 'https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=900',
      alt: 'Bamboo countertop brush',
    },
    link: {
      href: '/blog/zero-waste-kitchen',
      ariaLabel: 'Read Zero-Waste Kitchen Essentials',
    },
  },
};

/**
 * ## Composable Anatomy
 *
 * For advanced customization, you can use the primitive components directly. The primitives include:
 *
 * - `Root` - Container with aspect ratio configuration
 * - `Thumbnail` - Image container
 * - `Image` - Blog post image with hover effects
 * - `Fallback` - Displayed when no image is available
 * - `Title` - Blog post title
 * - `Content` - Content summary text
 * - `Details` - Container for date and author
 * - `Date` - Publication date
 * - `Author` - Author name
 * - `Link` - Invisible link overlay for click area
 *
 * ```tsx
 * import * as BlogPostCardPrimitive from '@/components/blog-post-card';
 *
 * <BlogPostCardPrimitive.Root aspectRatio="4/3">
 *   <BlogPostCardPrimitive.Thumbnail>
 *     <BlogPostCardPrimitive.Image src="..." alt="..." />
 *   </BlogPostCardPrimitive.Thumbnail>
 *   <BlogPostCardPrimitive.Title>Post Title</BlogPostCardPrimitive.Title>
 *   <BlogPostCardPrimitive.Content>Summary text...</BlogPostCardPrimitive.Content>
 *   <BlogPostCardPrimitive.Details>
 *     <BlogPostCardPrimitive.Date>December 15, 2024</BlogPostCardPrimitive.Date>
 *     <BlogPostCardPrimitive.Author>Author Name</BlogPostCardPrimitive.Author>
 *   </BlogPostCardPrimitive.Details>
 *   <BlogPostCardPrimitive.Link href="/blog/post" aria-label="Read post" />
 * </BlogPostCardPrimitive.Root>
 * ```
 */
export const ComposableAnatomy: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  render: () => (
    <BlogPostCardPrimitive.Root aspectRatio="4/3">
      <BlogPostCardPrimitive.Thumbnail>
        <BlogPostCardPrimitive.Image
          alt="Glass soap pump bottles on a shelf"
          src="https://images.unsplash.com/photo-1606448009227-af1758630e60?w=900"
        />
      </BlogPostCardPrimitive.Thumbnail>
      <BlogPostCardPrimitive.Title>DIY Natural Cleaning Solutions</BlogPostCardPrimitive.Title>
      <BlogPostCardPrimitive.Content>
        Create your own effective cleaning products using simple, natural ingredients. Safe for your
        family and the environment.
      </BlogPostCardPrimitive.Content>
      <BlogPostCardPrimitive.Details>
        <BlogPostCardPrimitive.Date>November 20, 2024</BlogPostCardPrimitive.Date>
        <BlogPostCardPrimitive.Author>Emma Wilson</BlogPostCardPrimitive.Author>
      </BlogPostCardPrimitive.Details>
      <BlogPostCardPrimitive.Link
        aria-label="Read DIY Natural Cleaning Solutions"
        href="/blog/diy-natural-cleaning"
      />
    </BlogPostCardPrimitive.Root>
  ),
};

/**
 * The skeleton state is displayed while blog post data is loading.
 */
export const Skeleton: Story = {
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  render: () => (
    <BlogPostCardPrimitive.Root aspectRatio="4/3">
      <BlogPostCardPrimitive.Skeleton />
    </BlogPostCardPrimitive.Root>
  ),
};
