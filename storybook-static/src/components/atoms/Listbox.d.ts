import { type ReactNode } from 'react';
export type ListboxOption<TValue = string, TName = string> = {
    value: TValue;
    name: TName;
    disabled?: boolean;
};
type GetOptionsParams<TValue = string, TName = string> = {
    options: ListboxOption<TValue, TName>[];
    excluded?: ListboxOption<TValue, TName>[];
    emptyMessage?: string;
};
export declare function getOptions<TValue = string, TName = string>({ options, excluded, }: GetOptionsParams<TValue, TName>): ListboxOption<TValue, TName>[];
export interface BaseListboxProps {
    label?: string | null;
    isRequired?: boolean;
    options: ListboxOption[];
    placeholder?: string | null;
    disabled?: boolean;
    error?: string | null;
    name?: string;
    optionsHeaderRender?: ReactNode;
    fixPosition?: 'left' | 'right';
}
export interface ListboxProps extends BaseListboxProps {
    value?: ListboxOption | null;
    defaultValue?: ListboxOption;
    onChange?: (option: ListboxOption) => void;
    multiple?: false;
}
export interface MultiListboxProps extends BaseListboxProps {
    value?: ListboxOption[] | null;
    defaultValue?: ListboxOption[];
    onChange?: (option: ListboxOption[]) => void;
    multiple: true;
}
export declare const Listbox: import("react").ForwardRefExoticComponent<(ListboxProps | MultiListboxProps) & import("react").RefAttributes<any>>;
export {};
