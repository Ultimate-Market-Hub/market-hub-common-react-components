import { createContext, useMemo, useState, type ReactNode } from 'react';

import { type MenuItemWithoutChildrenSinglePermission } from '~/types/MenuItem';

type BreadcrumbsContextType = {
  breadcrumbs: MenuItemWithoutChildrenSinglePermission[];
  updateBreadcrumbs: (
    newBreadcrumbs: MenuItemWithoutChildrenSinglePermission[]
  ) => void;
};

const defaultBreadcrumbsContext: BreadcrumbsContextType = {  
  breadcrumbs: [],
  updateBreadcrumbs: () => {},
};

export const BreadcrumbsContext = createContext<BreadcrumbsContextType>(
  defaultBreadcrumbsContext
);

export const BreadcrumbsProvider = ({ children }: { children: ReactNode }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<
    MenuItemWithoutChildrenSinglePermission[]
  >(defaultBreadcrumbsContext.breadcrumbs);

  return (
    <BreadcrumbsContext.Provider
      value={useMemo(
        () => ({
          breadcrumbs,
          updateBreadcrumbs: (
            newBreadcrumbs: MenuItemWithoutChildrenSinglePermission[]
          ) => {
            setBreadcrumbs(newBreadcrumbs);
          },
        }),
        [breadcrumbs]
      )}
    >
      {children}
    </BreadcrumbsContext.Provider>
  );
};
