'use client';

import type { ComponentProps, ReactNode } from 'react';

import { Button } from '@/components/button';
import * as SidePanelPrimitive from '@/components/side-panel';
import { cn } from '@/lib';

export interface SidePanelCloseButtonProps extends Omit<ComponentProps<typeof Button>, 'children'> {
  icon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

export function SidePanelCloseButton({ className, icon, ...props }: SidePanelCloseButtonProps) {
  return (
    <SidePanelPrimitive.Close asChild>
      <Button
        className={cn(className)}
        data-slot="side-panel-close-button"
        shape="circle"
        size="small"
        variant="outline"
        {...props}
      >
        {icon?.children}
      </Button>
    </SidePanelPrimitive.Close>
  );
}
