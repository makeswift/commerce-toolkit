'use client';

import { createContext, use, useCallback, useEffect, useMemo, useState } from 'react';
import type { ComponentProps } from 'react';

import { cn } from '@/lib';

interface BannerContext {
  id: string;
  hideDismiss: boolean;
  isDismissed: boolean;
  handleDismiss: () => void;
}

export const BannerContext = createContext<BannerContext | undefined>(undefined);

export type BannerRootProps = ComponentProps<'div'> & {
  id: string;
  hideDismiss?: boolean;
  onDismiss?: () => void;
};

export function BannerRoot({
  id,
  hideDismiss = false,
  onDismiss,
  children,
  className,
  ...props
}: BannerRootProps) {
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const hidden = localStorage.getItem(`${id}-hidden-banner`) === 'true';

    setIsDismissed(hidden);
    setIsInitialized(true);
  }, [id]);

  const handleDismiss = useCallback(() => {
    setIsDismissed(true);
    localStorage.setItem(`${id}-hidden-banner`, 'true');
    onDismiss?.();
  }, [id, onDismiss]);

  const contextValues = useMemo(
    () => ({
      id,
      isDismissed,
      hideDismiss,
      handleDismiss,
    }),
    [id, isDismissed, hideDismiss, handleDismiss],
  );

  if (!isInitialized) return null;

  return (
    <BannerContext.Provider value={contextValues}>
      <div
        className={cn(
          'group/banner overflow-hidden bg-[var(--banner-background,var(--brand))] transition-all duration-300 ease-in @container',
          isDismissed ? 'pointer-events-none max-h-0' : 'max-h-32',
          className,
        )}
        data-slot="banner-root"
        id={id}
        {...props}
      >
        {children}
      </div>
    </BannerContext.Provider>
  );
}

export function useBanner() {
  const context = use(BannerContext);

  if (context === undefined) {
    throw new Error('useBanner must be used within a BannerRoot');
  }

  return context;
}
