'use client';

import type { ComponentProps } from 'react';

import { Button } from '@/components/button';
import { useFileInput } from '@/components/file-input';

export type FileInputTriggerProps = ComponentProps<typeof Button>;

export function FileInputTrigger({ children, disabled, ...props }: FileInputTriggerProps) {
  const { inputId, disabled: contextDisabled, openFilePicker } = useFileInput();

  const isDisabled = disabled ?? contextDisabled;

  return (
    <Button
      aria-controls={`${inputId}-input`}
      className="pointer-events-none"
      disabled={isDisabled}
      onClick={openFilePicker}
      size="small"
      tabIndex={-1}
      type="button"
      variant="outline"
      {...props}
    >
      {children}
    </Button>
  );
}
