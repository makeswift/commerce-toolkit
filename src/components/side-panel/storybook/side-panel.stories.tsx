import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sliders } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/button';
import { SidePanel, type SidePanelProps } from '@/components/side-panel';

const meta = {
  title: 'Components/SidePanel',
  component: SidePanel,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title displayed at the top of the side panel',
    },
    children: {
      control: false,
      description: 'Content to display in the side panel',
    },
    trigger: {
      control: false,
      description: 'Trigger element that opens the side panel',
    },
  },
} satisfies Meta<typeof SidePanel>;

export default meta;

type Story = StoryObj<typeof meta>;

function SidePanelWrapper({ ...props }: SidePanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setContainer(containerRef.current);
  }, []);

  return (
    <div className="relative flex min-h-[400px] flex-col" ref={containerRef}>
      <div className="flex-1 bg-contrast-100 p-8">
        <SidePanel {...props} container={container} />
        <p className="mt-4 text-sm text-contrast-400">
          Page content area - the side panel opens within this container.
        </p>
      </div>
    </div>
  );
}

export const Default: Story = {
  args: {
    title: 'Filters',
    children: <p className="text-lg text-contrast-400">This is the side panel content.</p>,
    trigger: (
      <Button size="medium" variant="secondary">
        <Sliders size={20} />
        Filters
      </Button>
    ),
  },
  render: (args) => <SidePanelWrapper {...args} />,
};

export const Scrollable: Story = {
  args: {
    title: 'Filters',
    trigger: (
      <Button size="medium" variant="secondary">
        <Sliders size={20} />
        Filters
      </Button>
    ),
    children: (
      <div className="space-y-6">
        <div>
          <h3 className="mb-3 font-semibold">Category</h3>
          <div className="space-y-2">
            {['Jackets', 'Shirts', 'Pants', 'Shoes', 'Accessories'].map((item) => (
              <label className="flex items-center gap-2" key={item}>
                <input className="size-4" type="checkbox" />
                <span className="text-contrast-500">{item}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Size</h3>
          <div className="space-y-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <label className="flex items-center gap-2" key={size}>
                <input className="size-4" type="checkbox" />
                <span className="text-contrast-500">{size}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Color</h3>
          <div className="space-y-2">
            {['Black', 'White', 'Navy', 'Gray', 'Brown', 'Beige', 'Red', 'Blue'].map((color) => (
              <label className="flex items-center gap-2" key={color}>
                <input className="size-4" type="checkbox" />
                <span className="text-contrast-500">{color}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Price Range</h3>
          <div className="space-y-2">
            {['Under $50', '$50 - $100', '$100 - $200', '$200 - $500', 'Over $500'].map((range) => (
              <label className="flex items-center gap-2" key={range}>
                <input className="size-4" type="checkbox" />
                <span className="text-contrast-500">{range}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Brand</h3>
          <div className="space-y-2">
            {[
              'Nike',
              'Adidas',
              'Puma',
              'New Balance',
              'Converse',
              'Vans',
              'Reebok',
              'Under Armour',
            ].map((brand) => (
              <label className="flex items-center gap-2" key={brand}>
                <input className="size-4" type="checkbox" />
                <span className="text-contrast-500">{brand}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Material</h3>
          <div className="space-y-2">
            {['Cotton', 'Polyester', 'Wool', 'Leather', 'Denim', 'Silk'].map((material) => (
              <label className="flex items-center gap-2" key={material}>
                <input className="size-4" type="checkbox" />
                <span className="text-contrast-500">{material}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  render: (args) => <SidePanelWrapper {...args} />,
};
