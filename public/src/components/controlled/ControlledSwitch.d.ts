/// <reference types="react" />
import { type SwitchProps } from '../../*/components/atoms/Switch';
type ControlledSwitchProps<FormSchema> = {
    name: string & keyof FormSchema;
} & Partial<SwitchProps>;
export declare const ControlledSwitch: <FormSchema>(props: ControlledSwitchProps<FormSchema>) => import("react").JSX.Element;
export {};
