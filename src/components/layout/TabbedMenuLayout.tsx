import { Outlet } from 'react-router-dom';

import { TabMenu } from '~/components/molecules/TabMenu';
import type { MenuItemWithoutChildrenSinglePermission } from '~/types/MenuItem';

export const TabbedMenuLayout = ({
  subMenu,
}: {
  subMenu?: Array<MenuItemWithoutChildrenSinglePermission>;
}) => (
  <section className="min-w-0 flex-1 bg-white pb-32">
    {subMenu && (
      <div className="mb-16 bg-white md:sticky md:top-0 md:z-10">
        <TabMenu tabs={subMenu} />
      </div>
    )}
    <div className="px-8">
      <Outlet />
    </div>
  </section>
);
