import { Slot, Slottable } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';

import { buttonContentVariants, buttonVariants } from '@/components/button';
import { cn } from '@/lib';

export type ButtonLinkProps = ComponentProps<'a'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

/**
 * A link styled as a button. Shares the same CSS variables as the Button component.
 *
 * @see Button for the full list of CSS variables.
 */
export function ButtonLink({
  variant = 'primary',
  size = 'large',
  shape = 'pill',
  className,
  children,
  asChild = false,
  ...props
}: ButtonLinkProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, shape }),
        // Focus-visible state
        'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--button-focus,var(--brand))]',
        className,
      )}
      data-slot="button-link"
      {...props}
    >
      <span className={buttonContentVariants({ size, shape })}>
        <Slottable>{children}</Slottable>
      </span>
    </Comp>
  );
}
