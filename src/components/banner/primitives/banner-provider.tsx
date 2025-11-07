'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface BannerContext {
  id: string;
  isInitialized: boolean;
  isDismissed: boolean;
  hideDismiss: boolean;
  dismissBanner: () => void;
}

export const BannerContext = createContext<BannerContext | undefined>(undefined);

export interface BannerProviderProps {
  id: string;
  hideDismiss?: boolean;
  onDismiss?: () => void;
  children: ReactNode;
}

export function BannerProvider({
  id,
  hideDismiss = false,
  onDismiss,
  children,
}: BannerProviderProps) {
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const hidden = localStorage.getItem(`${id}-hidden-banner`) === 'true';
    setIsDismissed(hidden);
    setIsInitialized(true);
  }, [id]);

  const dismissBanner = () => {
    setIsDismissed(true);
    localStorage.setItem(`${id}-hidden-banner`, 'true');
    onDismiss?.();
  };

  return (
    <BannerContext.Provider
      value={{
        id,
        isInitialized,
        isDismissed,
        hideDismiss,
        dismissBanner,
      }}
    >
      {isInitialized ? children : null}
    </BannerContext.Provider>
  );
}

export function useBanner() {
  const context = useContext(BannerContext);

  if (context === undefined) {
    throw new Error('useBanner must be used within a BannerProvider');
  }

  return context;
}
