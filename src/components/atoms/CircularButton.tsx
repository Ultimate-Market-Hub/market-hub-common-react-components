import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import classNames from 'classnames';

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

import { Icon, type IconsNames } from './Icon';

const iconSize: Record<Sizes, Sizes> = {
  xs: 'sm',
  sm: 'md',
  md: 'md',
  lg: 'xl',
  xl: 'xl',
  xxl: 'xl',
};

type CircularButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'secondary' | 'white';
  icon?: IconsNames;
  size?: Sizes;
};

export const CircularButton: FC<CircularButtonProps> = ({
  variant = 'primary',
  icon,
  size = 'md',
  ...buttonProps
}) => (
  <div>
    <button
      {...buttonProps}
      className={classNames(
        'inline-flex items-center rounded-50 border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          // Padding.
          'p-4': size === 'xs',
          'p-[6px]': size === 'sm',
          'p-8': ['md', 'lg'].includes(size),
          'p-12': size === 'xl',
          // Font size.
          'text-12': size === 'xs',
          'text-14': ['sm', 'md'].includes(size),
          'text-16': ['lg', 'xl'].includes(size),
          // Line height.
          'leading-4': size === 'sm',
          // Shadow.
          'shadow-sm': ['primary', 'white'].includes(variant),
          // Border.
          'border-transparent': ['primary', 'secondary'].includes(variant),
          // Colors.
          'focus:ring-primary-hub-500500 bg-primary-hub text-primary-white hover:bg-primary-hub-700':
            variant === 'primary' && !buttonProps.disabled,
          'focus:ring-primary-hub-500500 bg-primary-hub-100 text-primary-hub-700 hover:bg-primary-hub-200':
            variant === 'secondary' && !buttonProps.disabled,
          'focus:ring-primary-hub-500500 border-primary-light-grey bg-primary-white text-primary-darker-grey hover:bg-neutral-50':
            variant === 'white' && !buttonProps.disabled,
          // Disabled.
          'border-primary-light-grey bg-primary-lighter-grey text-primary-medium-grey':
            buttonProps.disabled,
        }
      )}
    >
      {icon && <Icon name={icon} className={iconSize[size]} />}
    </button>
  </div>
);
