import { useContext, useEffect } from 'react';

import { BreadcrumbsContext } from '~/context/BreadcrumbsContext';
import type { MenuItemWithoutChildrenSinglePermission } from '~/types/MenuItem';

export const useBreadcrumbs = (
  newBreadcrumbs: MenuItemWithoutChildrenSinglePermission[]
) => {
  const { breadcrumbs, updateBreadcrumbs } = useContext(BreadcrumbsContext);

  useEffect(() => {
    if (JSON.stringify(breadcrumbs) !== JSON.stringify(newBreadcrumbs)) {
      updateBreadcrumbs(newBreadcrumbs);
    }
  }, [newBreadcrumbs, breadcrumbs, updateBreadcrumbs]);
};
