import type { FC } from 'react';
import type { MenuItemWithoutChildrenSinglePermission } from '../../*/types/MenuItem';
interface Stepper {
    steps: Array<MenuItemWithoutChildrenSinglePermission>;
}
export declare const RouteStepper: FC<Stepper>;
export {};
