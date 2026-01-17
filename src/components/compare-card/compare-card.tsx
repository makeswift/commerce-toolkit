import * as CompareCardPrimitive from '@/components/compare-card';
import type { CompareCardNode } from '@/components/compare-card';
import type { ProductCardProps } from '@/components/product-card';

export interface CompareCardProps {
  className?: string;
  productCard: Omit<ProductCardProps, 'className'>;
  nodes?: CompareCardNode[];
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --compare-card-font: var(--font-body);
 *   --compare-card-text-primary: var(--text-primary);
 *   --compare-card-text-secondary: var(--text-secondary);
 * }
 * ```
 */
export function CompareCard({ className, productCard, nodes = [] }: CompareCardProps) {
  return (
    <CompareCardPrimitive.Root className={className}>
      <CompareCardPrimitive.Product>
        <CompareCardPrimitive.ProductCard {...productCard} />
      </CompareCardPrimitive.Product>
      {nodes.map((node, index) => (
        <CompareCardPrimitive.Node compareCardNode={node} key={index} />
      ))}
    </CompareCardPrimitive.Root>
  );
}
