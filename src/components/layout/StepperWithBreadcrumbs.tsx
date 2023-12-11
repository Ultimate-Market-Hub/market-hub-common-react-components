import { useContext, type FC, type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { BreadcrumbsContext } from '~/context/BreadcrumbsContext';
import type { MenuItemWithoutChildrenSinglePermission } from '~/types/MenuItem';

import { Breadcrumbs } from '../molecules/Breadcrumbs';
import { RouteStepper } from '../molecules/RouteStepper';

interface StepperWithBreadcrumbsProps {
  steps?: Array<MenuItemWithoutChildrenSinglePermission>;
  heading?: ReactNode;
}

export const StepperWithBreadcrumbs: FC<StepperWithBreadcrumbsProps> = ({
  steps,
  heading,
}) => {
  const { breadcrumbs } = useContext(BreadcrumbsContext);

  return (
    <section className="min-w-0 flex-1 bg-white pb-32">
      <Breadcrumbs pages={breadcrumbs} />
      {heading}
      {steps && (
        <div className={'my-16'}>
          <RouteStepper steps={steps} />
        </div>
      )}
      <div className="px-8">
        <Outlet />
      </div>
    </section>
  );
};
