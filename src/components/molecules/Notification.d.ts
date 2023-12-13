import { type MouseEvent } from 'react';
interface NotificationProps {
    message: string;
    show: boolean;
    handleClose?: (e: MouseEvent<HTMLButtonElement>) => void;
    description?: string | null;
    variant?: 'simple' | 'closeable';
    warning?: boolean;
}
export declare const Notification: ({ message, description, show, handleClose, variant, warning, }: NotificationProps) => import("react").JSX.Element;
export {};
