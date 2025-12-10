import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import * as CompareCardPrimitive from '@/components/compare-card';
import { CompareCard, type CompareCardProps } from '@/components/compare-card/compare-card';

const meta: Meta<typeof CompareCard> = {
  title: 'Components/CompareCard',
  component: CompareCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    product: {
      control: false,
      description: 'Product data including all details for comparison',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the root element',
    },
    addToCartLabel: {
      control: 'text',
      description: 'Label for the add to cart button',
    },
    descriptionLabel: {
      control: 'text',
      description: 'Label for the description section',
    },
    noDescriptionLabel: {
      control: 'text',
      description: 'Label shown when there is no description',
    },
    ratingLabel: {
      control: 'text',
      description: 'Label for the rating section',
    },
    noRatingsLabel: {
      control: 'text',
      description: 'Label shown when there are no ratings',
    },
    otherDetailsLabel: {
      control: 'text',
      description: 'Label for the specs/other details section',
    },
    noOtherDetailsLabel: {
      control: 'text',
      description: 'Label shown when there are no specs',
    },
    viewOptionsLabel: {
      control: 'text',
      description: 'Label for the view options button (shown when hasVariants is true)',
    },
    preorderLabel: {
      control: 'text',
      description: 'Label for the preorder button',
    },
    addToCartAction: {
      control: false,
      description: 'Action to perform when adding to cart',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state for the add to cart button',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<CompareCardProps>;

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
  rating: 4.5,
  description:
    'A timeless wardrobe staple crafted from 100% premium cotton. This classic t-shirt features a comfortable crew neck, relaxed fit, and durable construction that gets softer with every wash.',
  specs: [
    { name: 'Material', value: '100% Cotton' },
    { name: 'Fit', value: 'Relaxed' },
    { name: 'Care', value: 'Machine wash cold' },
    { name: 'Origin', value: 'Made in USA' },
  ],
  hasVariants: false,
};

export const Default: Story = {
  args: {
    product: defaultProduct,
    addToCartAction: (formData: FormData) => {
      console.log('Adding to cart:', formData.get('id'));
    },
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
      rating: 5,
      description:
        'Handcrafted from the finest full-grain leather, this jacket combines classic style with modern durability. Features multiple pockets, brass hardware, and a timeless silhouette that improves with age.',
      specs: [
        { name: 'Material', value: 'Full-grain leather' },
        { name: 'Lining', value: '100% Polyester' },
        { name: 'Hardware', value: 'Brass' },
        { name: 'Care', value: 'Professional leather cleaning' },
      ],
      hasVariants: false,
    },
    addToCartAction: (formData: FormData) => {
      console.log('Adding to cart:', formData.get('id'));
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
      rating: 4.8,
      description:
        'Luxuriously soft cashmere sweater perfect for layering or wearing on its own. Available in a range of classic and seasonal colors.',
      specs: [
        { name: 'Material', value: '100% Cashmere' },
        { name: 'Weight', value: 'Lightweight' },
        { name: 'Care', value: 'Dry clean or hand wash' },
        { name: 'Origin', value: 'Made in Scotland' },
      ],
      hasVariants: true,
    },
  },
};

export const WithVariants: Story = {
  args: {
    product: {
      id: '4',
      title: 'Running Shoes',
      subtitle: 'Performance Series',
      badge: 'Best Seller',
      price: {
        type: 'default' as const,
        value: '$119.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=720&fit=crop',
        alt: 'Performance running shoes',
      },
      link: {
        href: '#',
        ariaLabel: 'View Running Shoes',
      },
      rating: 4.7,
      description:
        'Engineered for optimal performance with responsive cushioning and breathable mesh. Multiple size and color options available.',
      specs: [
        { name: 'Type', value: 'Road running' },
        { name: 'Drop', value: '8mm' },
        { name: 'Weight', value: '9.2 oz' },
        { name: 'Upper', value: 'Engineered mesh' },
      ],
      hasVariants: true,
    },
  },
};

export const WithoutDescription: Story = {
  args: {
    product: {
      id: '5',
      title: 'Minimalist Watch',
      subtitle: 'Silver',
      price: {
        type: 'default' as const,
        value: '$149.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=720&fit=crop',
        alt: 'Minimalist silver watch',
      },
      link: {
        href: '#',
        ariaLabel: 'View Minimalist Watch',
      },
      rating: 4.3,
      specs: [
        { name: 'Case', value: 'Stainless steel' },
        { name: 'Movement', value: 'Quartz' },
        { name: 'Water resistance', value: '50m' },
        { name: 'Strap', value: 'Leather' },
      ],
      hasVariants: false,
    },
    addToCartAction: (formData: FormData) => {
      console.log('Adding to cart:', formData.get('id'));
    },
  },
};

