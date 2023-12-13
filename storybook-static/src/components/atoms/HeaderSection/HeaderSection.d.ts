/// <reference types="react" />
interface HeaderSectionProps {
    primary: string;
    textCenter: boolean;
    tightSecondary: boolean;
    bgColor?: string;
    leading?: string;
    secondary?: string;
}
export declare function HeaderSection({ leading, secondary, primary, textCenter, tightSecondary, bgColor, }: HeaderSectionProps): import("react").JSX.Element;
export {};
