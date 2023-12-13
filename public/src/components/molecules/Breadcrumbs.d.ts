/// <reference types="react" />
import type { MenuItemWithoutChildrenSinglePermission } from '../../*/types/MenuItem';
export interface BreadcrumbsProps {
    pages: MenuItemWithoutChildrenSinglePermission[];
    withHomeIncluded?: boolean;
}
export declare const Breadcrumbs: ({ pages, withHomeIncluded, }: BreadcrumbsProps) => import("react").JSX.Element;
