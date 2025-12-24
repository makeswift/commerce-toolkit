import { X } from 'lucide-react';
import type { ComponentProps } from 'react';

import * as SwatchRadioGroupPrimitive from '@/components/swatch-radio-group';

type SwatchOption =
  | {
      type: 'color';
      value: string;
      label: string;
      color: string;
      disabled?: boolean;
    }
  | {
      type: 'image';
      value: string;
      label: string;
      image: { src: string; alt: string };
      disabled?: boolean;
    };

export type SwatchRadioGroupProps = ComponentProps<typeof SwatchRadioGroupPrimitive.Root> & {
  options: SwatchOption[];
  onOptionMouseEnter?: (value: string) => void;
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --swatch-radio-group-focus: var(--primary);
 *    --swatch-radio-group-light-icon: var(--foreground);
 *    --swatch-radio-group-light-unchecked-border: transparent;
 *    --swatch-radio-group-light-unchecked-border-hover: var(--contrast-200);
 *    --swatch-radio-group-light-disabled-border: transparent;
 *    --swatch-radio-group-light-border-error: var(--error);
 *    --swatch-radio-group-light-checked-border: var(--foreground);
 *    --swatch-radio-group-light-option-border: color-mix(in oklab, var(--foreground) 10%, transparent);
 *  }
 * ```
 */
export function SwatchRadioGroup({
  options,
  className,
  onOptionMouseEnter,
  ...props
}: SwatchRadioGroupProps) {
  return (
    <SwatchRadioGroupPrimitive.Root {...props}>
      {options.map((option) => (
        <SwatchRadioGroupPrimitive.Item
          aria-label={option.label}
          disabled={option.disabled}
          key={option.value}
          onMouseEnter={() => {
            onOptionMouseEnter?.(option.value);
          }}
          value={option.value}
        >
          {option.type === 'color' ? (
            <SwatchRadioGroupPrimitive.Color color={option.color} />
          ) : (
            <SwatchRadioGroupPrimitive.Thumbnail>
              <SwatchRadioGroupPrimitive.Image
                alt={option.image.alt}
                height={40}
                src={option.image.src}
                width={40}
              />
            </SwatchRadioGroupPrimitive.Thumbnail>
          )}
          <SwatchRadioGroupPrimitive.Indicator>
            <X absoluteStrokeWidth size={16} strokeWidth={1.5} />
          </SwatchRadioGroupPrimitive.Indicator>
        </SwatchRadioGroupPrimitive.Item>
      ))}
    </SwatchRadioGroupPrimitive.Root>
  );
}
