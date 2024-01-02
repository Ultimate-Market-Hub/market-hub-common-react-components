import type { DropzoneOptions } from 'react-dropzone';
import type { AriaAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import classNames from 'classnames';
import { useFileValidator } from './hooks/useFileValidator';
import { DocumentUploadStates } from './components/DocumentUploadStates';
import { getState } from './helpers/getState';
import type { FileType } from './types/FileType';
import { useDropzone } from 'react-dropzone';

export type DocumentUploadProps = {
  /**
   * Triggered on drop or file select, not triggered on delete click
   * @param files Dropped or selected files
   */
  onFileUpload: (files: File[]) => void;
  /**
   * Triggered on clicking the trash icon in the uploaded state
   */
  onDeleteClick?: () => void;

  // State manipulation
  isLoading: boolean;
  isUploaded: boolean;
  isError: boolean;
  isDisabled?: boolean;

  // State dependant optionals
  /**
   * Only displayed in the uploaded state
   */
  fileName?: string;
  /**
   * Only displayed in the uploaded state
   */
  fileSize?: number;
  /**
   * Only displayed in the error
   */
  errorMessage?: ReactNode;

  // Validation config
  maxFileSizeMB: number;
  allowedFileTypes: FileType[];
} & AriaAttributes;

export const DocumentUpload = forwardRef<HTMLDivElement, DocumentUploadProps>(
  (
    {
      isDisabled,
      onFileUpload,
      isLoading,
      isUploaded,
      isError,
      fileSize,
      fileName,
      errorMessage,
      maxFileSizeMB,
      allowedFileTypes,
      onDeleteClick,
      ...ariaAttributes
    },
    ref
  ) => {
    const fileValidator = useFileValidator(allowedFileTypes);
    const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024;

    const onDropAccepted: DropzoneOptions['onDropAccepted'] = (files) => {
      onFileUpload(files);
    };

    const {
      getRootProps,
      getInputProps,
      acceptedFiles: [acceptedFile],
      fileRejections: [fileRejections],
    } = useDropzone({
      maxFiles: 1,
      maxSize: maxFileSizeBytes,
      validator: fileValidator,
      onDropAccepted,
      disabled: isDisabled,
    });

    return (
      <div
        {...getRootProps({
          className: classNames('w-full', {
            'saturate-0 cursor-not-allowed': isDisabled,
            'cursor-pointer': !isDisabled,
          }),
          ...ariaAttributes,
          ref,
        })}
        data-testid="uploadWrapper"
      >
        <div className={'flex min-h-[4rem] w-full flex-col justify-center'}>
          <DocumentUploadStates
            {...{
              maxFileSizeMB,
              errorMessage,
            }}
            state={getState({
              isError,
              isUploaded,
              isLoading,
              fileRejections,
            })}
            errors={fileRejections?.errors}
            fileName={fileName ?? acceptedFile?.name}
            fileSize={fileSize ?? acceptedFile?.size}
            onDeleteClick={onDeleteClick}
            allowedExtensions={allowedFileTypes.map(
              ({ extension }) => extension
            )}
          />
        </div>
        <input data-testid="input" {...getInputProps()} />
      </div>
    );
  }
);
