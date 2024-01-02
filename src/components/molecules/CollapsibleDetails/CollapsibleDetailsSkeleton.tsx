import { CollapsibleDetails } from './CollapsibleDetails';

type CollapsibleDetailsSkeletonProps = {
  title: string;
};

export const CollapsibleDetailsSkeleton = ({
  title,
}: CollapsibleDetailsSkeletonProps) => {
  return (
    <CollapsibleDetails heading={title}>
      <div className="flex animate-pulse flex-col gap-4">
        <ul className="space-y-12">
          <li className="h-16 w-1/3 rounded-[6px] bg-primary-light-grey"></li>
          <li className="h-16 w-full rounded-[6px] bg-primary-light-grey"></li>
          <li className="h-16 w-1/3 rounded-[6px] bg-primary-light-grey"></li>
          <li className="h-16 w-full rounded-[6px] bg-primary-light-grey"></li>
        </ul>
      </div>
    </CollapsibleDetails>
  );
};
