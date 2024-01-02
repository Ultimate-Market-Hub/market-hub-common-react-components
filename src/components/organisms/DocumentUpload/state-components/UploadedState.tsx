import { useTranslation } from 'react-i18next';
import { ReactComponent as TrashIcon } from '../assets/BC430-trash bin.svg';
import { ReactComponent as CheckmarkInCircleIcon } from '../assets/check-with-circle-filled.svg';

interface UploadCardUploadedStateProps {
  fileName?: string;
  fileSize?: number;
  onDeleteClick?: () => void;
}

export const UploadedState = ({
  fileName,
  fileSize,
  onDeleteClick,
}: UploadCardUploadedStateProps) => {
  const { t: translation } = useTranslation();

  return (
    <>
      <div className="flex w-full grow items-center justify-between rounded-4 bg-secondary-green-50 p-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4 text-14 font-semibold text-secondary-green">
            <CheckmarkInCircleIcon
              width={16}
              height={16}
              className="fill-secondary-green"
            />
            <span data-testid="status">
              {fileName && (
                <>
                  {fileName.includes('dealerapp') &&
                    translation(
                      'contract.document-uploaded-from-app',
                      'Scanned by App'
                    )}
                  {!fileName.includes('dealerapp') &&
                    translation('contract.document-uploaded', 'Uploaded')}
                </>
              )}
              {!fileName && (
                <p className={'py-8 text-secondary-green'}>
                  {translation('contract.document-uploaded', 'Uploaded')}
                </p>
              )}
            </span>
          </div>
          {fileName && (
            <div className={'flex w-full flex-row gap-4'}>
              <p
                className={'not-sr-only text-12 text-primary-dark-grey'}
                data-testid="file-name"
              >
                {fileName.length < 30 ? fileName : `...${fileName.slice(-16)}`}
              </p>

              {typeof fileSize === 'number' && (
                <p
                  className="text-12 text-primary-medium-grey"
                  data-testid="file-size"
                >
                  {Math.floor(fileSize / 1000)}kb
                </p>
              )}
            </div>
          )}
        </div>

        {typeof onDeleteClick === 'function' && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onDeleteClick();
            }}
          >
            <TrashIcon className="fill-primary-santander" />
          </button>
        )}
      </div>
    </>
  );
};
