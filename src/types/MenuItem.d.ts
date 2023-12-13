export interface MenuItemBase {
    /**
     * The unique id of the menu item
     * used to identify the menu item in e.g. React .map() loops
     *  */
    id?: string;
    name: string;
    icon?: any;
    end?: boolean;
    description?: string | null;
}
interface MenuItemSinglePermission extends MenuItemBase {
    application?: string;
    permission?: string;
    allowAccessWithAtLeastOneOf?: never;
}
interface MenuItemMultipleAllowedPermissions extends MenuItemBase {
    application?: never;
    permission?: never;
    allowAccessWithAtLeastOneOf?: {
        application: string;
        permission: string;
    }[];
}
export interface MenuItemWithChildrenSinglePermission extends MenuItemSinglePermission {
    children: (MenuItemWithoutChildrenSinglePermission | MenuItemWithoutChilrenMultipleAllowedPermissions)[];
    href?: never;
}
export interface MenuItemWithoutChildrenSinglePermission extends MenuItemSinglePermission {
    href: string;
    children?: never;
}
export interface MenuItemWithChildrenMultipleAllowedPermissions extends MenuItemMultipleAllowedPermissions {
    children: (MenuItemWithoutChildrenSinglePermission | MenuItemWithoutChilrenMultipleAllowedPermissions)[];
    href?: never;
}
export interface MenuItemWithoutChilrenMultipleAllowedPermissions extends MenuItemMultipleAllowedPermissions {
    href: string;
    children?: never;
}
export type MenuItem = MenuItemWithChildrenSinglePermission | MenuItemWithChildrenMultipleAllowedPermissions | MenuItemWithoutChildrenSinglePermission | MenuItemWithoutChilrenMultipleAllowedPermissions;
export {};
