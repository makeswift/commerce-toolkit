import type { Meta, StoryObj } from '@storybook/react-vite';

import { CategoryCard } from '@/components/category-card';

const meta = {
  title: 'Components/CategoryCard',
  component: CategoryCard,
  parameters: {
    layout: 'fullscreen',
  },
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
  args: {
    title: 'Category Name',
    textColorScheme: 'light',
    iconColorScheme: 'light',
    aspectRatio: '5:6',
    textPosition: 'outside',
    textSize: 'small',
    showOverlay: true,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CategoryCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    title: '',
    link: { href: '' },
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [],
  render: () => (
    <div className="@container">
      <div className="bg-background p-8 @container">
        <div className="mx-auto grid max-w-screen-md grid-cols-1 gap-8 @lg:grid-cols-2">
          <CategoryCard
            image={{
              src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/pink-caladium.jpeg',
              alt: 'Low Maintenance',
            }}
            link={{ href: '#', ariaLabel: 'View Low Maintenance' }}
            title="Low Maintenance"
          />
          <CategoryCard
            link={{ href: '#', ariaLabel: 'View Low Maintenance' }}
            title="Low Maintenance"
          />
          <CategoryCard
            image={{
              src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/pink-caladium.jpeg',
              alt: 'Low Maintenance',
            }}
            link={{ href: '#', ariaLabel: 'View Low Maintenance' }}
            textColorScheme="dark"
            textPosition="inside"
            textSize="small"
            title="Low Maintenance"
          />
          <CategoryCard
            image={{
              src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/pink-caladium.jpeg',
              alt: 'Low Maintenance',
            }}
            link={{ href: '#', ariaLabel: 'View Low Maintenance' }}
            textColorScheme="dark"
            textPosition="inside"
            textSize="large"
            title="Low Maintenance"
          />
        </div>
      </div>
      <div className="bg-foreground p-8">
        <div className="mx-auto grid max-w-screen-md grid-cols-1 gap-8 @lg:grid-cols-2">
          <CategoryCard
            aspectRatio="1:1"
            iconColorScheme="dark"
            image={{
              src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/pink-caladium.jpeg',
              alt: 'Low Maintenance',
            }}
            link={{ href: '#', ariaLabel: 'View Low Maintenance' }}
            textColorScheme="dark"
            title="Low Maintenance"
          />
          <CategoryCard
            aspectRatio="1:1"
            iconColorScheme="dark"
            link={{ href: '#', ariaLabel: 'View Partial shade' }}
            textColorScheme="dark"
            title="Partial shade"
          />
        </div>
      </div>
    </div>
  ),
};
