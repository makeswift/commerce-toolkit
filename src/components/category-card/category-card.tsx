import { clsx } from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

import * as SkeletonPrimitives from '@/components/skeleton';

export interface CategoryCardContent {
  title: string;
  image?: {
    src: string;
    alt: string;
    render?: (props: { src: string; alt: string; className: string }) => ReactNode;
  };
  link: {
    href: string;
    ariaLabel?: string;
    render?: (props: { href: string; ariaLabel?: string; className: string }) => ReactNode;
  };
}

export interface CategoryCardProps extends CategoryCardContent {
  className?: string;
  textColorScheme?: 'light' | 'dark';
  iconColorScheme?: 'light' | 'dark';
  aspectRatio?: '5:6' | '3:4' | '1:1';
  textPosition?: 'inside' | 'outside';
  textSize?: 'small' | 'medium' | 'large' | 'x-large';
  showOverlay?: boolean;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --category-card-focus: hsl(var(--primary));
 *   --category-card-light-offset: hsl(var(--background));
 *   --category-card-light-text: hsl(var(--foreground));
 *   --category-card-light-icon: hsl(var(--foreground));
 *   --category-card-light-background: hsl(var(--contrast-100));
 *   --category-card-dark-offset: hsl(var(--foreground));
 *   --category-card-dark-text: hsl(var(--background));
 *   --category-card-dark-icon: hsl(var(--background));
 *   --category-card-dark-background: hsl(var(--contrast-500));
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
  textColorScheme = 'light',
  iconColorScheme = 'light',
  aspectRatio = '5:6',
  textPosition = 'outside',
  textSize = 'small',
  showOverlay = true,
}: CategoryCardProps) {
  const renderImage = () => {
    if (!image) {
      return (
        <div
          className={clsx(
            'break-words pl-5 pt-5 text-4xl font-bold leading-[0.8] tracking-tighter opacity-25 transition-transform duration-500 ease-out group-hover:scale-105 @xs:text-7xl',
            {
              light: 'text-[var(--category-card-light-text,hsl(var(--foreground)))]',
              dark: 'text-[var(--category-card-dark-text,hsl(var(--background)))]',
            }[textColorScheme],
          )}
        >
          {title}
        </div>
      );
    }

    const imageClassName = clsx(
      'w-full scale-100 select-none object-cover transition-transform duration-500 ease-out group-hover:scale-110',
      {
        light: 'bg-[var(--category-card-light-background,hsl(var(--contrast-100)))]',
        dark: 'bg-[var(--category-card-dark-background,hsl(var(--contrast-500)))]',
      }[textColorScheme],
    );

    if (image.render) {
      return image.render({ src: image.src, alt: image.alt, className: imageClassName });
    }

    return <img alt={image.alt} className={imageClassName} src={image.src} />;
  };

  const renderLink = () => {
    const linkClassName = clsx(
      'rounded-[--category-card-border-radius,1rem] focus:outline-none focus-visible:ring-[var(--category-card-focus,hsl(var(--primary)))] absolute inset-0 focus-visible:ring-2 focus-visible:ring-offset-4',
      {
        light: 'ring-offset-[var(--category-card-light-offset,hsl(var(--background)))]',
        dark: 'ring-offset-[var(--category-card-dark-offset,hsl(var(--foreground)))]',
      }[textColorScheme],
    );

    if (link.render) {
      return link.render({ href: link.href, ariaLabel: link.ariaLabel, className: linkClassName });
    }

    return (
      <a className={linkClassName} href={link.href}>
        <span className="sr-only">{link.ariaLabel ?? 'View product'}</span>
      </a>
    );
  };

  return (
    <article
      className={clsx(
        'group relative flex w-full max-w-md cursor-pointer flex-col gap-2 rounded-[--category-card-border-radius,1rem] font-[var(--category-card-font-family,var(--font-family-body))] @container',
        {
          small: 'gap-2',
          medium: 'gap-3',
          large: 'gap-4',
          'x-large': 'gap-5',
        }[textSize],
        className,
      )}
    >
      <ArrowUpRight
        className={clsx(
          'absolute right-5 top-5 z-10 transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5',
          {
            light: 'text-[var(--category-card-light-icon,hsl(var(--foreground)))]',
            dark: 'text-[var(--category-card-dark-icon,hsl(var(--background)))]',
          }[iconColorScheme],
        )}
        strokeWidth={1.5}
      />
      <div
        className={clsx(
          'relative overflow-hidden rounded-[inherit] group-focus:ring-[var(--category-card-focus,hsl(var(--primary)))] group-focus-visible:ring-2',
          {
            light: 'bg-[var(--category-card-light-background,hsl(var(--contrast-100)))]',
            dark: 'bg-[var(--category-card-dark-background,hsl(var(--contrast-500)))]',
          }[textColorScheme],
          {
            '5:6': 'aspect-[5/6]',
            '3:4': 'aspect-[3/4]',
            '1:1': 'aspect-square',
          }[aspectRatio],
        )}
      >
        {renderImage()}
        {textPosition === 'inside' && (
          <div
            className={clsx(
              'absolute inset-0 flex items-end p-6 @xs:p-8',
              showOverlay &&
                'bg-gradient-to-b from-foreground/0 from-50% via-foreground/0 via-50% to-foreground/50 to-100%',
            )}
          >
            <h3
              className={clsx(
                'font-medium leading-tight',
                {
                  small: 'text-lg tracking-normal @xs:text-xl',
                  medium: 'text-xl tracking-normal @xs:text-2xl',
                  large: 'text-2xl tracking-tight @xs:text-3xl',
                  'x-large': 'text-3xl tracking-tight @xs:text-4xl',
                }[textSize],
                {
                  light: 'text-[var(--category-card-light-text,hsl(var(--foreground)))]',
                  dark: 'text-[var(--category-card-dark-text,hsl(var(--background)))]',
                }[textColorScheme],
              )}
            >
              {title}
            </h3>
          </div>
        )}
      </div>
      {textPosition === 'outside' && (
        <h3
          className={clsx(
            'line-clamp-1 font-medium leading-tight',
            {
              small: 'text-lg tracking-normal @xs:text-xl',
              medium: 'text-xl tracking-normal @xs:text-2xl',
              large: 'text-2xl tracking-tight @xs:text-3xl',
              'x-large': 'text-3xl tracking-tight @xs:text-4xl',
            }[textSize],
            {
              light: 'text-[var(--category-card-light-text,hsl(var(--foreground)))]',
              dark: 'text-[var(--category-card-dark-text,hsl(var(--background)))]',
            }[textColorScheme],
          )}
        >
          {title}
        </h3>
      )}
      {renderLink()}
    </article>
  );
}

export function CategoryCardSkeleton({
  aspectRatio = '5:6',
  className,
}: Pick<CategoryCardProps, 'aspectRatio' | 'className'>) {
  return (
    <div className={clsx('@container', className)}>
      <SkeletonPrimitives.Box
        className={clsx(
          'rounded-[--category-card-border-radius,1rem]',
          {
            '5:6': 'aspect-[5/6]',
            '3:4': 'aspect-[3/4]',
            '1:1': 'aspect-square',
          }[aspectRatio],
        )}
      />
      <div className="mt-3">
        <SkeletonPrimitives.Text characterCount={10} className="rounded text-lg" />
      </div>
    </div>
  );
}
