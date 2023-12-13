import React from 'react';
interface ControlledCheckboxFieldProps {
    name: string;
    label: string;
    checked?: boolean;
    disabled: boolean;
}
export declare const ControlledCheckboxField: ({ name, label, checked, disabled, }: ControlledCheckboxFieldProps) => React.JSX.Element;
export {};
