/// <reference types="react" />
import type { AxiosError } from 'axios';
export declare const ComponentLevelError: ({ error, handleAction, actionName, }: {
    error?: AxiosError<unknown, any> | null | undefined;
    handleAction?: ((...args: any[]) => void) | undefined;
    actionName?: string | undefined;
}) => import("react").JSX.Element;
