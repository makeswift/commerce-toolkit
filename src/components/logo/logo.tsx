import { clsx } from 'clsx';
import type { ReactNode } from 'react';

import * as Skeleton from '@/components/skeleton';

export interface LogoProps {
  className?: string;
  logo:
    | string
    | {
        src: string;
        alt: string;
        render?: (props: { src: string; alt: string; className: string }) => ReactNode;
      };
  link: {
    href: string;
    ariaLabel: string;
    render?: (props: {
      href: string;
      ariaLabel: string;
      className: string;
      children: ReactNode;
    }) => ReactNode;
  };
  width: number;
  height: number;
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
export function Logo({ className, logo, link, width, height }: LogoProps) {
  const renderLogo = () => {
    if (typeof logo === 'string') {
      return (
        <span className="text-lg font-[var(--logo-font-family,var(--font-family-heading))] font-semibold leading-none text-[var(--logo-text,hsl(var(--foreground)))] @xl:text-2xl">
          {logo}
        </span>
      );
    }

    const imageClassName = 'object-contain object-left';

    if (logo.render) {
      return logo.render({ src: logo.src, alt: logo.alt, className: imageClassName });
    }

    return <img alt={logo.alt} className={imageClassName} src={logo.src} />;
  };

  const renderLink = () => {
    const { href, ariaLabel, render } = link;
    const linkClassName = clsx(
      'ring-[var(--logo-focus,hsl(var(--primary)))] relative outline-0 ring-offset-4 focus-visible:ring-2',
      className,
    );
    const linkStyle = typeof logo === 'string' ? {} : { width, height };
    const logoContent = renderLogo();

    if (render) {
      return render({ href, ariaLabel, className: linkClassName, children: logoContent });
    }

    return (
      <a aria-label={ariaLabel} className={linkClassName} href={href} style={linkStyle}>
        {logoContent}
      </a>
    );
  };

  return <>{renderLink()}</>;
}

export function LogoSkeleton({ className }: Pick<LogoProps, 'className'>) {
  return <Skeleton.Box className={clsx('h-6 w-16 rounded-md', className)} />;
}
