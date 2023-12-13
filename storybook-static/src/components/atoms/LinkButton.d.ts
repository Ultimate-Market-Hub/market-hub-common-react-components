/// <reference types="react" />
import { Link } from 'react-router-dom';
import { type ButtonProps } from '../../*/components/atoms/Button';
type LinkButtonProps = Omit<ButtonProps<typeof Link>, 'as'>;
export declare const LinkButton: (props: LinkButtonProps) => import("react").JSX.Element;
export {};
