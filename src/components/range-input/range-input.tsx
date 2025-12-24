import { ArrowRight } from 'lucide-react';
import { FocusEvent, ReactNode } from 'react';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import * as RangeInputPrimitive from '@/components/range-input/primitives';

export interface RangeInputValue {
  min: string;
  max: string;
}

export interface RangeInputProps {
  applyLabel?: string;
  colorScheme?: 'light' | 'dark';
  disabled?: boolean;
  inputValue: RangeInputValue;
  max?: number;
  maxLabel?: string;
  maxName?: string;
  maxPlaceholder?: string;
  maxPrepend?: ReactNode;
  maxStep?: number;
  min?: number;
  minLabel?: string;
  minName?: string;
  minPlaceholder?: string;
  minPrepend?: ReactNode;
  minStep?: number;
  onApply?: (value: { min: number | null; max: number | null }) => void;
  onInputBlur?: (field: 'min' | 'max', event: FocusEvent<HTMLInputElement>) => void;
  onInputChange?: (value: RangeInputValue) => void;
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
  maxPrepend = null,
  maxStep = 1,
  min = 0,
  minName = 'min',
  minPlaceholder = 'Min',
  minPrepend = null,
  minStep = 1,
  onApply,
  onInputBlur,
  onInputChange,
}: RangeInputProps) {
  const minAsNumber = parseInputValue(inputValue.min);
  const maxAsNumber = parseInputValue(inputValue.max);

  return (
    <RangeInputPrimitive.Root>
      <Input
        className="flex-1"
        disabled={disabled}
        max={maxAsNumber ?? max}
        min={min}
        name={minName}
        onBlur={(e) => onInputBlur?.('min', e)}
        onChange={(e) => onInputChange?.({ ...inputValue, min: e.currentTarget.value })}
        placeholder={minPlaceholder}
        prepend={minPrepend}
        step={minStep}
        type="number"
        value={inputValue.min}
      />
      <Input
        className="flex-1"
        disabled={disabled}
        max={max}
        min={minAsNumber ?? min}
        name={maxName}
        onBlur={(e) => onInputBlur?.('max', e)}
        onChange={(e) => onInputChange?.({ ...inputValue, max: e.currentTarget.value })}
        placeholder={maxPlaceholder}
        prepend={maxPrepend}
        step={maxStep}
        type="number"
        value={inputValue.max}
      />
      <Button
        aria-label={applyLabel}
        className="shrink-0"
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
        <ArrowRight absoluteStrokeWidth size={20} strokeWidth={1} />
      </Button>
    </RangeInputPrimitive.Root>
  );
}
