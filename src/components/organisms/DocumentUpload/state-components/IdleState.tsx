import { Trans, useTranslation } from 'react-i18next';
import { ReactComponent as UploadIcon } from '../assets/BE270-upload.svg';

export const IdleState = ({
  maxFileSizeMB,
  allowedExtensions,
}: {
  maxFileSizeMB: number;
  allowedExtensions: string[];
}) => {
  const { t: translation } = useTranslation();

  return (
    <div className="flex gap-8 rounded-4 border border-dashed border-primary-light-grey bg-neutral-50 p-8">
      <UploadIcon
        className={
          'shrink-0 self-center fill-secondary-accessible-dark-turquoise'
        }
      />
      <div className="grow">
        <p className="leading-14">
          <Trans i18nKey="contract.document-upload-card-drag-here-or-browse">
            Drop files to attach,{' '}
            <span className="text-secondary-accessible-dark-turquoise">
              or browse from PC
            </span>
          </Trans>
        </p>
        <div className="flex w-full grow justify-between text-12 text-neutral-300 md:text-14">
          <p>{allowedExtensions.join(', ')}</p>
          <p>
            {translation(
              'contract.max-file-size',
              'Max size of {{fileSize}} MB',
              { fileSize: maxFileSizeMB }
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
