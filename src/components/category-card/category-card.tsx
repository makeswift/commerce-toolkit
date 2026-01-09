import type { ReactNode } from 'react';

import * as CategoryCardPrimitive from '@/components/category-card';

export interface CategoryCardContent {
  title: string;
  image?: {
    src: string;
    alt: string;
    asChild?: boolean;
    children?: ReactNode;
  };
  link: {
    href: string;
    ariaLabel: string;
    asChild?: boolean;
    children?: ReactNode;
  };
  icon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

export interface CategoryCardProps extends CategoryCardContent {
  className?: string;
  aspectRatio?: '5/6' | '3/4' | '1/1';
  textSize?: 'small' | 'medium' | 'large' | 'x-large';
  textPosition?: 'inside' | 'outside';
  showOverlay?: boolean;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --category-card-focus: var(--brand);
 *   --category-card-light-offset: var(--background);
 *   --category-card-light-text: var(--foreground);
 *   --category-card-light-icon: var(--foreground);
 *   --category-card-light-background: var(--contrast-100);
 *   --category-card-dark-offset: var(--foreground);
 *   --category-card-dark-text: var(--background);
 *   --category-card-dark-icon: var(--background);
 *   --category-card-dark-background: var(--contrast-500);
 *   --category-card-font-family: var(--font-family-body);
 *   --category-card-border-radius: 1rem;
 * }
 * ```
 */
export function CategoryCard({
  className,
  title,
  image,
  link,
  icon,
  aspectRatio = '5/6',
  textPosition = 'outside',
  textSize = 'small',
  showOverlay = true,
}: CategoryCardProps) {
  return (
    <CategoryCardPrimitive.Root
      aspectRatio={aspectRatio}
      className={className}
      showOverlay={showOverlay}
      textSize={textSize}
    >
      <CategoryCardPrimitive.Icon asChild={icon?.asChild}>
        {icon?.children}
      </CategoryCardPrimitive.Icon>
      <CategoryCardPrimitive.Thumbnail>
        {image ? (
          <CategoryCardPrimitive.Image alt={image.alt} asChild={image.asChild} src={image.src}>
            {image.children}
          </CategoryCardPrimitive.Image>
        ) : (
          <CategoryCardPrimitive.Fallback>{title}</CategoryCardPrimitive.Fallback>
        )}
        {textPosition === 'inside' && (
          <CategoryCardPrimitive.Overlay>
            <CategoryCardPrimitive.Title>{title}</CategoryCardPrimitive.Title>
          </CategoryCardPrimitive.Overlay>
        )}
      </CategoryCardPrimitive.Thumbnail>
      {textPosition === 'outside' && (
        <CategoryCardPrimitive.Title>{title}</CategoryCardPrimitive.Title>
      )}
      <CategoryCardPrimitive.Link
        aria-label={link.ariaLabel}
        asChild={link.asChild}
        href={link.href}
      >
        {link.children}
      </CategoryCardPrimitive.Link>
    </CategoryCardPrimitive.Root>
  );
}
