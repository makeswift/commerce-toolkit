import type { ComponentProps, ReactNode } from 'react';

import * as InputPrimitive from '@/components/input';

export interface InputProps extends ComponentProps<'input'> {
  prependIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *   --input-light-background: var(--background);
 *   --input-light-text: var(--foreground);
 *   --input-light-placeholder: var(--contrast-500);
 *  }
 * ```
 */
export function Input({ className, prependIcon, ...props }: InputProps) {
  return (
    <InputPrimitive.Root className={className} prepend={prependIcon?.children != null || undefined}>
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
