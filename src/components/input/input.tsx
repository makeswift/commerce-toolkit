import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

import * as InputPrimitive from '@/components/input';
import { inputVariants } from '@/components/input';

export type InputProps = Omit<ComponentProps<'input'>, 'size'> &
  VariantProps<typeof inputVariants> & {
    prependIcon?: {
      asChild?: boolean;
      children?: ReactNode;
    };
  };

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *   --input-fill: var(--form-fill);
 *   --input-fill-icon: var(--form-fill-icon);
 *   --input-fill-disabled: var(--form-fill-disabled);
 *   --input-text: var(--form-text-primary);
 *   --input-text-placeholder: var(--form-text-placeholder);
 *   --input-font: var(--font-body);
 *  }
 * ```
 */
export function Input({ className, prependIcon, size = 'medium', ...props }: InputProps) {
  return (
    <InputPrimitive.Root
      className={className}
      prepend={prependIcon?.children != null || undefined}
      size={size}
      {...props}
    >
      {prependIcon?.children != null && (
        <InputPrimitive.Prepend>
          <InputPrimitive.PrependIcon asChild={prependIcon.asChild}>
            {prependIcon.children}
          </InputPrimitive.PrependIcon>
        </InputPrimitive.Prepend>
      )}
      <InputPrimitive.Field {...props} />
    </InputPrimitive.Root>
  );
}
