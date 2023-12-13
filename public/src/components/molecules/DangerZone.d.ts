/// <reference types="react" />
export declare const DangerZone: ({ items }: DangerZoneProps) => import("react").JSX.Element | null;
interface DangerZoneProps {
    items: DangerZoneItem[];
}
interface DangerZoneItem {
    title: string;
    buttonText: string;
    body?: string | null;
    onClickHandler: () => void;
}
export {};
