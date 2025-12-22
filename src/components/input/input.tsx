import type { ComponentProps, ReactNode } from 'react';

import * as InputPrimitive from '@/components/input';

export type InputProps = ComponentProps<'input'> & {
  prepend?: ReactNode;
};

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
export function Input({ className, prepend, ...props }: InputProps) {
  return (
    <InputPrimitive.Root className={className} prepend={prepend}>
      {prepend != null && prepend !== '' && (
        <InputPrimitive.Prepend>{prepend}</InputPrimitive.Prepend>
      )}
      <InputPrimitive.Field {...props} />
    </InputPrimitive.Root>
  );
}
