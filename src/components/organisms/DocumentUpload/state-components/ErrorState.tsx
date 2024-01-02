import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as CheckmarkInCircleIcon } from '../assets/check-with-circle-filled.svg';
import { ReactComponent as ReloadIcon } from '../assets/BE230-refresh reload screen.svg';

export const ErrorState = ({ children }: PropsWithChildren) => {
  const { t: translation } = useTranslation();

  return (
    <div className="flex grow items-center justify-between rounded-4 bg-primary-santander-50 p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <CheckmarkInCircleIcon
            className={'shrink-0 self-center fill-error'}
            width={16}
            height={16}
          />
          <div className="text-14 font-semibold text-error">
            {translation('document-upload.error', 'Error')}
          </div>
        </div>
        <div className="flex flex-col text-12">{children}</div>
      </div>
      <div className="flex items-center gap-4 px-12 text-secondary-accessible-dark-turquoise">
        <ReloadIcon className="fill-secondary-accessible-dark-turquoise" />
        <div>{translation('document-upload.try-again', 'Try again')}</div>
      </div>
    </div>
  );
};
