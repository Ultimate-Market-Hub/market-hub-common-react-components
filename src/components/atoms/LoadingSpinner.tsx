import classNames from 'classnames';

import { useDesktopMenuState } from '~/hooks/useDesktopMenuState';

interface Props {
  isFullscreen?: boolean;
}

export const LoadingSpinner = ({ isFullscreen = true }: Props) => {
  const desktopMenuState = useDesktopMenuState();

  return (
    <div
      className={classNames(
        {
          absolute: !isFullscreen,
          fixed: isFullscreen,
          'md:pl-[256px]': isFullscreen && desktopMenuState.isOpen,
        },
        'inset-0 z-10 flex h-full w-full items-center justify-center bg-white/75'
      )}
    >
      <div className="h-6 w-6 animate-spin rounded-50 border-4 border-primary-hub-800 border-r-transparent" />
    </div>
  );
};
