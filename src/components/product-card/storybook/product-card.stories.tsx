import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import * as ProductCardPrimitive from '@/components/product-card';
import { ProductCard, type ProductCardProps } from '@/components/product-card';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    colorScheme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'The color scheme of the card',
    },
    aspectRatio: {
      control: 'select',
      options: ['5:6', '3:4', '1:1'],
      description: 'The aspect ratio of the product image',
    },
    compareActions: {
      description: 'Configuration for the compare checkbox',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the root element',
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
type Story = StoryObj<ProductCardProps>;

const defaultProduct = {
  id: '1',
  title: 'Classic Cotton T-Shirt',
  subtitle: 'Heather Gray',
  badge: 'New',
  price: {
    type: 'default' as const,
    value: '$29.99',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=720&fit=crop',
    alt: 'Classic cotton t-shirt in heather gray',
  },
  link: {
    href: '#',
    ariaLabel: 'View Classic Cotton T-Shirt',
  },
};

export const Default: Story = {
  args: {
    product: defaultProduct,
  },
};

export const WithSalePrice: Story = {
  args: {
    product: {
      id: '2',
      title: 'Premium Leather Jacket',
      subtitle: 'Vintage Brown',
      badge: 'Sale',
      price: {
        type: 'sale' as const,
        previousValue: '$299.99',
        currentValue: '$199.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=720&fit=crop',
        alt: 'Premium leather jacket in vintage brown',
      },
      link: {
        href: '#',
        ariaLabel: 'View Premium Leather Jacket',
      },
    },
  },
};

export const WithPriceRange: Story = {
  args: {
    product: {
      id: '3',
      title: 'Cashmere Sweater',
      subtitle: 'Multiple Colors',
      price: {
        type: 'range' as const,
        minValue: '$89.99',
        maxValue: '$129.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=720&fit=crop',
        alt: 'Cashmere sweater available in multiple colors',
      },
      link: {
        href: '#',
        ariaLabel: 'View Cashmere Sweater',
      },
    },
  },
};

export const WithoutImage: Story = {
  args: {
    product: {
      id: '4',
      title: 'Minimalist Watch',
      subtitle: 'Silver',
      price: {
        type: 'default' as const,
        value: '$149.99',
      },
      link: {
        href: '#',
        ariaLabel: 'View Minimalist Watch',
      },
    },
  },
};

export const WithoutSubtitle: Story = {
  args: {
    product: {
      id: '5',
      title: 'Running Shoes',
      badge: 'Best Seller',
      price: {
        type: 'default' as const,
        value: '$119.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=720&fit=crop',
        alt: 'Running shoes',
      },
      link: {
        href: '#',
        ariaLabel: 'View Running Shoes',
      },
    },
  },
};

export const WithoutBadge: Story = {
  args: {
    product: {
      id: '6',
      title: 'Denim Jeans',
      subtitle: 'Dark Wash',
      price: {
        type: 'default' as const,
        value: '$79.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=720&fit=crop',
        alt: 'Dark wash denim jeans',
      },
      link: {
        href: '#',
        ariaLabel: 'View Denim Jeans',
      },
    },
  },
};

export const DarkColorScheme: Story = {
  args: {
    colorScheme: 'dark',
    product: {
      id: '7',
      title: 'Wool Coat',
      subtitle: 'Charcoal',
      badge: 'Limited',
      price: {
        type: 'default' as const,
        value: '$249.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=720&fit=crop',
        alt: 'Charcoal wool coat',
      },
      link: {
        href: '#',
        ariaLabel: 'View Wool Coat',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80 rounded-lg bg-contrast-500 p-4">
        <Story />
      </div>
    ),
  ],
};

export const SquareAspectRatio: Story = {
  args: {
    aspectRatio: '1:1',
    product: {
      id: '8',
      title: 'Canvas Sneakers',
      subtitle: 'Off White',
      price: {
        type: 'default' as const,
        value: '$59.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop',
        alt: 'Off white canvas sneakers',
      },
      link: {
        href: '#',
        ariaLabel: 'View Canvas Sneakers',
      },
    },
  },
};

export const WithCompare: Story = {
  args: {
    product: {
      id: '9',
      title: 'Linen Shirt',
      subtitle: 'Ocean Blue',
      price: {
        type: 'default' as const,
        value: '$69.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=720&fit=crop',
        alt: 'Ocean blue linen shirt',
      },
      link: {
        href: '#',
        ariaLabel: 'View Linen Shirt',
      },
    },
    compareActions: {
      checked: false,
      label: 'Compare',
    },
  },
};

export const WithCompareChecked: Story = {
  args: {
    product: {
      id: '10',
      title: 'Silk Blouse',
      subtitle: 'Ivory',
      badge: 'Popular',
      price: {
        type: 'sale' as const,
        previousValue: '$129.99',
        currentValue: '$89.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&h=720&fit=crop',
        alt: 'Ivory silk blouse',
      },
      link: {
        href: '#',
        ariaLabel: 'View Silk Blouse',
      },
    },
    compareActions: {
      checked: true,
      label: 'Compare',
    },
  },
};

export const WithCompareDisabled: Story = {
  args: {
    product: {
      id: '11',
      title: 'Merino Cardigan',
      subtitle: 'Oatmeal',
      price: {
        type: 'default' as const,
        value: '$99.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=720&fit=crop',
        alt: 'Oatmeal merino cardigan',
      },
      link: {
        href: '#',
        ariaLabel: 'View Merino Cardigan',
      },
    },
    compareActions: {
      checked: false,
      disabled: true,
      label: 'Compare',
    },
  },
};

const InteractiveCompareTemplate = (args: ProductCardProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <ProductCard
      {...args}
      compareActions={{
        label: 'Compare',
        ...args.compareActions,
        checked,
        onCheckedChange: (value) => setChecked(value === true),
      }}
    />
  );
};

export const WithCompareInteractive: Story = {
  render: InteractiveCompareTemplate,
  args: {
    product: {
      id: '12',
      title: 'Quilted Vest',
      subtitle: 'Forest Green',
      badge: 'New',
      price: {
        type: 'default' as const,
        value: '$149.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=720&fit=crop',
        alt: 'Forest green quilted vest',
      },
      link: {
        href: '#',
        ariaLabel: 'View Quilted Vest',
      },
    },
    compareActions: {
      label: 'Compare',
    },
  },
};

export const Skeleton: Story = {
  render: () => (
    <ProductCardPrimitive.Root>
      <ProductCardPrimitive.Skeleton />
    </ProductCardPrimitive.Root>
  ),
};

export const SkeletonSquare: Story = {
  render: () => (
    <ProductCardPrimitive.Root aspectRatio="1:1">
      <ProductCardPrimitive.Skeleton />
    </ProductCardPrimitive.Root>
  ),
};
