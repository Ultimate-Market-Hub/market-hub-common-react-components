import { useContext, type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import { BreadcrumbsContext } from '~/context/BreadcrumbsContext';

import { Breadcrumbs } from '../molecules/Breadcrumbs';

export const ContentLayoutWithBreadcrumbs = ({
  heading,
}: {
  heading?: ReactNode;
}) => {
  const { breadcrumbs } = useContext(BreadcrumbsContext);

  return (
    <section className="min-w-0 flex-1 bg-white pb-32">
      <Breadcrumbs pages={breadcrumbs} />
      {heading}
      <div className="px-8">
        <Outlet />
      </div>
    </section>
  );
};
