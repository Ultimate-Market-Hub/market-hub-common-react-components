import { type ReactNode } from 'react';
type SlideOverContextType = {
    openSlideOver: string | null;
    openSlide: (slideName: string) => void;
    closeSlide: () => void;
    isOpen: boolean;
};
export declare const useSlideOver: () => SlideOverContextType;
type SlideOverProviderProps = {
    children: ReactNode;
};
export declare const SlideOverProvider: ({ children }: SlideOverProviderProps) => import("react").JSX.Element;
export {};
