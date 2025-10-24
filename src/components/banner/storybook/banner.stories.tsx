'use client';

import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { Banner, type BannerProps } from '@/components/banner';
import { Button } from '@/components/button';

// Wrapper component to handle banner reset functionality
const BannerWithReset = ({
  id,
  children,
  hideDismiss,
  onDismiss,
}: {
  id: string;
  children: ReactNode;
  hideDismiss?: boolean;
  onDismiss?: () => void;
}) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Clear localStorage on mount
    localStorage.removeItem(`${id}-hidden-banner`);
  }, [id]);

  const handleReset = () => {
    localStorage.removeItem(`${id}-hidden-banner`);
    setKey((prev) => prev + 1);
  };

  return (
    <div className="pb-4">
      <Banner hideDismiss={hideDismiss} id={id} key={key} onDismiss={onDismiss}>
        {children}
      </Banner>
      <div className="mt-8 flex justify-center">
        <Button onClick={handleReset} variant="secondary">
          Reset Banner
        </Button>
      </div>
    </div>
  );
};

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for localStorage persistence',
    },
    children: {
      control: 'text',
      description: 'The content to display in the banner',
    },
    hideDismiss: {
      control: 'boolean',
      description: 'Whether to hide the dismiss button',
    },
  },
};

export default meta;
type Story = StoryObj<BannerProps>;

export const Default: Story = {
  render: () => (
    <BannerWithReset id="default-banner">
      Get 15% off and free shipping with discount code &quot;WELCOME&quot;
    </BannerWithReset>
  ),
};

export const WithoutDismiss: Story = {
  render: () => (
    <BannerWithReset hideDismiss id="no-dismiss-banner">
      Important: Our store will be closed on December 25th
    </BannerWithReset>
  ),
};

export const ShippingPromotion: Story = {
  render: () => (
    <BannerWithReset id="shipping-promo-banner">
      🚚 <strong>Free shipping</strong> on all orders over $50
    </BannerWithReset>
  ),
};

export const SaleAnnouncement: Story = {
  render: () => (
    <BannerWithReset id="sale-banner">
      ✨ <strong>Summer Sale:</strong> Up to 50% off select items. Shop now!
    </BannerWithReset>
  ),
};

export const NewArrival: Story = {
  render: () => (
    <BannerWithReset id="new-arrival-banner">
      🎉 New collection just dropped! <strong>Explore now</strong>
    </BannerWithReset>
  ),
};

export const LimitedTimeOffer: Story = {
  render: () => (
    <BannerWithReset id="limited-offer-banner">
      ⏰ <strong>24 Hour Flash Sale</strong> - Extra 20% off everything!
    </BannerWithReset>
  ),
};

export const LongMessage: Story = {
  render: () => (
    <BannerWithReset id="long-message-banner">
      Welcome to our store! We are currently offering free shipping on all orders over $50, plus get
      an additional 15% off your first order with code WELCOME15. Limited time offer!
    </BannerWithReset>
  ),
};

export const WithCallback: Story = {
  render: () => (
    <BannerWithReset id="callback-banner" onDismiss={() => console.log('Banner dismissed!')}>
      This banner logs to console when dismissed
    </BannerWithReset>
  ),
};

export const InteractiveBanner = () => {
  const [key, setKey] = useState(0);
  const bannerId = 'interactive-banner';

  useEffect(() => {
    // Clear localStorage on mount
    localStorage.removeItem(`${bannerId}-hidden-banner`);
  }, []);

  const handleReset = () => {
    localStorage.removeItem(`${bannerId}-hidden-banner`);
    setKey((prev) => prev + 1);
  };

  return (
    <div className="pb-4">
      <Banner id={bannerId} key={key}>
        Get <strong>15% off</strong> and free shipping with discount code{' '}
        <strong>&quot;WELCOME&quot;</strong>
      </Banner>
      <div className="mt-8 flex justify-center">
        <Button onClick={handleReset} variant="secondary">
          Reset Banner
        </Button>
      </div>
    </div>
  );
};

export const MultipleBanners = () => {
  const [keys, setKeys] = useState({ banner1: 0, banner2: 0, banner3: 0 });

  useEffect(() => {
    // Clear localStorage on mount
    localStorage.removeItem('banner-1-hidden-banner');
    localStorage.removeItem('banner-2-hidden-banner');
    localStorage.removeItem('banner-3-hidden-banner');
  }, []);

  const handleResetAll = () => {
    localStorage.removeItem('banner-1-hidden-banner');
    localStorage.removeItem('banner-2-hidden-banner');
    localStorage.removeItem('banner-3-hidden-banner');
    setKeys({ banner1: keys.banner1 + 1, banner2: keys.banner2 + 1, banner3: keys.banner3 + 1 });
  };

  return (
    <div className="pb-4">
      <div className="space-y-4">
        <Banner id="banner-1" key={keys.banner1}>
          🎁 <strong>Holiday Sale:</strong> 30% off sitewide!
        </Banner>
        <Banner id="banner-2" key={keys.banner2}>
          🚚 Free shipping on orders over $75
        </Banner>
        <Banner hideDismiss id="banner-3" key={keys.banner3}>
          📢 Store hours: Mon-Fri 9AM-6PM, Sat-Sun 10AM-4PM
        </Banner>
      </div>
      <div className="mt-8 flex justify-center">
        <Button onClick={handleResetAll} variant="secondary">
          Reset All Banners
        </Button>
      </div>
    </div>
  );
};
