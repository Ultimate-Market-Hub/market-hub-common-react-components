/// <reference types="react" />
import * as IconsSolid from '@heroicons/react/24/solid';
import * as IconsOutline from '@heroicons/react/24/outline';
export type IconsSolidNames = keyof typeof IconsSolid;
export type IconsOutlineNames = keyof typeof IconsOutline;
export type IconsNames = IconsOutlineNames & IconsSolidNames;
type BaseIconProps = {
    name: IconsNames;
    size?: 'sm' | 'md' | 'lg';
    version?: 'solid' | 'outline';
};
export type IconProps = Omit<React.ComponentPropsWithRef<'svg'>, keyof BaseIconProps> & BaseIconProps;
export declare const Icon: ({ name, version, ...props }: IconProps) => import("react").JSX.Element;
export {};
