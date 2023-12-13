import { type ChangeEvent } from 'react';
export type SelectOption<TValue = string, TName = string> = {
    value: TValue;
    name: TName;
    disabled?: boolean;
};
type SelectProps<TValue = string> = {
    options: SelectOption[];
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    ariaLabel: string;
    value?: TValue;
    placeholder?: TValue;
    fullWidth?: boolean;
    disabled?: boolean;
};
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps<string> & import("react").RefAttributes<HTMLSelectElement>>;
export {};
