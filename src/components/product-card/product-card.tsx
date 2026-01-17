import type { ReactNode } from 'react';

import { type PriceProps } from '@/components/price';
import * as ProductCardPrimitive from '@/components/product-card';
import { type RatingProps } from '@/components/rating';

interface Product {
  id: string;
  title: string;
  link: {
    href: string;
    ariaLabel: string;
    asChild?: boolean;
    children?: ReactNode;
  };
  image?: {
    src: string;
    alt: string;
    asChild?: boolean;
    children?: ReactNode;
  };
  subtitle?: string;
  badge?: string;
  showRating: boolean;
  rating?: RatingProps['rating'];
  price?: PriceProps['price'];
}

interface CompareAction {
  id: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  disabled?: boolean;
  label: string;
}

interface CartActionForm {
  type: 'form';
  action: (formData: FormData) => void | Promise<void>;
  disabled?: boolean;
  label: string;
  loading?: boolean;
}

interface CartActionLinkWithLabel {
  type: 'link';
  href: string;
  label: string;
  asChild?: false;
}

interface CartActionLinkAsChild {
  type: 'link';
  href: string;
  asChild: true;
  children: ReactNode;
  label?: string;
}

type CartActionLink = CartActionLinkWithLabel | CartActionLinkAsChild;

type CartAction = CartActionForm | CartActionLink;

export interface ProductCardProps {
  className?: string;
  aspectRatio?: '5/6' | '3/4' | '1/1';
  product: Product;
  compareAction?: CompareAction;
  cartAction?: CartAction;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --product-card-text-primary: var(--text-primary);
 *   --product-card-text-secondary: var(--text-secondary);
 *   --product-card-font-title: var(--font-body);
 *   --product-card-font-subtitle: var(--font-body);
 *   --product-card-radius: 1rem;
 * }
 * ```
 */
export function ProductCard({
  product: { id, title, subtitle, badge, price, rating, image, link, showRating },
  className,
  aspectRatio = '5/6',
  compareAction,
  cartAction,
}: ProductCardProps) {
  return (
    <ProductCardPrimitive.Root aspectRatio={aspectRatio} className={className}>
      <ProductCardPrimitive.Preview>
        <ProductCardPrimitive.Thumbnail>
          {image ? (
            <ProductCardPrimitive.Image alt={image.alt} asChild={image.asChild} src={image.src}>
              {image.children}
            </ProductCardPrimitive.Image>
          ) : (
            <ProductCardPrimitive.Fallback>{title}</ProductCardPrimitive.Fallback>
          )}
          {badge != null && badge !== '' && (
            <ProductCardPrimitive.Badge>{badge}</ProductCardPrimitive.Badge>
          )}
        </ProductCardPrimitive.Thumbnail>
        <ProductCardPrimitive.Link
          aria-label={link.ariaLabel}
          asChild={link.asChild}
          href={link.href}
        >
          {link.children}
        </ProductCardPrimitive.Link>
      </ProductCardPrimitive.Preview>
      <ProductCardPrimitive.Details>
        <ProductCardPrimitive.Header>
          <ProductCardPrimitive.Title>{title}</ProductCardPrimitive.Title>
          {subtitle != null && subtitle !== '' && (
            <ProductCardPrimitive.Subtitle>{subtitle}</ProductCardPrimitive.Subtitle>
          )}
          {price && <ProductCardPrimitive.Price price={price} />}
          {showRating && rating != null && <ProductCardPrimitive.Rating rating={rating} />}
          <ProductCardPrimitive.Link
            aria-label={link.ariaLabel}
            asChild={link.asChild}
            href={link.href}
          >
            {link.children}
          </ProductCardPrimitive.Link>
        </ProductCardPrimitive.Header>
      </ProductCardPrimitive.Details>
      {(cartAction != null || compareAction != null) && (
        <ProductCardPrimitive.Actions>
          {cartAction?.type === 'form' && (
            <ProductCardPrimitive.Form action={cartAction.action}>
              <ProductCardPrimitive.Input name="id" type="hidden" value={id} />
              <ProductCardPrimitive.CartButton
                disabled={cartAction.disabled}
                loading={cartAction.loading}
                type="submit"
              >
                {cartAction.label}
              </ProductCardPrimitive.CartButton>
            </ProductCardPrimitive.Form>
          )}
          {cartAction?.type === 'link' && (
            <ProductCardPrimitive.CartLink asChild={cartAction.asChild} href={cartAction.href}>
              {cartAction.asChild === true ? cartAction.children : cartAction.label}
            </ProductCardPrimitive.CartLink>
          )}
          {compareAction != null && (
            <ProductCardPrimitive.Compare
              checked={compareAction.checked}
              disabled={compareAction.disabled}
              id={compareAction.id}
              label={compareAction.label}
              onCheckedChange={compareAction.onCheckedChange}
            />
          )}
        </ProductCardPrimitive.Actions>
      )}
    </ProductCardPrimitive.Root>
  );
}
