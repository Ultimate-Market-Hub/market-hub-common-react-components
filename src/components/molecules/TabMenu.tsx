import { NavLink } from 'react-router-dom';

import type { MenuItemWithoutChildrenSinglePermission } from '~/types/MenuItem';

export const TabMenu = ({
  tabs,
}: {
  tabs: Array<MenuItemWithoutChildrenSinglePermission>;
}) => {
  return (
    <div className="border-light-grey border-b">
      <nav className="-mb-px flex space-x-12 overflow-x-auto" aria-label="Tabs">
        {tabs.map((tab) => (
          <NavLink
            end={tab.end}
            key={tab.name}
            to={tab.href}
            className={({ isActive }) =>
              `whitespace-nowrap border-b-2 px-4 py-6 text-sm ${
                isActive
                  ? 'border-secondary-accessible-dark-yellow font-bold text-secondary-accessible-dark-yellow'
                  : 'border-transparent font-medium text-primary-medium-grey hover:border-gray-300 hover:text-primary-darker-grey'
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
