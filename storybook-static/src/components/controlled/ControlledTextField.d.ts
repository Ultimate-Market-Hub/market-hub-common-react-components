/// <reference types="react" />
import { type TextFieldProps } from 'components/atoms/TextField';
interface ControlledTextFieldProps extends TextFieldProps {
    name: string;
}
export declare const ControlledTextField: (props: ControlledTextFieldProps) => import("react").JSX.Element;
export {};
