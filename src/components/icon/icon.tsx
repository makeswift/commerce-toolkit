import { DynamicIcon } from 'lucide-react/dynamic';
import type { ComponentProps } from 'react';

export type IconProps = ComponentProps<typeof DynamicIcon>;

export function Icon({ className, name, size = 24, strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <DynamicIcon
      className={className}
      data-slot="icon"
      name={name}
      size={size}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}
