import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

import type { MenuItemWithoutChildrenSinglePermission } from '~/types/MenuItem';

export interface BreadcrumbsProps {
  pages: MenuItemWithoutChildrenSinglePermission[];
  withHomeIncluded?: boolean;
}

export const Breadcrumbs = ({
  pages,
  withHomeIncluded = true,
}: BreadcrumbsProps) => {
  return (
    <nav
      role="navigation"
      aria-label="Breadcrumb"
      className="flex flex-col items-start md:flex-row"
    >
      {withHomeIncluded && (
        <>
          <Link
            className="text-14 text-accessible-dark-turquoise font-text font-normal leading-6"
            to="/"
          >
            Home
          </Link>
          <ChevronRightIcon className="fill-accessible-dark-turquoise h-6" />
        </>
      )}
      {pages.map((link, index, array) => {
        return (
          <div key={link.name} className="flex items-center">
            <Link
              className="text-14 last:text-dark-grey last:hover:text-dark-grey font-text leading-6 text-secondary-accessible-dark-yellow last:font-bold hover:text-secondary-accessible-dark-yellow"
              to={link.href}
            >
              {link.name}
            </Link>
            {index !== array.length - 1 && (
              <ChevronRightIcon className="h-6 fill-secondary-accessible-dark-yellow" />
            )}
          </div>
        );
      })}
    </nav>
  );
};
