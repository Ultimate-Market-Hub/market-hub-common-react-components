import { LoadingState } from '../state-components/LoadingState';
import { UploadedState } from '../state-components/UploadedState';
import { IdleState } from '../state-components/IdleState';
import { ErrorState } from '../state-components/ErrorState';
import { FileErrors } from './FileErrors';
import type { DropzoneState } from 'react-dropzone';
import type { DocumentUploadState } from '../helpers/getState';

export type DocumentUploadStatesProps = any & {
  allowedExtensions: string[];
  errors?: DropzoneState['fileRejections'][number]['errors'];
  onDeleteClick?: () => void;
  state: DocumentUploadState;
};

export const DocumentUploadStates = ({
  errors,
  fileSize,
  fileName,
  maxFileSizeMB,
  allowedExtensions,
  errorMessage,
  onDeleteClick,
  state,
}: DocumentUploadStatesProps) => {
  switch (state) {
    case 'LOADING':
      return <LoadingState />;
    case 'ERROR':
      return (
        <ErrorState>
          <FileErrors errors={errors} />
          {errorMessage}
        </ErrorState>
      );
    case 'UPLOADED':
      return (
        <UploadedState
          onDeleteClick={onDeleteClick}
          fileName={fileName}
          fileSize={fileSize}
        />
      );
    case 'IDLE':
      return (
        <IdleState
          maxFileSizeMB={maxFileSizeMB}
          allowedExtensions={allowedExtensions}
        />
      );
  }
};
