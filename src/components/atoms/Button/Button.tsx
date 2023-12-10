import classNames from 'classnames';
import { ReactComponent as SpinnerIcon } from './assets/spinner.svg';
import type { IconsNames } from '../Icon';
import { Icon } from '../Icon';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

type Size = 'sm' | 'md' | 'lg';

export type ButtonProps<TAsProp extends ElementType = 'button'> =
  PropsWithChildren<{
    as?: TAsProp;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'text-error';
    leftIcon?: IconsNames;
    rightIcon?: IconsNames;
    iconVersion?: string;
    isLoading?: boolean;
    size?: Size;
  }> &
    ComponentPropsWithoutRef<TAsProp>;

const sizeToIconClassMap: Record<Size, string> = {
  sm: 'h-2 w-2',
  md: 'h-4 w-4',
  lg: 'h-6 w-6',
};

export const Button = <TAsProp extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  iconVersion,
  isLoading,
  children,
  disabled,
  ...props
}: ButtonProps<TAsProp>) => {
  const Component = as || 'button';
  const isDisabledInternally = disabled || isLoading;

  return (
    <Component
      {...props}
      className={classNames(
        'inline-flex items-center justify-center gap-2 rounded-2 border px-4 py-2 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          // Text size
          'text-sm leading-tight': size === 'sm',
          'text-lg': size === 'lg',
          'text-normal leading-normal': size === 'md',
          // Cursor.
          'cursor-not-allowed': isDisabledInternally,
          // Border.
          'border-transparent': ['primary', 'secondary', 'text-error'].includes(
            variant
          ),
          // Colors.
          'bg-primary-hub-700 text-primary-white hover:bg-primary-hub focus:ring-primary-hub-500':
            variant === 'primary' && !isDisabledInternally,
          'bg-secondary-accessible-dark-grey focus:ring-secondary-accessible-dark-grey text-primary-white hover:bg-secondary-turquoise':
            variant === 'secondary' && !isDisabledInternally,
          'border-secondary-accessible-dark-grey text-secondary-accessible-dark-grey focus:ring-secondary-accessible-dark-grey bg-primary-white hover:bg-secondary-turquoise-50':
            variant === 'outline' && !isDisabledInternally,
          'text-secondary-accessible-dark-grey focus:ring-secondary-accessible-dark-grey border-transparent bg-transparent hover:bg-secondary-turquoise-50':
            variant === 'text' && !isDisabledInternally,
          'hover:text-error-50 border-transparent bg-transparent text-error focus:ring-error-dark':
            variant === 'text-error' && !isDisabledInternally,
          // Disabled.
          'border-primary-light-grey bg-primary-lighter-grey text-primary-medium-grey':
            ['primary', 'secondary'].includes(variant) && isDisabledInternally,
          'border-primary-medium-grey text-primary-medium-grey':
            variant === 'outline' && isDisabledInternally,
          'border-transparent text-primary-medium-grey':
            (variant === 'text' || variant === 'text-error') &&
            isDisabledInternally,
        },
        props.className
      )}
      disabled={isDisabledInternally}
    >
      {leftIcon && !isLoading && (
        <Icon name={leftIcon} className={sizeToIconClassMap[size]} />
      )}
      {isLoading && (
        <SpinnerIcon
          className={classNames(sizeToIconClassMap[size], 'animate-spin')}
        />
      )}
      {children}
      {rightIcon && (
        <Icon name={rightIcon} className={sizeToIconClassMap[size]} />
      )}
    </Component>
  );
};
