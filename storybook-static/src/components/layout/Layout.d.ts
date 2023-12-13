import React, { type ReactNode } from 'react';
type UserMenuRouting = {
    name: string;
    href: string;
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
        title?: string | undefined;
        titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>>;
    current: boolean;
};
export interface BackofficeLayoutProps {
    children?: NonNullable<ReactNode>;
    navigation: UserMenuRouting[];
    userNavigation: Pick<UserMenuRouting, 'name' | 'href'>[];
}
export default function BackofficeLayout({ navigation, userNavigation, }: BackofficeLayoutProps): React.JSX.Element;
export {};
