/// <reference types="react" />
import { type ListboxProps, type MultiListboxProps } from '../atoms/Listbox';
type ControlledListBoxProps<FormSchema> = (ListboxProps & {
    name: keyof FormSchema;
}) | (MultiListboxProps & {
    name: keyof FormSchema;
});
export declare const ControlledListbox: <FormSchema>(props: ControlledListBoxProps<FormSchema>) => import("react").JSX.Element;
export {};
