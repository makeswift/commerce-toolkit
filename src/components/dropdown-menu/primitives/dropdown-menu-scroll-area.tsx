'use client';

import type { ComponentProps } from 'react';

import { ScrollArea } from '@/components/scroll-area';
import { cn } from '@/lib';

import { useDropdownMenu } from './dropdown-menu-root';

export type DropdownMenuScrollAreaProps = ComponentProps<typeof ScrollArea>;

export function DropdownMenuScrollArea({
  className,
  children,
  ...props
}: DropdownMenuScrollAreaProps) {
  const { showScrollArea, maxHeight } = useDropdownMenu();

  return (
    <ScrollArea
      className={cn(showScrollArea && 'flex flex-col')}
      style={{ maxHeight: showScrollArea ? `${maxHeight}px` : undefined }}
      {...props}
    >
      <div
        className={cn('flex flex-col gap-0.5 rounded-[inherit] p-2', className)}
        data-slot="dropdown-menu-scroll-area"
      >
        {children}
      </div>
    </ScrollArea>
  );
}
