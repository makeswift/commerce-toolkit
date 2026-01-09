import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import { CategoryCard } from '@/components/category-card/category-card';
import * as NavigationMenuPrimitive from '@/components/navigation-menu';
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
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A responsive navigation menu with dropdown support. Built on top of Radix UI Navigation Menu.

## CSS Variables

\`\`\`css
:root {
  --nav-focus: var(--brand);
  --nav-text: var(--foreground);
  --nav-viewport-background: var(--background);
  --nav-viewport-border: color-mix(in oklab, var(--foreground) 15%, transparent);
  --nav-link-text: var(--foreground);
  --nav-link-text-hover: var(--foreground);
  --nav-link-background: transparent;
  --nav-link-background-hover: var(--contrast-100);
  --nav-link-font-family: var(--font-family-body);
  --nav-grid-label-text: var(--foreground);
  --nav-grid-label-text-hover: var(--foreground);
  --nav-grid-label-background: transparent;
  --nav-grid-label-background-hover: var(--contrast-100);
  --nav-grid-label-font-family: var(--font-family-body);
  --nav-grid-link-text: var(--contrast-500);
  --nav-grid-link-background: transparent;
  --nav-grid-link-font-family: var(--font-family-body);
}
\`\`\`

## Usage

### High-Level Component

The \`NavigationMenu\` component provides a simple data-driven API:

\`\`\`tsx
import { NavigationMenu } from '@/components/navigation-menu';

<NavigationMenu
  items={[
    { trigger: 'Home', href: '/' },
    {
      trigger: 'Shop',
      content: {
        columns: [
          {
            label: { label: 'Category', href: '/category' },
            links: [
              { label: 'Item 1', href: '/item-1' },
              { label: 'Item 2', href: '/item-2' },
            ],
          },
        ],
      },
    },
  ]}
/>
\`\`\`

### Custom Link Components with asChild

Use the \`asChild\` prop to render your own link component (e.g., Next.js \`Link\`, React Router \`Link\`). This passes all styling and accessibility props to your custom component:

\`\`\`tsx
import Link from 'next/link';
import { NavigationMenu } from '@/components/navigation-menu';

<NavigationMenu
  items={[
    {
      trigger: 'Home',
      asChild: true,
      children: <Link href="/">Home</Link>,
    },
    {
      trigger: 'Shop',
      content: {
        columns: [
          {
            label: {
              label: 'Category',
              href: '/category',
              asChild: true,
              children: <Link href="/category">Category</Link>,
            },
            links: [
              {
                label: 'Item 1',
                href: '/item-1',
                asChild: true,
                children: <Link href="/item-1">Item 1</Link>,
              },
            ],
          },
        ],
      },
    },
  ]}
/>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as NavigationMenu from '@/components/navigation-menu';

<NavigationMenu.Root viewport>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Link href="/">Home</NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Shop</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <NavigationMenu.Grid>
          <NavigationMenu.GridColumn>
            <NavigationMenu.GridLabel href="/category">
              Category
            </NavigationMenu.GridLabel>
            <NavigationMenu.GridLink href="/item-1">
              Item 1
            </NavigationMenu.GridLink>
          </NavigationMenu.GridColumn>
        </NavigationMenu.Grid>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>
  <NavigationMenu.Panel>
    <NavigationMenu.Viewport />
  </NavigationMenu.Panel>
</NavigationMenu.Root>
\`\`\`

With custom link components:

\`\`\`tsx
import Link from 'next/link';
import * as NavigationMenu from '@/components/navigation-menu';

<NavigationMenu.Root viewport>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <Link href="/">Home</Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>Shop</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <NavigationMenu.Grid>
          <NavigationMenu.GridColumn>
            <NavigationMenu.GridLabel asChild>
              <Link href="/category">Category</Link>
            </NavigationMenu.GridLabel>
            <NavigationMenu.GridLink asChild>
              <Link href="/item-1">Item 1</Link>
            </NavigationMenu.GridLink>
          </NavigationMenu.GridColumn>
        </NavigationMenu.Grid>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>
  <NavigationMenu.Panel>
    <NavigationMenu.Viewport />
  </NavigationMenu.Panel>
</NavigationMenu.Root>
\`\`\`
        `,
      },
    },
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
  decorators: [
    (Story: ComponentType) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
};

export default meta;
type Story = StoryObj<NavigationMenuProps>;

/**
 * The default NavigationMenu displays trigger items with dropdown content organized in columns,
 * including an optional slot for featured content like a CategoryCard.
 */
export const Default: Story = {
  args: {
    items: defaultItems,
    viewport: true,
    columns: 4,
  },
};

/**
 * Navigation items without dropdown content render as simple links.
 */
export const SimpleLinks: Story = {
  args: {
    items: simpleItems,
    viewport: true,
  },
};

/**
 * Use the primitive components directly for full customization control.
 */
export const ComposableAnatomy: Story = {
  render: () => (
    <NavigationMenuPrimitive.Root columns={4} delayDuration={0} viewport>
      <NavigationMenuPrimitive.List>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link href="/">Home</NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger>Shop</NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content>
            <NavigationMenuPrimitive.Grid>
              <NavigationMenuPrimitive.GridColumn>
                <NavigationMenuPrimitive.GridLabel href="/featured">
                  Featured
                </NavigationMenuPrimitive.GridLabel>
                <NavigationMenuPrimitive.GridLink href="/new-arrivals">
                  New arrivals
                </NavigationMenuPrimitive.GridLink>
                <NavigationMenuPrimitive.GridLink href="/best-sellers">
                  Best sellers
                </NavigationMenuPrimitive.GridLink>
              </NavigationMenuPrimitive.GridColumn>
              <NavigationMenuPrimitive.GridColumn>
                <NavigationMenuPrimitive.GridLabel href="/categories">
                  Categories
                </NavigationMenuPrimitive.GridLabel>
                <NavigationMenuPrimitive.GridLink href="/clothing">
                  Clothing
                </NavigationMenuPrimitive.GridLink>
                <NavigationMenuPrimitive.GridLink href="/accessories">
                  Accessories
                </NavigationMenuPrimitive.GridLink>
              </NavigationMenuPrimitive.GridColumn>
            </NavigationMenuPrimitive.Grid>
            <NavigationMenuPrimitive.Slot>
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
            </NavigationMenuPrimitive.Slot>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link href="/about">About</NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
      <NavigationMenuPrimitive.Panel>
        <NavigationMenuPrimitive.Viewport />
      </NavigationMenuPrimitive.Panel>
    </NavigationMenuPrimitive.Root>
  ),
};
