import * as PricePrimitive from '@/components/price';

interface PriceDefault {
  type: 'default';
  value: string;
}

interface PriceRange {
  type: 'range';
  minValue: string;
  maxValue: string;
}

interface PriceSale {
  type: 'sale';
  previousValue: string;
  currentValue: string;
}

type PriceType = PriceDefault | PriceRange | PriceSale;

export interface PriceProps extends PricePrimitive.RootProps {
  price: PriceType;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --price-light-text: hsl(var(--foreground));
 *   --price-light-sale-text: hsl(var(--foreground));
 *   --price-dark-text: hsl(var(--background));
 *   --price-dark-sale-text: hsl(var(--background));
 * }
 * ```
 */
export function Price({ className, price, ...props }: PriceProps) {
  return (
    <PricePrimitive.Root className={className} {...props}>
      {price.type === 'range' && (
        <>
          <PricePrimitive.Default>{price.minValue}</PricePrimitive.Default>
          {' – '}
          <PricePrimitive.Default>{price.maxValue}</PricePrimitive.Default>
        </>
      )}
      {price.type === 'sale' && (
        <>
          <PricePrimitive.Strike>{price.currentValue}</PricePrimitive.Strike>{' '}
          <PricePrimitive.Default>{price.previousValue}</PricePrimitive.Default>
        </>
      )}
      {price.type === 'default' && <PricePrimitive.Default>{price.value}</PricePrimitive.Default>}
    </PricePrimitive.Root>
  );
}
