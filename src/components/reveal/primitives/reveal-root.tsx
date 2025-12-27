'use client';

import { createContext, use, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ComponentProps, CSSProperties, ReactNode, RefObject } from 'react';

import { cn } from '@/lib';

interface RevealContext {
  isOpen: boolean;
  hasOverflow: boolean;
  variant: 'underline' | 'button';
  showLabel: string;
  hideLabel: string;
  maxHeight: number;
  contentRef: RefObject<HTMLDivElement | null>;
  toggleOpen: () => void;
}

const RevealContext = createContext<RevealContext | undefined>(undefined);

export interface RevealRootProps extends ComponentProps<'div'> {
  variant?: 'underline' | 'button';
  showLabel?: string;
  hideLabel?: string;
  defaultOpen?: boolean;
  maxHeight?: number;
  children: ReactNode;
}

export function RevealRoot({
  children,
  className,
  variant = 'underline',
  showLabel = 'Show more',
  hideLabel = 'Show less',
  defaultOpen = false,
  maxHeight = 160,
  ...props
}: RevealRootProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [hasOverflow, setHasOverflow] = useState(true);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function checkHeight() {
      if (contentRef.current) {
        const contentHeight = contentRef.current.scrollHeight;

        setHasOverflow(contentHeight > maxHeight);
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
  }, [maxHeight]);

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

  const revealStyle: CSSProperties & { '--reveal-max-height': string } = {
    '--reveal-max-height': `${maxHeight}px`,
  };

  return (
    <RevealContext.Provider value={contextValues}>
      <div
        className={cn('group/reveal relative', className)}
        data-open={isOpen}
        data-overflow={hasOverflow}
        data-slot="reveal-root"
        style={revealStyle}
        {...props}
      >
        {children}
      </div>
    </RevealContext.Provider>
  );
}

export function useReveal() {
  const context = use(RevealContext);

  if (context === undefined) {
    throw new Error('useReveal must be used within a RevealRoot');
  }

  return context;
}
