'use client';

import { createContext, use, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode, RefObject } from 'react';

export interface RevealContext {
  isOpen: boolean;
  hasOverflow: boolean;
  variant: 'underline' | 'button';
  showLabel: string;
  hideLabel: string;
  maxHeight: string;
  contentRef: RefObject<HTMLDivElement | null>;
  toggleOpen: () => void;
}

export const RevealContext = createContext<RevealContext | undefined>(undefined);

export interface RevealProviderProps {
  variant?: 'underline' | 'button';
  showLabel?: string;
  hideLabel?: string;
  defaultOpen?: boolean;
  maxHeight?: string;
  children: ReactNode;
}

export function RevealProvider({
  children,
  variant = 'underline',
  showLabel = 'Show more',
  hideLabel = 'Show less',
  defaultOpen = false,
  maxHeight = '10rem',
}: RevealProviderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [hasOverflow, setHasOverflow] = useState(true);

  const contentRef = useRef<HTMLDivElement>(null);

  const convertToPixels = useCallback((value: string): number => {
    const num = parseFloat(value);
    if (value.endsWith('rem')) {
      return num * 16; // Convert rem to pixels (1rem = 16px)
    }
    if (value.endsWith('px')) {
      return num;
    }
    return num;
  }, []);

  useEffect(() => {
    function checkHeight() {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;
        const maxHeightPx = convertToPixels(maxHeight);
        setHasOverflow(contentHeight > maxHeightPx);
      }
    }

    checkHeight();

    const resizeObserver = new ResizeObserver(checkHeight);

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [maxHeight, convertToPixels]);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const contextValues = useMemo(
    () => ({
      isOpen,
      hasOverflow,
      variant,
      showLabel,
      hideLabel,
      maxHeight,
      contentRef,
      toggleOpen,
    }),
    [isOpen, hasOverflow, variant, showLabel, hideLabel, maxHeight, toggleOpen],
  );

  return <RevealContext.Provider value={contextValues}>{children}</RevealContext.Provider>;
}

export function useReveal() {
  const context = use(RevealContext);

  if (context === undefined) {
    throw new Error('useReveal must be used within a RevealProvider');
  }

  return context;
}
