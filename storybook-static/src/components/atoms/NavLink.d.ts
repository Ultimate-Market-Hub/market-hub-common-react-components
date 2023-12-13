import * as React from 'react';
import { type NavLinkProps } from 'react-router-dom';
export declare const NavLink: React.ForwardRefExoticComponent<{
    activeClassName?: string | undefined;
    inActiveClassName?: string | undefined;
    activeStyle?: React.CSSProperties | undefined;
    inActiveStyle?: React.CSSProperties | undefined;
} & NavLinkProps & React.RefAttributes<HTMLAnchorElement>>;
