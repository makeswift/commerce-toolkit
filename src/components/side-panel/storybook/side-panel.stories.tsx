import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sliders, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/button';
import { SidePanel, type SidePanelProps } from '@/components/side-panel';
import * as SidePanelPrimitive from '@/components/side-panel/primitives';

const meta: Meta<typeof SidePanel> = {
  title: 'Components/SidePanel',
  component: SidePanel,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A slide-out panel component for displaying supplementary content like filters, settings, or navigation. Built on Radix UI Dialog primitives.

## CSS Variables

\`\`\`css
:root {
  --side-panel-fill-overlay: color-mix(in oklab, var(--foreground) 50%, transparent);
  --side-panel-fill: var(--background);
  --side-panel-text-primary: var(--text-primary);
  --side-panel-text-secondary: var(--text-secondary);
  --side-panel-font-title: var(--font-heading);
  --side-panel-font-content: var(--font-body);
}
\`\`\`

## Usage

### High-Level Component

The \`SidePanel\` component provides a simple API with a trigger and content:

\`\`\`tsx
import { SidePanel } from '@/components/side-panel';
import { Button } from '@/components/button';

<SidePanel
  title="Filters"
  trigger={<Button>Open Filters</Button>}
>
  <p>Your filter content here.</p>
</SidePanel>
\`\`\`

### Composable Anatomy

For more control, use the primitive components directly:

\`\`\`tsx
import * as SidePanel from '@/components/side-panel';
import { Button } from '@/components/button';
import { X } from 'lucide-react';

<SidePanel.Root>
  <SidePanel.Trigger asChild>
    <Button>Open Panel</Button>
  </SidePanel.Trigger>
  <SidePanel.Portal>
    <SidePanel.Overlay>
      <SidePanel.Content>
        <SidePanel.Header>
          <SidePanel.Title>Panel Title</SidePanel.Title>
          <SidePanel.CloseButton icon={{ children: <X size={20} /> }} />
        </SidePanel.Header>
        <SidePanel.ScrollArea>
          <SidePanel.Body>
            <p>Panel content goes here.</p>
          </SidePanel.Body>
        </SidePanel.ScrollArea>
      </SidePanel.Content>
    </SidePanel.Overlay>
  </SidePanel.Portal>
</SidePanel.Root>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title displayed at the top of the side panel',
    },
    children: {
      control: false,
      description: 'Content to display in the side panel body',
    },
    trigger: {
      control: false,
      description: 'Trigger element that opens the side panel',
    },
    container: {
      control: false,
      description: 'Optional container element for the portal',
    },
  },
};

export default meta;
type Story = StoryObj<SidePanelProps>;

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
      </div>
    </div>
  );
}

// Default side panel
export const Default: Story = {
  args: {
    title: 'Filters',
    children: <p className="text-contrast-400">Side panel content goes here.</p>,
    trigger: (
      <Button size="medium" variant="primary">
        <Sliders size={20} />
        Filters
      </Button>
    ),
  },
  render: (args) => <SidePanelWrapper {...args} />,
};

// Composable anatomy example
export const ComposableAnatomy: Story = {
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
      setContainer(containerRef.current);
    }, []);

    return (
      <div className="relative flex min-h-[400px] flex-col" ref={containerRef}>
        <div className="flex-1 bg-contrast-100 p-8">
          <SidePanelPrimitive.Root>
            <SidePanelPrimitive.Trigger asChild>
              <Button size="medium" variant="primary">
                Open Panel
              </Button>
            </SidePanelPrimitive.Trigger>
            <SidePanelPrimitive.Portal container={container}>
              <SidePanelPrimitive.Overlay>
                <SidePanelPrimitive.Content>
                  <SidePanelPrimitive.Header>
                    <SidePanelPrimitive.Title>Custom Panel</SidePanelPrimitive.Title>
                    <SidePanelPrimitive.CloseButton
                      icon={{ children: <X size={20} strokeWidth={1} /> }}
                    />
                  </SidePanelPrimitive.Header>
                  <SidePanelPrimitive.ScrollArea>
                    <SidePanelPrimitive.Body>
                      <p className="text-contrast-400">
                        Using primitives for custom panel layouts.
                      </p>
                    </SidePanelPrimitive.Body>
                  </SidePanelPrimitive.ScrollArea>
                </SidePanelPrimitive.Content>
              </SidePanelPrimitive.Overlay>
            </SidePanelPrimitive.Portal>
          </SidePanelPrimitive.Root>
        </div>
      </div>
    );
  },
};
