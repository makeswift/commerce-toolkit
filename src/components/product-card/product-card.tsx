import { type ReactNode } from 'react';

import { Button } from '@/components/button';
import { ButtonLink } from '@/components/button-link';
import { Checkbox } from '@/components/checkbox';
import * as FieldPrimitive from '@/components/field/primitives';
import { Label } from '@/components/label';
import { type PriceProps } from '@/components/price';
import * as ProductCardPrimitive from '@/components/product-card';
import { type RatingProps } from '@/components/rating';

interface Product {
  id: string;
  title: string;
  link: {
    href: string;
    ariaLabel: string;
  };
  image?: {
    src: string;
    alt: string;
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
 *   --product-card-focus: var(--brand);
 *   --product-card-empty-text: color-mix(in oklab, var(--foreground) 15%, transparent);
 *   --product-card-light-offset: var(--background);
 *   --product-card-light-background: var(--contrast-100);
 *   --product-card-light-title: var(--foreground);
 *   --product-card-light-subtitle: color-mix(in oklab, var(--foreground) 75%, transparent);
 *   --product-card-dark-offset: var(--foreground);
 *   --product-card-dark-background: var(--contrast-500);
 *   --product-card-dark-title: var(--background);
 *   --product-card-dark-subtitle: color-mix(in oklab, var(--background) 75%, transparent);
 *   --product-card-font-family: var(--font-family-body);
 *   --product-card-border-radius: 1rem;
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
            <ProductCardPrimitive.Image alt={image.alt} src={image.src} />
          ) : (
            <ProductCardPrimitive.Fallback>{title}</ProductCardPrimitive.Fallback>
          )}
          {badge != null && badge !== '' && (
            <ProductCardPrimitive.Badge>{badge}</ProductCardPrimitive.Badge>
          )}
        </ProductCardPrimitive.Thumbnail>
        <ProductCardPrimitive.Link aria-label={link.ariaLabel} href={link.href} />
      </ProductCardPrimitive.Preview>
      <ProductCardPrimitive.Details>
        <ProductCardPrimitive.Header>
          <ProductCardPrimitive.Title>{title}</ProductCardPrimitive.Title>
          {subtitle != null && subtitle !== '' && (
            <ProductCardPrimitive.Subtitle>{subtitle}</ProductCardPrimitive.Subtitle>
          )}
          {price && <ProductCardPrimitive.Price price={price} />}
          {showRating && rating != null && <ProductCardPrimitive.Rating rating={rating} />}
          <ProductCardPrimitive.Link aria-label={link.ariaLabel} href={link.href} />
        </ProductCardPrimitive.Header>
      </ProductCardPrimitive.Details>
      {(cartAction != null || compareAction != null) && (
        <ProductCardPrimitive.Actions>
          {cartAction?.type === 'form' && (
            <ProductCardPrimitive.Form action={cartAction.action}>
              <ProductCardPrimitive.Input name="id" type="hidden" value={id} />
              <Button
                disabled={cartAction.disabled}
                loading={cartAction.loading}
                size="medium"
                type="submit"
              >
                {cartAction.label}
              </Button>
            </ProductCardPrimitive.Form>
          )}
          {cartAction?.type === 'link' && (
            <ButtonLink asChild={cartAction.asChild} href={cartAction.href} size="medium">
              {cartAction.asChild === true ? cartAction.children : cartAction.label}
            </ButtonLink>
          )}
          {compareAction != null && (
            <FieldPrimitive.Item orientation="horizontal">
              <Checkbox
                checked={compareAction.checked}
                disabled={compareAction.disabled}
                id={compareAction.id}
                onCheckedChange={compareAction.onCheckedChange}
              />
              <Label htmlFor={compareAction.id}>{compareAction.label}</Label>
            </FieldPrimitive.Item>
          )}
        </ProductCardPrimitive.Actions>
      )}
    </ProductCardPrimitive.Root>
  );
}
