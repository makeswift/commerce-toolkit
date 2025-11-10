import type { Meta, StoryObj } from '@storybook/react-vite';

import { BlogPostCard, type BlogPostCardProps } from '@/components/blog-post-card';

const meta: Meta<typeof BlogPostCard> = {
  title: 'Components/BlogPostCard',
  component: BlogPostCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the blog post',
    },
    content: {
      control: 'text',
      description: 'The excerpt or summary of the blog post',
    },
    date: {
      control: 'text',
      description: 'The publication date (ISO format)',
    },
    author: {
      control: 'text',
      description: 'The author name (optional)',
    },
    image: {
      control: 'object',
      description: 'The image object with src, alt, and optional render function',
    },
    link: {
      control: 'object',
      description: 'The link object with href, ariaLabel, and optional render function',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the root element',
    },
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<BlogPostCardProps>;

const defaultBlogPost = {
  title: 'The Future of E-commerce',
  author: 'Sarah Johnson',
  content:
    'Discover the latest trends shaping the future of online retail and how businesses are adapting to meet evolving consumer expectations in the digital age.',
  date: '2024-03-15',
  image: {
    src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    alt: 'Modern e-commerce workspace',
  },
  link: {
    href: '#',
    ariaLabel: 'Read more about The Future of E-commerce',
  },
};

export const Default: Story = {
  args: defaultBlogPost,
};

export const WithoutImage: Story = {
  args: {
    title: 'Design Systems in Modern Web Development',
    author: 'Michael Chen',
    content:
      'Learn how design systems are revolutionizing the way teams build consistent, scalable user interfaces across large-scale applications.',
    date: '2024-03-10',
    link: {
      href: '#',
      ariaLabel: 'Read more about Design Systems in Modern Web Development',
    },
  },
};

export const WithoutAuthor: Story = {
  args: {
    title: 'New Product Launch Announcement',
    content:
      'We are excited to announce the launch of our new product line, featuring innovative solutions designed to enhance your shopping experience.',
    date: '2024-03-20',
    image: {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
      alt: 'New product showcase',
    },
    link: {
      href: '#',
      ariaLabel: 'Read more about New Product Launch Announcement',
    },
  },
};

export const LongTitle: Story = {
  args: {
    title:
      'Understanding the Impact of Artificial Intelligence on Customer Experience and Personalization',
    author: 'Dr. Emily Rodriguez',
    content:
      'An in-depth analysis of how AI technologies are transforming the retail landscape and creating unprecedented opportunities for personalized shopping experiences.',
    date: '2024-03-18',
    image: {
      src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      alt: 'AI and technology concept',
    },
    link: {
      href: '#',
      ariaLabel:
        'Read more about Understanding the Impact of Artificial Intelligence on Customer Experience and Personalization',
    },
  },
};

export const LongContent: Story = {
  args: {
    title: 'Sustainability in Fashion',
    author: 'Jessica Williams',
    content:
      'The fashion industry is undergoing a major transformation as brands and consumers alike prioritize sustainability. From eco-friendly materials to ethical manufacturing practices, discover how companies are reducing their environmental footprint while maintaining style and quality. This comprehensive guide explores the latest innovations and trends.',
    date: '2024-03-12',
    image: {
      src: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&h=600&fit=crop',
      alt: 'Sustainable fashion',
    },
    link: {
      href: '#',
      ariaLabel: 'Read more about Sustainability in Fashion',
    },
  },
};

export const RecentPost: Story = {
  args: {
    title: '5 Tips for Better Product Photography',
    author: 'David Martinez',
    content:
      'Master the art of product photography with these essential tips that will help your products stand out and drive more conversions.',
    date: new Date().toISOString().split('T')[0],
    image: {
      src: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=600&fit=crop',
      alt: 'Professional photography setup',
    },
    link: {
      href: '#',
      ariaLabel: 'Read more about 5 Tips for Better Product Photography',
    },
  },
};

export const MinimalContent: Story = {
  args: {
    title: 'Quick Update',
    author: 'Admin',
    content: 'A brief announcement about our latest changes.',
    date: '2024-03-14',
    image: {
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
      alt: 'Office update',
    },
    link: {
      href: '#',
      ariaLabel: 'Read more about Quick Update',
    },
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div className="w-full max-w-5xl p-4">
      <div className="mx-auto grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BlogPostCard
          author="Sarah Johnson"
          content="Discover the latest trends shaping the future of online retail and consumer expectations."
          date="2024-03-15"
          image={{
            src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
            alt: 'E-commerce',
          }}
          link={{ href: '#', ariaLabel: 'Read more about The Future of E-commerce' }}
          title="The Future of E-commerce"
        />
        <BlogPostCard
          author="Michael Chen"
          content="Learn how design systems are revolutionizing the way teams build interfaces."
          date="2024-03-10"
          image={{
            src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
            alt: 'Design',
          }}
          link={{ href: '#', ariaLabel: 'Read more about Design Systems' }}
          title="Design Systems in Modern Web"
        />
        <BlogPostCard
          author="Jessica Williams"
          content="The fashion industry is prioritizing sustainability with eco-friendly materials."
          date="2024-03-12"
          image={{
            src: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&h=600&fit=crop',
            alt: 'Fashion',
          }}
          link={{ href: '#', ariaLabel: 'Read more about Sustainability' }}
          title="Sustainability in Fashion"
        />
      </div>
    </div>
  ),
  decorators: [],
  parameters: {
    layout: 'fullscreen',
  },
};
