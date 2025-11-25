import { DynamicIcon } from 'lucide-react/dynamic';
import { ComponentProps } from 'react';

export type IconProps = ComponentProps<typeof DynamicIcon>;

export function Icon({ className, name, size = 24, strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <DynamicIcon
      className={className}
      name={name}
      size={size}
      strokeWidth={strokeWidth}
      {...props}
    />
  );
}
