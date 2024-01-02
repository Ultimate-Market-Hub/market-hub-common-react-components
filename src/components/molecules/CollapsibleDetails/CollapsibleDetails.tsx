import { type ReactNode } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

type CollapsibleDetailsProps = {
  heading: ReactNode;
  defaultIsOpen?: boolean;
  children: ReactNode;
};

export const CollapsibleDetails = ({
  heading,
  defaultIsOpen = false,
  children,
}: CollapsibleDetailsProps) => {
  return (
    <details
      className="group w-full bg-primary-white p-12 pb-0 sm:rounded-4"
      open={defaultIsOpen}
    >
      <summary className="flex w-full select-none justify-between border-b border-primary-light-grey pb-12 text-left font-semibold">
        {heading}
        <ChevronDownIcon
          className={classNames(
            'h-24 text-secondary-accessible-dark-turquoise transition-transform group-open:-rotate-180'
          )}
        />
      </summary>
      <div className="mt-12 flex flex-col gap-4">{children}</div>
    </details>
  );
};
