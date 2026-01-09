'use client';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { createContext, useContext, useMemo } from 'react';
import type { ComponentProps } from 'react';

interface DropdownMenuContext {
  align: 'start' | 'center' | 'end';
  sideOffset: number;
  showScrollArea: boolean;
  maxHeight: number;
}

export const DropdownMenuContext = createContext<DropdownMenuContext | undefined>(undefined);

export type DropdownMenuRootProps = ComponentProps<typeof DropdownMenuPrimitive.Root> & {
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  showScrollArea?: boolean;
  maxHeight?: number;
};

export function DropdownMenuRoot({
  align = 'end',
  sideOffset = 6,
  showScrollArea = true,
  maxHeight = 320,
  children,
  ...props
}: DropdownMenuRootProps) {
  const contextValues = useMemo(
    () => ({
      align,
      sideOffset,
      showScrollArea,
      maxHeight,
    }),
    [align, sideOffset, showScrollArea, maxHeight],
  );

  return (
    <DropdownMenuContext.Provider value={contextValues}>
      <DropdownMenuPrimitive.Root {...props}>{children}</DropdownMenuPrimitive.Root>
    </DropdownMenuContext.Provider>
  );
}

export function useDropdownMenu() {
  const context = useContext(DropdownMenuContext);

  if (context === undefined) {
    throw new Error('useDropdownMenu must be used within a DropdownMenuRoot');
  }

  return context;
}
