import { Switch as HeadlessSwitch } from '@headlessui/react';
import classNames from 'classnames';

export type SwitchProps = {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  isLoading?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  secondary?: boolean;
};

export const Switch = ({
  checked,
  onChange,
  isLoading,
  disabled,
  ariaLabel,
  secondary,
}: SwitchProps) => (
  <HeadlessSwitch
    checked={checked}
    {...(ariaLabel && { 'aria-label': ariaLabel })}
    aria-checked={checked}
    onChange={onChange}
    disabled={disabled}
    className={classNames(
      'focus:ring-primary-hub-500500 relative inline-flex h-24 w-[44px] flex-shrink-0 cursor-pointer rounded-50 border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2',
      {
        'bg-neutral-200': !checked && !disabled,
        'bg-secondary-accessible-dark-grey': secondary && checked && !disabled,
        'bg-primary-hub-700': checked && !disabled,
        'pointer-events-none bg-neutral-200': disabled,
        'pointer-events-none': isLoading,
      }
    )}
  >
    <span
      aria-hidden="true"
      className={classNames(
        'pointer-events-none inline-block h-20 w-20 transform rounded-50 bg-primary-white shadow ring-0 transition duration-200 ease-in-out',
        {
          'translate-x-0': !checked,
          'translate-x-full': checked,
          'animate-pulse': isLoading,
        }
      )}
    />
  </HeadlessSwitch>
);
