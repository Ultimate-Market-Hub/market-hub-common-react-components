import { render, type RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TablePaginationButtons } from '~/components/molecules/Table/TablePaginationButtons';
import {
  buildRow,
  buildTableData,
  getCanNextPageMock,
  getCanPreviousPageMock,
  getStateMock,
  nextPageMock,
  previousPageMock,
  setPageIndexMock,
  setPageSizeMock,
} from '~/components/molecules/Table/test/StubTableWithMocks';

const buildElement = () => (
  <TablePaginationButtons
    table={buildTableData({
      rows: new Array(100).map((_, index) =>
        buildRow({
          name: `data-${index}`,
        })
      ),
    })}
  />
);

const findButtons = async (findByRole: RenderResult['findByRole']) => {
  // Assert
  const firstPageButton = await findByRole('button', { name: /First page/ });
  const previousPageButton = await findByRole('button', {
    name: /Previous page/,
  });
  const nextPageButton = await findByRole('button', { name: /Next page/ });
  const lastPageButton = await findByRole('button', { name: /Last page/ });

  return {
    firstPageButton,
    previousPageButton,
    nextPageButton,
    lastPageButton,
  };
};

describe('<TablePaginationButtons />', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    getStateMock.mockReturnValue({
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    });
  });

  it('should display the buttons', async () => {
    // Arrange
    getCanPreviousPageMock.mockReturnValue(true);
    getCanNextPageMock.mockReturnValue(true);

    // Act

    const { findByRole } = render(buildElement());

    // Assert
    const {
      firstPageButton,
      previousPageButton,
      nextPageButton,
      lastPageButton,
    } = await findButtons(findByRole);

    [
      firstPageButton,
      previousPageButton,
      nextPageButton,
      lastPageButton,
    ].forEach((button) => {
      expect(button).toBeEnabled();
    });
  });

  it('should disable the previous buttons', async () => {
    // Rearrange
    getCanPreviousPageMock.mockReturnValue(false);
    getCanNextPageMock.mockReturnValue(true);
    // Act
    const { findByRole } = render(buildElement());

    // Assert
    const {
      firstPageButton,
      previousPageButton,
      nextPageButton,
      lastPageButton,
    } = await findButtons(findByRole);

    [firstPageButton, previousPageButton].forEach((button) => {
      expect(button).toBeDisabled();
    });
    [nextPageButton, lastPageButton].forEach((button) => {
      expect(button).toBeEnabled();
    });
  });

  it('should disable the next buttons', async () => {
    // Rearrange
    getCanPreviousPageMock.mockReturnValue(true);
    getCanNextPageMock.mockReturnValue(false);
    // Act
    const { findByRole } = render(buildElement());

    // Assert
    const {
      firstPageButton,
      previousPageButton,
      nextPageButton,
      lastPageButton,
    } = await findButtons(findByRole);
    [firstPageButton, previousPageButton].forEach((button) => {
      expect(button).toBeEnabled();
    });
    [nextPageButton, lastPageButton].forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  it('should let the users navigate pages', async () => {
    // Arrange
    getCanNextPageMock.mockReturnValue(true);
    getCanPreviousPageMock.mockReturnValue(true);
    const user = userEvent.setup();
    const { findByRole } = render(buildElement());

    // Assert
    const {
      firstPageButton,
      previousPageButton,
      nextPageButton,
      lastPageButton,
    } = await findButtons(findByRole);

    // Act
    await user.click(firstPageButton);
    // Assert
    expect(setPageIndexMock).toBeCalledWith(0);

    // Act
    await user.click(previousPageButton);
    // Assert
    expect(previousPageMock).toBeCalled();

    // Act
    await user.click(nextPageButton);
    // Assert
    expect(nextPageMock).toBeCalled();

    // Act
    await user.click(lastPageButton);
    // Assert
    expect(setPageIndexMock).toBeCalledWith(9);
  });

  it('should let the user select a page size', async () => {
    // Arrange
    const user = userEvent.setup();
    const { findByRole } = render(buildElement());

    // Assert
    const pageSizeSelect = await findByRole('combobox', { name: /Page size/ });

    // Act
    await user.selectOptions(pageSizeSelect, '50');

    // Assert
    expect(setPageSizeMock).toBeCalledWith(50);
  });
});
