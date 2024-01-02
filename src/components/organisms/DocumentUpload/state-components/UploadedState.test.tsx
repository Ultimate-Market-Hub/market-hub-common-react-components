import { act, render, screen } from '@testing-library/react';
import { UploadedState } from './UploadedState';
import userEvent from '@testing-library/user-event';

vi.mock('react-i18next', () => ({
  useTranslation: vi.fn(() => ({
    t: (key: string) => key,
  })),
}));

vi.mock('assets/svg/BC430-trash bin.svg', () => ({
  ReactComponent: vi.fn(() => <div data-testid="trash-icon" />),
}));
vi.mock('assets/svg/check-with-circle-filled.svg', () => ({
  ReactComponent: vi.fn(() => <div data-testid="check-icon" />),
}));

describe('<UploadedState>', () => {
  it('should display a generic message without file name', () => {
    render(<UploadedState />);

    const statusElement = screen.getByTestId('status');
    expect(statusElement).toBeVisible();
    expect(statusElement).toHaveTextContent('contract.document-uploaded');
  });

  it('should display the file name and a generic message with file name', () => {
    render(<UploadedState fileName={'FILE_NAME.pdf'} />);

    const statusElement = screen.getByTestId('status');
    expect(statusElement).toHaveTextContent('contract.document-uploaded');

    const fileNameElement = screen.getByTestId('file-name');
    expect(fileNameElement).toBeVisible();
    expect(fileNameElement).toHaveTextContent('FILE_NAME.pdf');
  });

  it('should display a specific message with file name including dealerapp', () => {
    render(<UploadedState fileName={'dealerapp.pdf'} />);

    const statusElement = screen.getByTestId('status');
    expect(statusElement).toHaveTextContent(
      'contract.document-uploaded-from-app'
    );
  });

  it("should not display the file size when fileSize isn't provided", () => {
    render(<UploadedState fileName={'FILE_NAME.pdf'} />);

    const fileSizeElement = screen.queryByTestId('file-size');
    expect(fileSizeElement).not.toBeInTheDocument();
  });

  it('should display the file size', () => {
    render(<UploadedState fileName={'FILE_NAME.pdf'} fileSize={12323} />);

    const fileSizeElement = screen.getByTestId('file-size');
    expect(fileSizeElement).toHaveTextContent('12kb');
  });

  it('should truncate the file name if too long', () => {
    render(<UploadedState fileName={'A_VERY_VERY_VERY_LONG_FILE_NAME.pdf'} />);

    const fileNameElement = screen.getByTestId('file-name');
    expect(fileNameElement).toHaveTextContent('...NG_FILE_NAME.pdf');
  });

  it("should not display the delete button when onDeleteClick isn't provided", () => {
    render(<UploadedState fileName={'A_VERY_VERY_VERY_LONG_FILE_NAME.pdf'} />);

    expect(screen.queryByTestId('trash-icon')).not.toBeInTheDocument();
  });

  it('should trigger onDeleteClick when delete button is clicked', async () => {
    const onDeleteClick = vi.fn();

    render(
      <UploadedState
        onDeleteClick={onDeleteClick}
        fileName={'A_VERY_VERY_VERY_LONG_FILE_NAME.pdf'}
      />
    );
    expect(onDeleteClick).not.toHaveBeenCalled();

    const user = userEvent.setup();

    const deleteButton = screen.getByRole('button');
    await act(async () => {
      await user.click(deleteButton);
    });

    expect(onDeleteClick).toHaveBeenCalled();
  });

  it('should not trigger a surrounding form submit action', async () => {
    const onSubmit = vi.fn();

    render(
      <form onSubmit={onSubmit}>
        <UploadedState onDeleteClick={vi.fn()} fileName={'some_file.pdf'} />
      </form>
    );

    const user = userEvent.setup();

    const deleteButton = screen.getByRole('button');
    await act(async () => {
      await user.click(deleteButton);
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });
});
