import React from 'react';

type ColumnCheckboxProps = {
  indeterminate?: boolean;
} & JSX.IntrinsicElements['input'];
export function ColumnCheckbox({
  indeterminate,
  ...rest
}: ColumnCheckboxProps) {
  const ref = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className="focus:ring-primary-hub-500500 h-4 w-4 rounded border-gray-300 text-primary-hub-700"
      {...rest}
    />
  );
}
