import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx } from 'clsx';
import type { ComponentPropsWithRef } from 'react';

export type TabsRootProps = ComponentPropsWithRef<typeof TabsPrimitive.Root>;

export function TabsRoot({ className, defaultValue, children, ...props }: TabsRootProps) {
  return (
    <TabsPrimitive.Root
      className={clsx(className)}
      data-slot="tabs-root"
      defaultValue={defaultValue}
      {...props}
    >
      {children}
    </TabsPrimitive.Root>
  );
}
