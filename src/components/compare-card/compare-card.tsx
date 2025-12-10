import type { ReactNode } from 'react';
import { Fragment } from 'react';

import { Button } from '@/components/button';
import { ButtonLink } from '@/components/button-link';
import * as CompareCardPrimitive from '@/components/compare-card';
import { ProductCard } from '@/components/product-card';
import type { ProductCardProps } from '@/components/product-card';
import { Rating } from '@/components/rating';
import { Reveal } from '@/index';

type CompareCardProduct = ProductCardProps['product'] & {
  description?: string | ReactNode;
  specs?: Array<{ name: string; value: string }>;
  hasVariants?: boolean;
  disabled?: boolean;
  isPreorder?: boolean;
};

export interface CompareCardProps {
  className?: string;
  product: CompareCardProduct;
  addToCartLabel?: string;
  descriptionLabel?: string;
  noDescriptionLabel?: string;
  ratingLabel?: string;
  noRatingsLabel?: string;
  otherDetailsLabel?: string;
  noOtherDetailsLabel?: string;
  viewOptionsLabel?: string;
  preorderLabel?: string;
  addToCartAction?: string | ((formData: FormData) => void | Promise<void>);
  loading?: boolean;
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
  addToCartAction,
  addToCartLabel = 'Add to cart',
  descriptionLabel = 'Description',
  noDescriptionLabel = 'There is no description available.',
  ratingLabel = 'Rating',
  noRatingsLabel = 'There are no reviews.',
  otherDetailsLabel = 'Other details',
  noOtherDetailsLabel = 'There are no other details.',
  viewOptionsLabel = 'View options',
  preorderLabel = 'Preorder',
  loading = false,
}: CompareCardProps) {
  const {
    id,
    rating,
    description,
    specs,
    disabled,
    isPreorder,
    hasVariants,
    link: { href },
  } = product;

  return (
    <CompareCardPrimitive.Root className={className}>
      <CompareCardPrimitive.Product>
        <ProductCard product={product} />
        {addToCartAction != null &&
          (hasVariants === false ? (
            <CompareCardPrimitive.Form action={addToCartAction}>
              <CompareCardPrimitive.FormInput name="id" type="hidden" value={id} />
              <Button
                className="w-full"
                disabled={disabled}
                loading={loading}
                size="medium"
                type="submit"
              >
                {isPreorder === true ? preorderLabel : addToCartLabel}
              </Button>
            </CompareCardPrimitive.Form>
          ) : (
            <ButtonLink className="w-full" href={href} size="medium">
              {viewOptionsLabel}
            </ButtonLink>
          ))}
      </CompareCardPrimitive.Product>
      <CompareCardPrimitive.Rating>
        <CompareCardPrimitive.RatingLabel>{ratingLabel}</CompareCardPrimitive.RatingLabel>
        {rating != null ? (
          <Rating rating={rating} />
        ) : (
          <CompareCardPrimitive.RatingEmpty>{noRatingsLabel}</CompareCardPrimitive.RatingEmpty>
        )}
      </CompareCardPrimitive.Rating>
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
            {noDescriptionLabel}
          </CompareCardPrimitive.DescriptionEmpty>
        )}
      </CompareCardPrimitive.Description>
      <CompareCardPrimitive.Specs>
        <CompareCardPrimitive.SpecsLabel>{otherDetailsLabel}</CompareCardPrimitive.SpecsLabel>
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
          <CompareCardPrimitive.SpecsEmpty>{noOtherDetailsLabel}</CompareCardPrimitive.SpecsEmpty>
        )}
      </CompareCardPrimitive.Specs>
    </CompareCardPrimitive.Root>
  );
}
