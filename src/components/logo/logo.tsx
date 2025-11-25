import { cloneElement, isValidElement, type ReactNode } from 'react';

import * as LogoPrimitive from '@/components/logo';

export interface LogoProps {
  className?: string;
  logo:
    | string
    | {
        src: string;
        alt: string;
      }
    | {
        asChild: true;
        children: ReactNode;
      };
  link:
    | {
        href: string;
        ariaLabel: string;
      }
    | {
        asChild: true;
        children: ReactNode;
      };
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --logo-focus: hsl(var(--primary));
 *   --logo-font-family: var(--font-family-heading);
 *   --logo-text: hsl(var(--foreground));
 * }
 * ```
 */
export function Logo({ className, logo, link }: LogoProps) {
  let logoContent: ReactNode;

  if (typeof logo === 'string') {
    logoContent = <LogoPrimitive.Text>{logo}</LogoPrimitive.Text>;
  } else if ('src' in logo) {
    logoContent = <LogoPrimitive.Image alt={logo.alt} src={logo.src} />;
  } else {
    logoContent = <LogoPrimitive.Image asChild>{logo.children}</LogoPrimitive.Image>;
  }

  if ('href' in link) {
    return (
      <LogoPrimitive.Link aria-label={link.ariaLabel} className={className} href={link.href}>
        {logoContent}
      </LogoPrimitive.Link>
    );
  }

  const linkWithContent = isValidElement(link.children)
    ? cloneElement(link.children, {}, logoContent)
    : link.children;

  return (
    <LogoPrimitive.Link asChild className={className}>
      {linkWithContent}
    </LogoPrimitive.Link>
  );
}
