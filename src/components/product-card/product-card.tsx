import { type PriceProps } from '@/components/price';
import * as ProductCardPrimitive from '@/components/product-card';

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
  price?: PriceProps['price'];
  subtitle?: string;
  badge?: string;
  rating?: number;
}

interface CompareActions {
  checked?: boolean;
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  disabled?: boolean;
  label: string;
}

export interface ProductCardProps {
  className?: string;
  aspectRatio?: '5/6' | '3/4' | '1/1';
  compareActions?: CompareActions;
  product: Product;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --product-card-focus: var(--primary);
 *   --product-card-empty-text: color-mix(in oklab, hsl(var(--foreground)) 15%, transparent);
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
  product: { title, subtitle, badge, price, image, link },
  className,
  aspectRatio = '5/6',
  compareActions,
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
          <ProductCardPrimitive.Link aria-label={link.ariaLabel} href={link.href} />
        </ProductCardPrimitive.Header>
        {compareActions && (
          <ProductCardPrimitive.Compare>
            <ProductCardPrimitive.Checkbox {...compareActions} />
            <ProductCardPrimitive.Label>{compareActions.label}</ProductCardPrimitive.Label>
          </ProductCardPrimitive.Compare>
        )}
      </ProductCardPrimitive.Details>
    </ProductCardPrimitive.Root>
  );
}
