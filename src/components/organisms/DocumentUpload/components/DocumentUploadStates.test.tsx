import { render, screen, within } from '@testing-library/react';
import { LoadingState } from '../state-components/LoadingState';
import { UploadedState } from '../state-components/UploadedState';
import { IdleState } from '../state-components/IdleState';
import { ErrorState } from '../state-components/ErrorState';
import { FileErrors } from './FileErrors';
import { DocumentUploadStates } from './DocumentUploadStates';

vi.mock('./FileErrors', () => ({
  FileErrors: vi.fn(() => <div data-testid="file-errors" />),
}));
vi.mock('../state-components/LoadingState', () => ({
  LoadingState: vi.fn(() => <div data-testid="loading-state" />),
}));
vi.mock('../state-components/UploadedState', () => ({
  UploadedState: vi.fn(() => <div data-testid="uploaded-state" />),
}));
vi.mock('../state-components/IdleState', () => ({
  IdleState: vi.fn(() => <div data-testid="idle-state" />),
}));
vi.mock('../state-components/ErrorState', () => ({
  ErrorState: vi.fn(({ children }) => (
    <div data-testid="error-state">{children}</div>
  )),
}));

describe('<DocumentUploadStates>', () => {
  it('should display a loading state', () => {
    render(
      <DocumentUploadStates
        state={'LOADING'}
        maxFileSizeMB={10}
        allowedExtensions={['.pdf']}
      />
    );

    expect(screen.getByTestId('loading-state')).toBeVisible();
    expect(LoadingState).toHaveBeenCalled();
  });

  it('should display an uploaded state', () => {
    const onDeleteClick = vi.fn();

    render(
      <DocumentUploadStates
        state={'UPLOADED'}
        onDeleteClick={onDeleteClick}
        maxFileSizeMB={10}
        allowedExtensions={['.pdf']}
        fileSize={1234}
        fileName={'FILE_NAME'}
      />
    );

    expect(screen.getByTestId('uploaded-state')).toBeVisible();
    expect(UploadedState).toHaveBeenCalledWith(
      {
        fileName: 'FILE_NAME',
        fileSize: 1234,
        onDeleteClick,
      },
      expect.anything()
    );
  });

  it('should display an idle state', () => {
    render(
      <DocumentUploadStates
        state={'IDLE'}
        maxFileSizeMB={10}
        allowedExtensions={['.pdf']}
      />
    );

    expect(screen.getByTestId('idle-state')).toBeVisible();
    expect(IdleState).toHaveBeenCalled();
  });
  it('should display an error state', () => {
    render(
      <DocumentUploadStates
        state={'ERROR'}
        maxFileSizeMB={10}
        allowedExtensions={['.pdf']}
        errors={[
          {
            code: 'ERROR_CODE',
            message: 'ERROR_MESSAGE',
          },
        ]}
        errorMessage="OUTSIDE_ERROR_MESSAGE"
      />
    );

    const errorWrapper = screen.getByTestId('error-state');
    expect(errorWrapper).toBeVisible();
    expect(ErrorState).toHaveBeenCalled();

    expect(within(errorWrapper).getByTestId('file-errors')).toBeVisible();
    expect(FileErrors).toHaveBeenCalledWith(
      {
        errors: [
          {
            code: 'ERROR_CODE',
            message: 'ERROR_MESSAGE',
          },
        ],
      },
      expect.anything()
    );

    expect(
      within(errorWrapper).getByText('OUTSIDE_ERROR_MESSAGE')
    ).toBeVisible();
  });
});
