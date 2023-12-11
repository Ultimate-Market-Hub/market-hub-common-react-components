import { useContext, type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { TabMenu } from '~/components/molecules/TabMenu';
import { BreadcrumbsContext } from '~/context/BreadcrumbsContext';
import type { MenuItemWithoutChildrenSinglePermission } from '~/types/MenuItem';

import { Breadcrumbs } from '../molecules/Breadcrumbs';

export const TabbedMenuLayoutWithBreadcrumbs = ({
  subMenu,
  heading,
}: {
  subMenu?: Array<MenuItemWithoutChildrenSinglePermission>;
  heading?: ReactNode;
}) => {
  const { breadcrumbs } = useContext(BreadcrumbsContext);

  return (
    <section className="min-w-0 flex-1 bg-white pb-32">
      <Breadcrumbs pages={breadcrumbs} />
      {heading}
      {subMenu && (
        <div className={'my-16'}>
          <TabMenu tabs={subMenu} />
        </div>
      )}
      <Outlet />
    </section>
  );
};
