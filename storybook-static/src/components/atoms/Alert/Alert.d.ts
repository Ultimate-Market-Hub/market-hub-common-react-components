import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
type DivProps = HTMLAttributes<HTMLDivElement>;
export declare const AlertBase: ({ children, icon, className, heading, onClose, ...divProps }: PropsWithChildren<{
    icon: ReactNode;
    heading?: ReactNode;
    onClose?: (() => void) | undefined;
} & DivProps>) => import("react").JSX.Element;
export type AlertProps = {
    heading?: ReactNode;
    type: 'warning' | 'error' | 'info' | 'success';
    onClose?: () => void;
    'data-testid'?: string;
} & DivProps;
export declare const Alert: ({ type, className, ...props }: PropsWithChildren<AlertProps>) => import("react").JSX.Element;
export {};
