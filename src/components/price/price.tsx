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
export function Price({ className, colorScheme = 'light', price, ...props }: PriceProps) {
  function renderPrice(priceType: PriceType) {
    if (priceType.type === 'range') {
      return (
        <>
          <PricePrimitive.Default>{priceType.minValue}</PricePrimitive.Default>
          {' – '}
          <PricePrimitive.Default>{priceType.maxValue}</PricePrimitive.Default>
        </>
      );
    }

    if (priceType.type === 'sale') {
      return (
        <>
          <PricePrimitive.Strike>{priceType.currentValue}</PricePrimitive.Strike>{' '}
          <PricePrimitive.Default>{priceType.previousValue}</PricePrimitive.Default>
        </>
      );
    }

    return <PricePrimitive.Default>{priceType.value}</PricePrimitive.Default>;
  }

  return (
    <PricePrimitive.Root className={className} colorScheme={colorScheme} {...props}>
      {renderPrice(price)}
    </PricePrimitive.Root>
  );
}
