import * as React from 'react';
import { NavLink as BaseNavLink, type NavLinkProps } from 'react-router-dom';

export const NavLink = React.forwardRef<
  HTMLAnchorElement,
  {
    activeClassName?: string;
    inActiveClassName?: string;
    activeStyle?: React.CSSProperties;
    inActiveStyle?: React.CSSProperties;
  } & NavLinkProps
>(
  (
    {
      activeClassName,
      inActiveClassName,
      activeStyle,
      inActiveStyle,
      ...props
    },
    ref
  ) => (
    <BaseNavLink
      ref={ref}
      {...props}
      className={({ isActive }) =>
        [props.className, isActive ? activeClassName : inActiveClassName]
          .filter(Boolean)
          .join(' ')
      }
      style={({ isActive }) => ({
        ...props.style,
        ...(isActive ? activeStyle : inActiveStyle),
      })}
    />
  )
);
