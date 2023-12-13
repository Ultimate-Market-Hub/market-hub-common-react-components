import { DarkHeaderSection } from '../../../*/components/atoms/HeaderSection/DarkHeaderSection';
declare const meta: {
    component: typeof DarkHeaderSection;
    title: string;
    args: {
        textCenter: false;
        primary: string;
        leading: string;
        secondary: string;
    };
};
export default meta;
export declare const Default: {
    args: {
        secondary: string;
        primary: string;
        textCenter: false;
    };
    play: ({ canvasElement, step }: import("@storybook/types").PlayFunctionContext<import("@storybook/react/dist/types-0fc72a6d").R, {
        leading?: string | undefined;
        secondary?: string | undefined;
        primary: string;
        textCenter: boolean;
        backColor?: string | undefined;
    }>) => Promise<void>;
};
export declare const WithCenter: {
    args: {
        textCenter: true;
        primary: string;
        secondary: string;
    };
    play: ({ canvasElement, step }: import("@storybook/types").PlayFunctionContext<import("@storybook/react/dist/types-0fc72a6d").R, {
        leading?: string | undefined;
        secondary?: string | undefined;
        primary: string;
        textCenter: boolean;
        backColor?: string | undefined;
    }>) => Promise<void>;
};
