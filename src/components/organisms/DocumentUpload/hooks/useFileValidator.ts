import type { DropzoneOptions } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import type { FileType } from '../types/FileType';

export const useFileValidator = (
  allowedFileTypes: FileType[]
): DropzoneOptions['validator'] => {
  const { t: translation } = useTranslation();
  return (file) => {
    if (!allowedFileTypes.map(({ mimeType }) => mimeType).includes(file.type)) {
      return {
        code: 'invalid-mime-type',
        message: translation(
          'file-type-restrictions',
          'The File must be of type {{extensionList}}',
          {
            extensionList: allowedFileTypes
              .map((ext) => ext.extension)
              .join(', '),
          }
        ),
      };
    }

    return null;
  };
};
