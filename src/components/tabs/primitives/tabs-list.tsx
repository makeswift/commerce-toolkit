'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import type { ComponentProps } from 'react';
import { useEffect, useRef } from 'react';

import { useTabs } from '@/components/tabs';
import { cn } from '@/lib';

export type TabsListProps = ComponentProps<typeof TabsPrimitive.List>;

export function TabsList({ className, ...props }: TabsListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeValue } = useTabs();

  useEffect(() => {
    if (!containerRef.current) return;

    const activeItem = containerRef.current.querySelector(`[data-state="active"]`);

    if (!(activeItem instanceof HTMLElement)) return;

    const activeItemRect = activeItem.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    // Calculate the midpoint of the active item and container
    const activeItemMid = activeItemRect.left + activeItemRect.width / 2;
    const containerMid = containerRect.left + containerRect.width / 2;

    // Scroll to center the active tab
    containerRef.current.scroll({
      left: containerRef.current.scrollLeft + (activeItemMid - containerMid),
      behavior: 'smooth',
    });
  }, [activeValue]);

  return (
    <TabsPrimitive.List
      className={cn(
        'scrollbar-none flex overflow-x-auto border-b border-[var(--tabs-border,var(--contrast-100))]',
        className,
      )}
      data-slot="tabs-list"
      ref={containerRef}
      {...props}
    />
  );
}
