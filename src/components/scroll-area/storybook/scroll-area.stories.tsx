import type { Meta, StoryObj } from '@storybook/react-vite';

import { ScrollArea, type ScrollAreaProps } from '@/components/scroll-area';
import * as ScrollAreaPrimitive from '@/components/scroll-area/primitives';

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A custom scroll area component with styled scrollbars built on Radix UI primitives. Provides consistent scrollbar styling across browsers.

## CSS Variables

\`\`\`css
:root {
  --scroll-area-focus: var(--brand);
  --scroll-area-thumb: var(--contrast-200);
}
\`\`\`

## Usage

### High-Level Component

The \`ScrollArea\` component provides a simple API for scrollable content:

\`\`\`tsx
import { ScrollArea } from '@/components/scroll-area';

<ScrollArea className="h-64" orientation="vertical">
  <p>Your scrollable content here...</p>
</ScrollArea>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as ScrollArea from '@/components/scroll-area';

<ScrollArea.Provider orientation="vertical" type="hover">
  <ScrollArea.Root className="h-64">
    <ScrollArea.Viewport>
      <p>Your scrollable content here...</p>
    </ScrollArea.Viewport>
    <ScrollArea.Bar>
      <ScrollArea.Thumb />
    </ScrollArea.Bar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
</ScrollArea.Provider>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'both'],
      description: 'The scrolling direction(s) allowed',
    },
    type: {
      control: 'select',
      options: ['auto', 'always', 'scroll', 'hover'],
      description: 'When the scrollbar is visible',
    },
    scrollHideDelay: {
      control: 'number',
      description: 'Delay in ms before hiding the scrollbar',
    },
  },
};

export default meta;
type Story = StoryObj<ScrollAreaProps>;

const sampleContent = (
  <div className="space-y-4 p-4">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
  </div>
);

// Default vertical scroll
export const Default: Story = {
  args: {
    className: 'h-64 w-64 rounded border border-contrast-200',
    orientation: 'vertical',
    children: sampleContent,
  },
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => (
    <ScrollAreaPrimitive.Provider orientation="vertical" type="hover">
      <ScrollAreaPrimitive.Root className="h-64 w-64 rounded border border-contrast-200">
        <ScrollAreaPrimitive.Viewport>{sampleContent}</ScrollAreaPrimitive.Viewport>
        <ScrollAreaPrimitive.Bar>
          <ScrollAreaPrimitive.Thumb />
        </ScrollAreaPrimitive.Bar>
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    </ScrollAreaPrimitive.Provider>
  ),
};