export const WithoutSpecs: Story = {
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
      rating: 4.6,
      description:
        'Classic five-pocket denim jeans with a modern slim fit. Crafted from premium Japanese selvedge denim that ages beautifully over time.',
      hasVariants: false,
    },
    addToCartAction: (formData: FormData) => {
      console.log('Adding to cart:', formData.get('id'));
    },
  },
};

export const WithoutRating: Story = {
  args: {
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
      description:
        'Elegant wool blend coat perfect for the colder months. Features a timeless double-breasted design with notch lapels and side pockets.',
      specs: [
        { name: 'Material', value: '80% Wool, 20% Polyester' },
        { name: 'Style', value: 'Double-breasted' },
        { name: 'Length', value: 'Knee-length' },
        { name: 'Care', value: 'Dry clean only' },
      ],
      hasVariants: false,
    },
    addToCartAction: (formData: FormData) => {
      console.log('Adding to cart:', formData.get('id'));
    },
  },
};

export const MinimalProduct: Story = {
  args: {
    product: {
      id: '8',
      title: 'Canvas Sneakers',
      subtitle: 'Off White',
      price: {
        type: 'default' as const,
        value: '$59.99',
      },
      link: {
        href: '#',
        ariaLabel: 'View Canvas Sneakers',
      },
      hasVariants: false,
    },
    addToCartAction: (formData: FormData) => {
      console.log('Adding to cart:', formData.get('id'));
    },
  },
};

export const LoadingState: Story = {
  args: {
    product: defaultProduct,
    addToCartAction: (formData: FormData) => {
      console.log('Adding to cart:', formData.get('id'));
    },
    loading: true,
  },
};

export const DisabledProduct: Story = {
  args: {
    product: {
      ...defaultProduct,
      id: '9',
      title: 'Out of Stock Item',
      badge: 'Sold Out',
      disabled: true,
    },
    addToCartAction: (formData: FormData) => {
      console.log('Adding to cart:', formData.get('id'));
    },
  },
};

export const PreorderProduct: Story = {
  args: {
    product: {
      id: '10',
      title: 'Limited Edition Sneakers',
      subtitle: 'Midnight Blue',
      badge: 'Pre-order',
      price: {
        type: 'default' as const,
        value: '$179.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=720&fit=crop',
        alt: 'Limited edition midnight blue sneakers',
      },
      link: {
        href: '#',
        ariaLabel: 'View Limited Edition Sneakers',
      },
      rating: 4.9,
      description:
        'Exclusive limited edition release. Features premium materials and unique colorway. Ships in 4-6 weeks.',
      specs: [
        { name: 'Material', value: 'Premium leather' },
        { name: 'Style', value: 'High-top' },
        { name: 'Release', value: 'Limited edition' },
        { name: 'Availability', value: 'Pre-order only' },
      ],
      hasVariants: false,
      isPreorder: true,
    },
    addToCartAction: (formData: FormData) => {
      console.log('Adding preorder to cart:', formData.get('id'));
    },
  },
};

export const WithoutAddToCart: Story = {
  args: {
    product: defaultProduct,
  },
};

export const CustomLabels: Story = {
  args: {
    product: defaultProduct,
    addToCartAction: (formData: FormData) => {
      console.log('Adding to cart:', formData.get('id'));
    },
    addToCartLabel: 'Add to Bag',
    descriptionLabel: 'Product Details',
    noDescriptionLabel: 'No details available at this time.',
    ratingLabel: 'Customer Reviews',
    noRatingsLabel: 'Be the first to review!',
    otherDetailsLabel: 'Specifications',
    noOtherDetailsLabel: 'No specifications available.',
    viewOptionsLabel: 'Choose Options',
    preorderLabel: 'Reserve Now',
  },
};

const InteractiveTemplate = (args: CompareCardProps) => {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async (formData: FormData) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Added to cart:', formData.get('id'));
    setLoading(false);
  };

  return <CompareCard {...args} addToCartAction={handleAddToCart} loading={loading} />;
};

export const InteractiveAddToCart: Story = {
  render: InteractiveTemplate,
  args: {
    product: defaultProduct,
  },
};

