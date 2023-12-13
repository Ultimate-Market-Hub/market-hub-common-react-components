import { type ReactNode } from 'react';
import { type MenuItemWithoutChildrenSinglePermission } from '../*/types/MenuItem';
type BreadcrumbsContextType = {
    breadcrumbs: MenuItemWithoutChildrenSinglePermission[];
    updateBreadcrumbs: (newBreadcrumbs: MenuItemWithoutChildrenSinglePermission[]) => void;
};
export declare const BreadcrumbsContext: import("react").Context<BreadcrumbsContextType>;
export declare const BreadcrumbsProvider: ({ children }: {
    children: ReactNode;
}) => import("react").JSX.Element;
export {};
