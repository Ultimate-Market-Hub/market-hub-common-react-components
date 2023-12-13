/// <reference types="react" />
import { ApolloError } from '@apollo/client';
export declare const ComponentLevelError: ({ error, handleAction, actionName, }: {
    error?: ApolloError | null | undefined;
    handleAction?: ((...args: any[]) => void) | undefined;
    actionName?: string | undefined;
}) => import("react").JSX.Element;