export const WithLongDescription: Story = {
  args: {
    product: {
      id: '14',
      title: 'Heritage Backpack',
      subtitle: 'Olive Canvas',
      badge: "Editor's Choice",
      price: {
        type: 'default' as const,
        value: '$189.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=720&fit=crop',
        alt: 'Olive canvas heritage backpack',
      },
      link: {
        href: '#',
        ariaLabel: 'View Heritage Backpack',
      },
      rating: 4.8,
      description: (
        <>
          <p>
            This premium heritage backpack combines timeless design with modern functionality,
            making it the perfect companion for both urban adventures and outdoor excursions.
            Crafted from durable, water-resistant canvas and reinforced with genuine leather
            accents, this backpack is built to withstand years of daily use while developing a
            unique patina that tells your story.
          </p>
          <p>
            The spacious main compartment features a padded laptop sleeve that fits up to 15-inch
            devices, keeping your tech safe and secure. Multiple interior pockets and organizers
            help you keep everything from pens and notebooks to chargers and cables neatly arranged
            and easily accessible. The exterior includes two side pockets perfect for water bottles
            or umbrellas, and a quick-access front pocket for items you need on the go.
          </p>
          <p>
            Ergonomically designed padded shoulder straps and a ventilated back panel ensure all-day
            comfort, even when fully loaded. The adjustable sternum strap and removable waist belt
            provide additional stability for heavier loads or longer journeys.
          </p>
          <p>
            Whether you&apos;re commuting to work, heading to class, or embarking on a weekend
            getaway, this versatile backpack adapts to your lifestyle with style and durability that
            stands the test of time.
          </p>
        </>
      ),
      specs: [
        { name: 'Material', value: 'Water-resistant canvas & leather' },
        { name: 'Capacity', value: '25 liters' },
        { name: 'Laptop sleeve', value: 'Up to 15 inches' },
        { name: 'Dimensions', value: '18" x 12" x 6"' },
        { name: 'Weight', value: '2.2 lbs' },
        { name: 'Warranty', value: 'Lifetime' },
      ],
      hasVariants: false,
    },
    addToCartAction: (formData: FormData) => {
      console.log('Adding to cart:', formData.get('id'));
    },
  },
};

export const WithLongSpecs: Story = {
  args: {
    product: {
      id: '15',
      title: 'Professional Camera',
      subtitle: 'Mirrorless Full Frame',
      badge: 'Pro',
      price: {
        type: 'default' as const,
        value: '$2,499.99',
      },
      image: {
        src: 'https://images.unsplash.com/photo-1606986601547-a4d886b671b2?w=600&h=720&fit=crop',
        alt: 'Professional mirrorless camera',
      },
      link: {
        href: '#',
        ariaLabel: 'View Professional Camera',
      },
      rating: 4.9,
      description:
        'Professional-grade mirrorless camera with cutting-edge technology for photographers and videographers.',
      specs: [
        { name: 'Sensor', value: '45.7MP Full-Frame CMOS' },
        { name: 'Processor', value: 'EXPEED 7' },
        { name: 'ISO Range', value: '64-25,600 (expandable to 102,400)' },
        { name: 'Autofocus', value: '493-point hybrid AF system' },
        { name: 'Video', value: '8K 30p, 4K 120p' },
        { name: 'Viewfinder', value: '3.69M-dot OLED EVF, 0.80x magnification' },
        { name: 'Display', value: '3.2" tilting touchscreen LCD' },
        { name: 'Burst Rate', value: '20 fps mechanical, 120 fps electronic' },
        { name: 'Image Stabilization', value: '5-axis in-body, up to 8 stops' },
        { name: 'Storage', value: 'Dual CFexpress Type B / SD UHS-II' },
        { name: 'Battery Life', value: 'Approx. 740 shots' },
        { name: 'Weather Sealing', value: 'Magnesium alloy, dust & moisture resistant' },
        { name: 'Connectivity', value: 'Wi-Fi 6, Bluetooth 5.0, USB-C 3.2, HDMI' },
        { name: 'Dimensions', value: '5.4" x 4.1" x 2.7"' },
        { name: 'Weight', value: '1.5 lbs (body only)' },
      ],
      hasVariants: false,
    },
    addToCartAction: (formData: FormData) => {
      console.log('Adding to cart:', formData.get('id'));
    },
  },
};

export const Skeleton: Story = {
  render: () => <CompareCardPrimitive.Skeleton />,
};
