import type { ReactNode } from 'react';
import { type InputHTMLAttributes } from 'react';
export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    hint?: ReactNode;
    label?: string;
    isLoading?: boolean;
    error?: string;
};
export declare const TextField: import("react").ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    hint?: ReactNode;
    label?: string | undefined;
    isLoading?: boolean | undefined;
    error?: string | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
