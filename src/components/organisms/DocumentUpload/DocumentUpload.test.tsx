import { render, screen, within } from '@testing-library/react';
import { DocumentUpload } from './DocumentUpload';
import { DocumentUploadStates } from './components/DocumentUploadStates';
import type { Mock } from 'vitest';
import { getState } from './helpers/getState';
import { useDropzone } from 'react-dropzone';

const getRootProps = vi.fn(() => ({ data: '1' }));
const getInputProps = vi.fn(() => ({ data: '2' }));
vi.mock('react-dropzone', () => ({
  FileRejection: vi.fn(),
  useDropzone: vi.fn(() => ({
    getRootProps,
    getInputProps,
    acceptedFiles: [
      {
        name: 'FILE_NAME',
        size: 1234,
      },
    ],
    fileRejections: [],
  })),
}));

vi.mock('./components/DocumentUploadStates', () => ({
  DocumentUploadStates: vi.fn(() => (
    <div data-testid="document-upload-states" />
  )),
}));

const fileValidator = vi.fn();
vi.mock('hooks/useFileValidator', () => ({
  useFileValidator: vi.fn(() => ({
    fileValidator,
    maxSize: 10000,
  })),
}));

vi.mock('./helpers/getState', () => ({
  getState: vi.fn(),
}));

const onFileUpload = vi.fn();
const ref = vi.fn();

describe('DocumentUploadCard', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the useDropzone components', () => {
    render(
      <DocumentUpload
        onFileUpload={onFileUpload}
        isLoading={false}
        isUploaded={false}
        isError={false}
        isDisabled={false}
        ref={ref}
        allowedFileTypes={[{ mimeType: 'application/pdf', extension: '.pdf' }]}
        maxFileSizeMB={10}
        aria-labelledby={'LABEL'}
      />
    );

    expect(useDropzone).toHaveBeenCalledWith({
      maxFiles: 1,
      maxSize: 10 * 1024 * 1024,
      validator: expect.any(Function),
      onDropAccepted: expect.any(Function),
      disabled: false,
    });

    const uploadWrapper = screen.getByTestId('uploadWrapper');
    expect(uploadWrapper).toBeVisible();
    expect(uploadWrapper).toHaveAttribute('data', '1');
    expect(getRootProps).toHaveBeenCalledWith({
      className: 'w-full cursor-pointer',
      'aria-labelledby': 'LABEL',
      ref,
    });

    const input = within(uploadWrapper).getByTestId('input');
    expect(input).toBeVisible();
    expect(input).toHaveAttribute('data', '2');
    expect(getInputProps).toHaveBeenCalled();
  });

  it('should call its dependencies', () => {
    (getState as Mock).mockReturnValue('UPLOADED');

    const onDeleteClick = vi.fn();

    render(
      <DocumentUpload
        onFileUpload={onFileUpload}
        onDeleteClick={onDeleteClick}
        isLoading={false}
        isUploaded={false}
        isError={false}
        ref={ref}
        errorMessage={'ERROR_MESSAGE'}
        allowedFileTypes={[{ mimeType: 'application/pdf', extension: '.pdf' }]}
        maxFileSizeMB={10}
        aria-labelledby={'LABEL'}
      />
    );

    expect(DocumentUploadStates).toHaveBeenCalledWith(
      {
        state: 'UPLOADED',
        maxFileSizeMB: 10,
        errorMessage: 'ERROR_MESSAGE',
        errors: undefined,
        fileName: 'FILE_NAME',
        fileSize: 1234,
        onDeleteClick,
        allowedExtensions: ['.pdf'],
      },
      expect.anything()
    );

    expect(getState).toHaveBeenCalledWith({
      isLoading: false,
      isUploaded: false,
      isError: false,
      fileRejections: undefined,
    });
  });
});
