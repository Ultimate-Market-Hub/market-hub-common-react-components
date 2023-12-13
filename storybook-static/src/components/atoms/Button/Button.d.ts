import type { IconsNames } from '../Icon';
import type { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';
type Size = 'sm' | 'md' | 'lg';
export type ButtonProps<TAsProp extends ElementType = 'button'> = PropsWithChildren<{
    as?: TAsProp;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'text-error';
    leftIcon?: IconsNames;
    rightIcon?: IconsNames;
    iconVersion?: string;
    isLoading?: boolean;
    size?: Size;
}> & ComponentPropsWithoutRef<TAsProp>;
export declare const Button: <TAsProp extends ElementType = "button">({ as, variant, size, leftIcon, rightIcon, iconVersion, isLoading, children, disabled, ...props }: ButtonProps<TAsProp>) => import("react").JSX.Element;
export {};
