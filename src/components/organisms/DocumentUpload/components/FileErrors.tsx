import type { FileError } from 'react-dropzone';
import { useTranslation } from 'react-i18next';

/*
 * translation('document-upload.error-file-invalid-type','The file has an invalid file type')
 * translation('document-upload.error-file-too-large','The file is too large')
 * translation('document-upload.error-file-too-small','The file is too small')
 * translation('document-upload.error-too-many-files','Too many files were uploaded')
 */

export const FileErrors = ({ errors }: { errors?: FileError[] }) => {
  const { t: translation } = useTranslation();
  return (
    <>
      {errors?.map((error) =>
        translation(`document-upload.error-${error.code}`, error.message)
      ) ?? []}
    </>
  );
};
