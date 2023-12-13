import { forwardRef, type ChangeEvent } from 'react';

export type SelectOption<TValue = string, TName = string> = {
  value: TValue;
  name: TName;
  disabled?: boolean;
};

type SelectProps<TValue = string> = {
  options: SelectOption[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  ariaLabel: string;
  value?: TValue;
  placeholder?: TValue;
  fullWidth?: boolean;
  disabled?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      onChange,
      ariaLabel,
      value,
      placeholder,
      fullWidth = true,
      disabled = false,
    },
    ref
  ) => (
    <select
      className={`text-16 focus:ring-primary-hub-500500 block rounded-[6px] border-primary-light-grey py-2 pl-4 focus:border-primary-hub-500 focus:outline-none sm:text-sm ${
        fullWidth ? 'w-full' : ''
      }`}
      onChange={onChange}
      aria-label={ariaLabel}
      value={value ?? ''}
      disabled={disabled}
      ref={ref}
    >
      <>
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </>
    </select>
  )
);

Select.displayName = 'Select';
