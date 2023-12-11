import type { FC } from 'react';

import { NavLink } from '~/components/atoms/NavLink';
import type { MenuItemWithoutChildrenSinglePermission } from '~/types/MenuItem';

interface Stepper {
  steps: Array<MenuItemWithoutChildrenSinglePermission>;
}

export const RouteStepper: FC<Stepper> = ({ steps }) => {
  return (
    <div className="border-light-grey border-b">
      <nav className="-mb-px flex w-full overflow-x-auto" aria-label="Stepper">
        {steps.map((step) => (
          <NavLink
            end={step.end}
            key={step.name}
            to={step.href}
            className="w-full whitespace-nowrap border-b-2 px-4 py-16 text-sm font-bold"
            activeClassName="border-accessible-dark-turquoise text-accessible-dark-turquoise"
            inActiveClassName="hover:border-gray-300 border-transparent font-bold text-primary-light-grey hover:text-accessible-dark-turquoise hover:border-accessible-dark-turquoise"
          >
            <div className="mb-2">{step.name}</div>
            <span className="font-normal text-primary-medium-grey">
              {step.description}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
