import { useTranslation } from 'react-i18next';

export const LoadingState = () => {
  const { t: translation } = useTranslation();
  return (
    <div
      className={
        'flex grow flex-col rounded-4 border border-dashed border-primary-light-grey bg-neutral-50 px-8 py-12'
      }
    >
      <p>
        {translation(
          'contract.document-upload-card-uploading-file',
          'Uploading file...'
        )}
      </p>
      <div className="relative mt-8 flex h-4 w-full overflow-hidden rounded-12 bg-primary-light-grey">
        <div className="progress absolute h-4 animate-progress bg-primary-santander" />
      </div>
    </div>
  );
};
