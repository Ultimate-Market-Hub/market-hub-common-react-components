import React, { useCallback, useEffect, useState } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import { Accept, FileWithPath, useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';

import { Button } from '~/components/atoms/Button';

export const MultipleFileUpload = React.forwardRef<
  HTMLInputElement,
  MultipleFileUploadProps
>(
  (
    {
      handleOnDropAccepted,
      label,
      tooltipContent,
      accept,
      maxSize = 10000000,
      error,
      value,
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref
  ) => {
    const { t: translation } = useTranslation();
    const [dropError, setDropError] = useState<string | null>(null);

    const [files, setFiles] = useState<FileWithPath[]>([]);

    const onDropAccepted = useCallback((acceptedFiles: FileWithPath[]) => {
      setFiles(
        [...acceptedFiles, ...files].filter((newFile) =>
          files.every((f) => f?.path !== newFile.path)
        )
      );

      setDropError(null);
    }, []);

    useEffect(() => {
      handleOnDropAccepted(files);
    }, [files]);

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
      onDropAccepted,
      noClick: true,
      noKeyboard: true,
      accept,
      maxSize,
      multiple: true,
      onDropRejected: ([data]) => {
        const [errors] = data.errors;
        setDropError(errors.message);
      },
    });

    return (
      <div>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p className="text-sm text-primary-dark-grey">
            {translation(
              'multi-file-upload.nothing-uploaded-prompt',
              'If applicable, please upload any damage photos of your vehicle'
            )}
          </p>
          <div
            className={classNames(
              'border-primary relative mt-12 rounded-8 border border-dashed p-20 text-center',
              {
                'bg-[#D2F0F2]': isDragActive,
                'bg-secondary-active transition-colors duration-150 ease-in-out':
                  !isDragActive,
              }
            )}
          >
            <p
              className={classNames('mb-4 hidden text-sm sm:block ', {
                'sm:text-primary': isDragActive,
                'sm:text-primary-medium-grey': !isDragActive,
              })}
            >
              {translation(
                'multi-file-upload.drag-images-label',
                'Drag images here or'
              )}
            </p>
            <div className="flex items-center justify-center">
              <ArrowUpTrayIcon className="text-primary h-20 w-20" />
              <Button type="button" onClick={open}>
                {label}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <UploadStatus value={value} error={error} />
        </div>
        {dropError ? (
          <p className="text-12  mt-8 font-bold text-error">{dropError}</p>
        ) : null}
      </div>
    );
  }
);

interface UploadStatus<T extends object> {
  value: Array<T>;
  error: string | undefined;
}

const UploadStatus = ({ value, error }: UploadStatus<any>) => {
  if (error) {
    return (
      <p role="alert" className="text-error">
        {error}
      </p>
    );
  }

  if (value?.length) {
    return (
      <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
        {value.map((file) => (
          <img
            key={file.imageUrl}
            src={file.imageUrl}
            className="h-[8rem] w-[8rem]"
            alt="file"
          />
        ))}
      </div>
    );
  }

  return null;
};

interface MultipleFileUploadProps {
  label: string;
  error?: string | undefined;
  tooltipContent?: string;
  handleOnDropAccepted: (files: FileWithPath[]) => void;
  accept?: Accept;
  maxSize?: number;
  value: Array<any>;
}
