import type { ComponentProps, ReactNode } from 'react';

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
      image: {
        src: string;
        alt: string;
        asChild?: boolean;
        children?: ReactNode;
      };
      disabled?: boolean;
    };

export type SwatchRadioGroupProps = ComponentProps<typeof SwatchRadioGroupPrimitive.Root> & {
  options: SwatchOption[];
  onOptionMouseEnter?: (value: string) => void;
  indicatorIcon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --swatch-radio-group-icon: var(--form-fill-icon);
 * }
 * ```
 */
export function SwatchRadioGroup({
  options,
  className,
  onOptionMouseEnter,
  indicatorIcon,
  ...props
}: SwatchRadioGroupProps) {
  return (
    <SwatchRadioGroupPrimitive.Root className={className} {...props}>
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
                asChild={option.image.asChild}
                height={40}
                src={option.image.src}
                width={40}
              >
                {option.image.children}
              </SwatchRadioGroupPrimitive.Image>
            </SwatchRadioGroupPrimitive.Thumbnail>
          )}
          <SwatchRadioGroupPrimitive.Indicator>
            <SwatchRadioGroupPrimitive.IndicatorIcon asChild={indicatorIcon?.asChild}>
              {indicatorIcon?.children}
            </SwatchRadioGroupPrimitive.IndicatorIcon>
          </SwatchRadioGroupPrimitive.Indicator>
        </SwatchRadioGroupPrimitive.Item>
      ))}
    </SwatchRadioGroupPrimitive.Root>
  );
}
