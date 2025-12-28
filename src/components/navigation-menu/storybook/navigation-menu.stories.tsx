import type { Meta, StoryObj } from '@storybook/react-vite';

import { CategoryCard } from '@/components/category-card/category-card';
import {
  NavigationMenu,
  type NavigationMenuProps,
} from '@/components/navigation-menu/navigation-menu';

function StoryWrapper({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-[500px] w-full items-start p-8">{children}</div>;
}

const defaultItems: NavigationMenuProps['items'] = [
  {
    trigger: 'Shop all',
    content: {
      columns: [
        {
          label: { label: 'Featured', href: '/featured' },
          links: [
            { label: 'New arrivals', href: '/new-arrivals' },
            { label: 'Best sellers', href: '/best-sellers' },
            { label: 'On sale', href: '/sale' },
          ],
        },
        {
          label: { label: 'Categories', href: '/categories' },
          links: [
            { label: 'Clothing', href: '/clothing' },
            { label: 'Accessories', href: '/accessories' },
            { label: 'Shoes', href: '/shoes' },
          ],
        },
        {
          label: { label: 'Collections', href: '/collections' },
          links: [
            { label: 'Summer 2024', href: '/summer-2024' },
            { label: 'Winter essentials', href: '/winter-essentials' },
            { label: 'Limited edition', href: '/limited-edition' },
          ],
        },
        {
          label: { label: 'Brands', href: '/brands' },
          links: [
            { label: 'Nike', href: '/brands/nike' },
            { label: 'Adidas', href: '/brands/adidas' },
            { label: 'Puma', href: '/brands/puma' },
            { label: 'Reebok', href: '/brands/reebok' },
          ],
        },
        {
          label: { label: 'Lifestyle', href: '/lifestyle' },
          links: [
            { label: 'Athleisure', href: '/lifestyle/athleisure' },
            { label: 'Streetwear', href: '/lifestyle/streetwear' },
            { label: 'Formal', href: '/lifestyle/formal' },
          ],
        },
      ],
      slot: (
        <CategoryCard
          image={{
            src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
            alt: 'New collection',
          }}
          link={{ href: '/new-collection', ariaLabel: 'Shop new collection' }}
          textPosition="inside"
          textSize="medium"
          title="New Collection"
        />
      ),
    },
  },
  {
    trigger: 'Women',
    content: {
      columns: [
        {
          label: { label: 'Clothing', href: '/women/clothing' },
          links: [
            { label: 'Dresses', href: '/women/dresses' },
            { label: 'Tops', href: '/women/tops' },
            { label: 'Pants', href: '/women/pants' },
            { label: 'Outerwear', href: '/women/outerwear' },
          ],
        },
        {
          label: { label: 'Accessories', href: '/women/accessories' },
          links: [
            { label: 'Bags', href: '/women/bags' },
            { label: 'Jewelry', href: '/women/jewelry' },
            { label: 'Scarves', href: '/women/scarves' },
            { label: 'Hats', href: '/women/hats' },
          ],
        },
        {
          label: { label: 'Shoes', href: '/women/shoes' },
          links: [
            { label: 'Heels', href: '/women/heels' },
            { label: 'Flats', href: '/women/flats' },
            { label: 'Sneakers', href: '/women/sneakers' },
            { label: 'Boots', href: '/women/boots' },
          ],
        },
        {
          label: { label: 'Activewear', href: '/women/activewear' },
          links: [
            { label: 'Leggings', href: '/women/leggings' },
            { label: 'Sports bras', href: '/women/sports-bras' },
            { label: 'Workout tops', href: '/women/workout-tops' },
          ],
        },
        {
          label: { label: 'Swimwear', href: '/women/swimwear' },
          links: [
            { label: 'Bikinis', href: '/women/bikinis' },
            { label: 'One-pieces', href: '/women/one-pieces' },
            { label: 'Cover-ups', href: '/women/cover-ups' },
          ],
        },
        {
          label: { label: 'Intimates', href: '/women/intimates' },
          links: [
            { label: 'Bras', href: '/women/bras' },
            { label: 'Underwear', href: '/women/underwear' },
            { label: 'Sleepwear', href: '/women/sleepwear' },
          ],
        },
      ],
      slot: (
        <CategoryCard
          image={{
            src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop',
            alt: 'Women collection',
          }}
          link={{ href: '/women', ariaLabel: 'Shop women' }}
          textPosition="inside"
          textSize="medium"
          title="Shop Women"
        />
      ),
    },
  },
  {
    trigger: 'Men',
    content: {
      columns: [
        {
          label: { label: 'Clothing', href: '/men/clothing' },
          links: [
            { label: 'Shirts', href: '/men/shirts' },
            { label: 'T-Shirts', href: '/men/tshirts' },
            { label: 'Pants', href: '/men/pants' },
            { label: 'Jackets', href: '/men/jackets' },
          ],
        },
        {
          label: { label: 'Accessories', href: '/men/accessories' },
          links: [
            { label: 'Watches', href: '/men/watches' },
            { label: 'Belts', href: '/men/belts' },
            { label: 'Wallets', href: '/men/wallets' },
            { label: 'Sunglasses', href: '/men/sunglasses' },
          ],
        },
        {
          label: { label: 'Shoes', href: '/men/shoes' },
          links: [
            { label: 'Sneakers', href: '/men/sneakers' },
            { label: 'Loafers', href: '/men/loafers' },
            { label: 'Boots', href: '/men/boots' },
            { label: 'Sandals', href: '/men/sandals' },
          ],
        },
      ],
      slot: (
        <CategoryCard
          aspectRatio="1/1"
          image={{
            src: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=400&h=400&fit=crop',
            alt: 'Men collection',
          }}
          link={{ href: '/men', ariaLabel: 'Shop men' }}
          textPosition="inside"
          textSize="medium"
          title="Shop Men"
        />
      ),
    },
  },
];

const simpleItems: NavigationMenuProps['items'] = [
  { trigger: 'Home', href: '/' },
  { trigger: 'About', href: '/about' },
  { trigger: 'Services', href: '/services' },
  { trigger: 'Contact', href: '/contact' },
];

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  decorators: [
    (Story) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of navigation menu items',
    },
    viewport: {
      control: 'boolean',
      description: 'Whether to render the viewport container for dropdown content',
    },
    columns: {
      control: 'select',
      options: [3, 4, 5, 6],
      description: 'Number of columns in the dropdown grid',
    },
  },
};

export default meta;
type Story = StoryObj<NavigationMenuProps>;

export const Default: Story = {
  args: {
    items: defaultItems,
    viewport: true,
    columns: 4,
  },
};

export const SimpleLinks: Story = {
  args: {
    items: simpleItems,
    viewport: true,
  },
};
