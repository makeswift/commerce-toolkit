import { Fragment } from 'react';

import * as CompareCardPrimitive from '@/components/compare-card';
import { ProductCard } from '@/components/product-card';
import type { ProductCardProps } from '@/components/product-card';
import { Reveal } from '@/index';

export interface CompareCardProps {
  className?: string;
  product: ProductCardProps['product'];
  cartAction?: ProductCardProps['cartAction'];
  compareAction?: ProductCardProps['compareAction'];
  description?: string;
  descriptionLabel?: string;
  emptyDescriptionLabel?: string;
  specs?: Array<{ name: string; value: string }>;
  specsLabel?: string;
  emptySpecsLabel?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --compare-card-divider: var(--contrast-100);
 *   --compare-card-label: var(--foreground);
 *   --compare-card-description: var(--contrast-400);
 *   --compare-card-field: var(--foreground);
 *   --compare-card-font-family-primary: var(--font-family-body);
 *   --compare-card-font-family-secondary: var(--font-family-mono);
 * }
 * ```
 */
export function CompareCard({
  className,
  product,
  cartAction,
  compareAction,
  description,
  descriptionLabel = 'Description',
  emptyDescriptionLabel = 'There is no description available.',
  specs,
  specsLabel = 'Other details',
  emptySpecsLabel = 'There are no other details.',
}: CompareCardProps) {
  return (
    <CompareCardPrimitive.Root className={className}>
      <CompareCardPrimitive.Product>
        <ProductCard cartAction={cartAction} compareAction={compareAction} product={product} />
      </CompareCardPrimitive.Product>
      <CompareCardPrimitive.Description>
        <CompareCardPrimitive.DescriptionLabel>
          {descriptionLabel}
        </CompareCardPrimitive.DescriptionLabel>
        {description != null ? (
          <Reveal>
            <CompareCardPrimitive.DescriptionContent>
              {description}
            </CompareCardPrimitive.DescriptionContent>
          </Reveal>
        ) : (
          <CompareCardPrimitive.DescriptionEmpty>
            {emptyDescriptionLabel}
          </CompareCardPrimitive.DescriptionEmpty>
        )}
      </CompareCardPrimitive.Description>
      <CompareCardPrimitive.Specs>
        <CompareCardPrimitive.SpecsLabel>{specsLabel}</CompareCardPrimitive.SpecsLabel>
        {specs ? (
          <Reveal>
            <CompareCardPrimitive.SpecsList>
              {specs.map(({ name, value }, index) => (
                <Fragment key={index}>
                  <CompareCardPrimitive.SpecsTerm>{name}: </CompareCardPrimitive.SpecsTerm>
                  <CompareCardPrimitive.SpecsDefinition>
                    {value}
                  </CompareCardPrimitive.SpecsDefinition>
                </Fragment>
              ))}
            </CompareCardPrimitive.SpecsList>
          </Reveal>
        ) : (
          <CompareCardPrimitive.SpecsEmpty>{emptySpecsLabel}</CompareCardPrimitive.SpecsEmpty>
        )}
      </CompareCardPrimitive.Specs>
    </CompareCardPrimitive.Root>
  );
}
