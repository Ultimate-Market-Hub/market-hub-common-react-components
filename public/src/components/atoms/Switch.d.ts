/// <reference types="react" />
export type SwitchProps = {
    checked?: boolean;
    onChange: (checked: boolean) => void;
    isLoading?: boolean;
    disabled?: boolean;
    ariaLabel?: string;
    secondary?: boolean;
};
export declare const Switch: ({ checked, onChange, isLoading, disabled, ariaLabel, secondary, }: SwitchProps) => import("react").JSX.Element;
