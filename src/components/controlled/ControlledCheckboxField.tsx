import React from 'react';
import { useController, useFormContext } from 'react-hook-form';

interface ControlledCheckboxFieldProps {
  name: string;
  label: string;
  checked?: boolean;
  disabled: boolean;
}

export const ControlledCheckboxField = ({
  name,
  label,
  checked,
  disabled,
}: ControlledCheckboxFieldProps) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control });

  return (
    <div className="mb-4 flex items-center">
      {!!checked ? (
        <input
          type="checkbox"
          {...field}
          className="mr-2 h-16 w-16 rounded-4 border-primary-light-grey"
          id={name}
          checked={checked}
          disabled={disabled}
        />
      ) : (
        <input
          type="checkbox"
          {...field}
          className="mr-2 h-16 w-16 rounded-4 border-primary-light-grey"
          id={name}
          disabled={disabled}
        />
      )}
      <label className="text-base" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
