import type { Meta, StoryObj } from '@storybook/react-vite';

import * as CategoryCardPrimitive from '@/components/category-card';
import { CategoryCard, type CategoryCardProps } from '@/components/category-card';

const meta: Meta<typeof CategoryCard> = {
  title: 'Components/CategoryCard',
  component: CategoryCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Category title',
    },
    textColorScheme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Text color scheme',
    },
    iconColorScheme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Icon color scheme',
    },
    aspectRatio: {
      control: 'select',
      options: ['5:6', '3:4', '1:1'],
      description: 'Image aspect ratio',
    },
    textPosition: {
      control: 'select',
      options: ['inside', 'outside'],
      description: 'Position of text relative to image',
    },
    textSize: {
      control: 'select',
      options: ['small', 'medium', 'large', 'x-large'],
      description: 'Text size',
    },
    showOverlay: {
      control: 'boolean',
      description: 'Show gradient overlay when text is inside',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<CategoryCardProps>;

const defaultCategory = {
  title: 'Low Maintenance',
  image: {
    src: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=720&fit=crop',
    alt: 'Low maintenance plants',
  },
  link: {
    href: '#',
    ariaLabel: 'View Low Maintenance',
  },
};

export const Default: Story = {
  args: {
    ...defaultCategory,
  },
};

export const WithTextInside: Story = {
  args: {
    title: 'Indoor Plants',
    image: {
      src: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&h=720&fit=crop',
      alt: 'Indoor plants collection',
    },
    link: {
      href: '#',
      ariaLabel: 'View Indoor Plants',
    },
    textPosition: 'inside',
    textColorScheme: 'dark',
  },
};

export const WithTextInsideLarge: Story = {
  args: {
    title: 'Succulents',
    image: {
      src: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=720&fit=crop',
      alt: 'Succulent plants',
    },
    link: {
      href: '#',
      ariaLabel: 'View Succulents',
    },
    textPosition: 'inside',
    textColorScheme: 'dark',
    textSize: 'large',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Outdoor Plants',
    link: {
      href: '#',
      ariaLabel: 'View Outdoor Plants',
    },
  },
};

export const DarkTextScheme: Story = {
  args: {
    title: 'Tropical',
    image: {
      src: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600&h=720&fit=crop',
      alt: 'Tropical plants',
    },
    link: {
      href: '#',
      ariaLabel: 'View Tropical',
    },
    textColorScheme: 'dark',
  },
  decorators: [
    (Story) => (
      <div className="w-80 rounded-lg bg-foreground p-4">
        <Story />
      </div>
    ),
  ],
};

export const DarkIconScheme: Story = {
  args: {
    title: 'Flowering',
    image: {
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=720&fit=crop',
      alt: 'Flowering plants',
    },
    link: {
      href: '#',
      ariaLabel: 'View Flowering',
    },
    iconColorScheme: 'dark',
  },
  decorators: [
    (Story) => (
      <div className="w-80 rounded-lg p-4">
        <Story />
      </div>
    ),
  ],
};

export const SquareAspectRatio: Story = {
  args: {
    title: 'Cacti',
    image: {
      src: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=600&fit=crop',
      alt: 'Cactus plants',
    },
    link: {
      href: '#',
      ariaLabel: 'View Cacti',
    },
    aspectRatio: '1:1',
  },
};

export const ThreeByFourAspectRatio: Story = {
  args: {
    title: 'Air Plants',
    image: {
      src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&h=800&fit=crop',
      alt: 'Air plants',
    },
    link: {
      href: '#',
      ariaLabel: 'View Air Plants',
    },
    aspectRatio: '3:4',
  },
};

export const WithoutOverlay: Story = {
  args: {
    title: 'Herbs',
    image: {
      src: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=720&fit=crop',
      alt: 'Herb plants',
    },
    link: {
      href: '#',
      ariaLabel: 'View Herbs',
    },
    textPosition: 'inside',
    textColorScheme: 'dark',
    showOverlay: false,
  },
};

export const MediumText: Story = {
  args: {
    title: 'Ferns',
    image: {
      src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=720&fit=crop',
      alt: 'Fern plants',
    },
    link: {
      href: '#',
      ariaLabel: 'View Ferns',
    },
    textSize: 'medium',
  },
};

export const XLargeText: Story = {
  args: {
    title: 'Palms',
    image: {
      src: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&h=720&fit=crop',
      alt: 'Palm plants',
    },
    link: {
      href: '#',
      ariaLabel: 'View Palms',
    },
    textPosition: 'inside',
    textColorScheme: 'dark',
    textSize: 'x-large',
  },
};

export const Skeleton: Story = {
  render: () => (
    <CategoryCardPrimitive.Root>
      <CategoryCardPrimitive.Skeleton />
    </CategoryCardPrimitive.Root>
  ),
};

export const SkeletonSquare: Story = {
  render: () => (
    <CategoryCardPrimitive.Root aspectRatio="1:1">
      <CategoryCardPrimitive.Skeleton />
    </CategoryCardPrimitive.Root>
  ),
};
