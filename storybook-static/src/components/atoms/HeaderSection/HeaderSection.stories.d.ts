import { HeaderSection } from '../../../*/components/atoms/HeaderSection/HeaderSection';
declare const meta: {
    component: typeof HeaderSection;
    title: string;
    args: {};
};
export default meta;
export declare const Default: {
    args: {
        secondary: string;
        primary: string;
        textCenter: false;
    };
    play: ({ canvasElement, step }: import("@storybook/types").PlayFunctionContext<import("@storybook/react/dist/types-0fc72a6d").R, {
        primary: string;
        textCenter: boolean;
        tightSecondary: boolean;
        bgColor?: string | undefined;
        leading?: string | undefined;
        secondary?: string | undefined;
    }>) => Promise<void>;
};
export declare const WithCenter: {
    args: {
        textCenter: true;
        primary: string;
        secondary: string;
    };
    play: ({ canvasElement, step }: import("@storybook/types").PlayFunctionContext<import("@storybook/react/dist/types-0fc72a6d").R, {
        primary: string;
        textCenter: boolean;
        tightSecondary: boolean;
        bgColor?: string | undefined;
        leading?: string | undefined;
        secondary?: string | undefined;
    }>) => Promise<void>;
};
export declare const WithTitleOnly: {
    args: {
        textCenter: false;
        primary: string;
        secondary: string;
    };
    play: ({ canvasElement, step }: import("@storybook/types").PlayFunctionContext<import("@storybook/react/dist/types-0fc72a6d").R, {
        primary: string;
        textCenter: boolean;
        tightSecondary: boolean;
        bgColor?: string | undefined;
        leading?: string | undefined;
        secondary?: string | undefined;
    }>) => Promise<void>;
};
