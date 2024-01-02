import { DocumentUpload, type DocumentUploadProps } from './DocumentUpload';
import type { UseMutationResult } from '@tanstack/react-query';
import { createFormDataForFirstFile } from './helpers/createFormDataForFirstFile';
import type { AxiosError, AxiosResponse } from 'axios';
import type { ErrorResponse } from '../../api/ErrorResponse';

type ImplementedProps =
  | 'onFileUpload'
  | 'isUploaded'
  | 'isLoading'
  | 'isError'
  | 'errorMessage'
  | 'onDeleteClick';

export type DocumentUploadUsingMutationProps = Partial<
  Pick<DocumentUploadProps, ImplementedProps>
> &
  Omit<DocumentUploadProps, ImplementedProps> & {
    mutation: UseMutationResult<AxiosResponse, unknown, FormData>;
  };

export const DocumentUploadUsingMutation = ({
  mutation,
  ...props
}: DocumentUploadUsingMutationProps) => {
  return (
    <DocumentUpload
      onFileUpload={(files) => {
        mutation.mutate(createFormDataForFirstFile(files));
      }}
      isLoading={mutation.isLoading}
      isUploaded={mutation.isSuccess}
      isError={mutation.isError}
      errorMessage={
        (mutation.error as AxiosError<ErrorResponse> | undefined)?.response
          ?.data.formattedMessage
      }
      onDeleteClick={() => {
        mutation.reset();
      }}
      {...props}
    />
  );
};
