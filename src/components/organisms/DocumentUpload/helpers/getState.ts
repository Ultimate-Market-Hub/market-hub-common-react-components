import type { FileRejection } from 'react-dropzone';

export type DocumentUploadState = 'LOADING' | 'UPLOADED' | 'IDLE' | 'ERROR';

export const getState = ({
  isLoading,
  isUploaded,
  fileRejections,
  isError,
}: {
  isLoading: boolean;
  isUploaded: boolean;
  isError: boolean;
  fileRejections?: FileRejection;
}): DocumentUploadState => {
  if (isLoading) {
    return 'LOADING';
  }
  if (fileRejections?.errors?.length || isError) {
    return 'ERROR';
  }
  if (isUploaded) {
    return 'UPLOADED';
  }
  return 'IDLE';
};
