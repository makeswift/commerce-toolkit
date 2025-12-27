import type { FocusEvent, ReactNode } from 'react';

import * as RangeInputPrimitive from '@/components/range-input/primitives';

export interface RangeInputValue {
  min: string;
  max: string;
}

export interface RangeInputProps {
  applyLabel?: string;
  disabled?: boolean;
  inputValue: RangeInputValue;
  max?: number;
  maxName?: string;
  maxPlaceholder?: string;
  maxPrepend?: {
    asChild?: boolean;
    children?: ReactNode;
  };
  maxStep?: number;
  min?: number;
  minName?: string;
  minPlaceholder?: string;
  minPrepend?: {
    asChild?: boolean;
    children?: ReactNode;
  };
  minStep?: number;
  onApply?: (value: { min: number | null; max: number | null }) => void;
  onInputBlur?: (field: 'min' | 'max', event: FocusEvent<HTMLInputElement>) => void;
  onInputChange?: (value: RangeInputValue) => void;
  icon?: {
    asChild?: boolean;
    children?: ReactNode;
  };
}

export const parseInputValue = (value: string): number | null => {
  const parsed = parseInt(value, 10);

  return Number.isNaN(parsed) ? null : parsed;
};

export function RangeInput({
  applyLabel = 'Apply',
  disabled = false,
  inputValue,
  max = 100,
  maxName = 'max',
  maxPlaceholder = 'Max',
  maxPrepend,
  maxStep = 1,
  min = 0,
  minName = 'min',
  minPlaceholder = 'Min',
  minPrepend,
  minStep = 1,
  onApply,
  onInputBlur,
  onInputChange,
  icon,
}: RangeInputProps) {
  const minAsNumber = parseInputValue(inputValue.min);
  const maxAsNumber = parseInputValue(inputValue.max);

  return (
    <RangeInputPrimitive.Root>
      <RangeInputPrimitive.Field
        disabled={disabled}
        max={maxAsNumber ?? max}
        min={min}
        name={minName}
        onBlur={(e) => onInputBlur?.('min', e)}
        onChange={(e) => onInputChange?.({ ...inputValue, min: e.currentTarget.value })}
        placeholder={minPlaceholder}
        prependIcon={minPrepend}
        step={minStep}
        type="number"
        value={inputValue.min}
      />
      <RangeInputPrimitive.Field
        disabled={disabled}
        max={max}
        min={minAsNumber ?? min}
        name={maxName}
        onBlur={(e) => onInputBlur?.('max', e)}
        onChange={(e) => onInputChange?.({ ...inputValue, max: e.currentTarget.value })}
        placeholder={maxPlaceholder}
        prependIcon={maxPrepend}
        step={maxStep}
        type="number"
        value={inputValue.max}
      />
      <RangeInputPrimitive.Button
        aria-label={applyLabel}
        disabled={
          disabled ||
          (inputValue.min === inputValue.max && inputValue.min !== '' && inputValue.max !== '')
        }
        onClick={() =>
          onApply?.({
            min: inputValue.min === '' ? null : Number(inputValue.min),
            max: inputValue.max === '' ? null : Number(inputValue.max),
          })
        }
        shape="circle"
        size="small"
        variant="outline"
      >
        <RangeInputPrimitive.Icon asChild={icon?.asChild}>
          {icon?.children}
        </RangeInputPrimitive.Icon>
      </RangeInputPrimitive.Button>
    </RangeInputPrimitive.Root>
  );
}
