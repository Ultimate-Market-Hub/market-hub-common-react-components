import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import classNames from 'classnames';

import { Icon, type IconsNames } from './Icon';

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const iconSize: Record<Sizes, Sizes> = {
  xs: 'sm',
  sm: 'md',
  md: 'md',
  lg: 'xl',
  xl: 'xl',
  xxl: 'xl',
};

const sizeToIconClassMap: Record<Sizes, string> = {
  xs: 'h-2 w-2',
  sm: 'h-2 w-2',
  md: 'h-4 w-4',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  xxl: 'h-10 w-10',
};

type CircularButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'secondary' | 'white' | 'ghost';
  icon?: IconsNames;
  size?: Sizes;
};

export const SquareButton: FC<CircularButtonProps> = ({
  variant = 'primary',
  icon,
  size = 'md',
  ...buttonProps
}) => (
  <div>
    <button
      {...buttonProps}
      className={classNames(
        'inline-flex items-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          // Padding.
          'p-4': size !== 'xl' || 'xxl',
          'p-6': size === 'xl',
          // Font size.
          'text-12': size === 'xs',
          'text-14': ['sm', 'md'].includes(size),
          'text-16': ['lg', 'xl'].includes(size),
          // Line height.
          'leading-4': size === 'sm',
          // Shadow.
          'shadow-sm': ['primary', 'white'].includes(variant),
          // Border.
          'border-transparent': ['primary', 'secondary', 'ghost'].includes(
            variant
          ),
          // Colors.
          'focus:ring-primary-hub-500500 bg-primary-hub text-primary-white hover:bg-primary-hub-700':
            variant === 'primary' && !buttonProps.disabled,
          'text-primary-grey hover:bg-primary-hub-600 hover:text-primary-white focus:ring-primary-hub-500':
            variant === 'ghost' && !buttonProps.disabled,
          'focus:ring-primary-hub-500500 bg-primary-hub-100 text-primary-hub-700 hover:bg-primary-hub-200':
            variant === 'secondary' && !buttonProps.disabled,
          'focus:ring-primary-hub-500500 border-primary-light-grey bg-primary-white text-primary-darker-grey hover:bg-neutral-50':
            variant === 'white' && !buttonProps.disabled,
          // Disabled.
          'cursor-disabled border-primary-light-grey bg-primary-lighter-grey text-primary-medium-grey':
            buttonProps.disabled,
        }
      )}
    >
      {icon && (
        <Icon name={icon} className={classNames(sizeToIconClassMap[size])} />
      )}
    </button>
  </div>
);
