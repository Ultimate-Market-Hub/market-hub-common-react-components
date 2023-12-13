import { type FC, type ReactNode } from 'react';
import type { MenuItemWithoutChildrenSinglePermission } from '../../*/types/MenuItem';
interface StepperWithBreadcrumbsProps {
    steps?: Array<MenuItemWithoutChildrenSinglePermission>;
    heading?: ReactNode;
}
export declare const StepperWithBreadcrumbs: FC<StepperWithBreadcrumbsProps>;
export {};
