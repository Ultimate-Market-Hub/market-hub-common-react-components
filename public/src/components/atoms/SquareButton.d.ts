import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { type IconsNames } from './Icon';
export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type CircularButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'white' | 'ghost';
    icon?: IconsNames;
    size?: Sizes;
};
export declare const SquareButton: FC<CircularButtonProps>;
export {};
