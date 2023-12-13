/// <reference types="react" />
export declare const Modal: ({ title, children, open, handleClose, width, className, }: ModalProps) => import("react").JSX.Element;
export interface ModalProps {
    title?: React.ReactNode;
    children: React.ReactNode;
    open: boolean;
    handleClose: () => void;
    width?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    className?: string;
}
