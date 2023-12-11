import type { AxiosError } from 'axios';
import { Button } from 'components/atoms/Button';

export const ComponentLevelError = ({
  error,
  handleAction = () => window.location.reload(),
  actionName = 'Reload page',
}: {
  error?: AxiosError | null;
  handleAction?: (...args: any[]) => void;
  actionName?: string;
}) => (
  <div className="absolute inset-0 flex h-full w-full justify-center bg-white">
    <div className="grid bg-white px-24 py-96 sm:py-[128px] lg:px-32">
      <div className="pt-32 text-center">
        <p className="text-16 font-semibold text-primary-hub">{error?.code}</p>
        <h1 className="text-dark-grey text-16 sm:text-24 mt-16 font-bold tracking-tight">
          Sorry, we couldn't find the data you're looking for
        </h1>
        <p className="text-16 mt-24 leading-7 text-primary-darker-grey">
          {error?.message}
        </p>
        <div className="mt-40 flex items-center justify-center gap-x-24">
          <Button onClick={handleAction}>{actionName}</Button>
        </div>
      </div>
    </div>
  </div>
);
