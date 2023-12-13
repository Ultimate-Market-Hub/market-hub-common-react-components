import { type Dispatch, type ReactNode, type SetStateAction } from 'react';
interface WithSlideOverProps {
    formChildren?: NonNullable<ReactNode>;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}
export default function WithSlideOverFormChildren({ open, setOpen, formChildren, }: WithSlideOverProps): import("react").JSX.Element;
export {};
