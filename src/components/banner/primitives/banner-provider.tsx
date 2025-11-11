'use client';

import { createContext, use, useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

export interface BannerProviderProps {
  id: string;
  hideDismiss: boolean;
  children: ReactNode;
  onDismiss?: () => void;
}

export interface BannerContext extends Pick<BannerProviderProps, 'id' | 'hideDismiss'> {
  isInitialized: boolean;
  isDismissed: boolean;
  handleDismiss: () => void;
}

export const BannerContext = createContext<BannerContext | undefined>(undefined);

export function BannerProvider({ id, hideDismiss, onDismiss, children }: BannerProviderProps) {
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
      isInitialized,
      isDismissed,
      hideDismiss,
      handleDismiss,
    }),
    [id, isInitialized, isDismissed, hideDismiss, handleDismiss],
  );

  return (
    <BannerContext.Provider value={contextValues}>
      {isInitialized ? children : null}
    </BannerContext.Provider>
  );
}

export function useBanner() {
  const context = use(BannerContext);

  if (context === undefined) {
    throw new Error('useBanner must be used within a BannerProvider');
  }

  return context;
}
