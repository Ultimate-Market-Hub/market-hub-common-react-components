import { createColumnHelper, useReactTable } from '@tanstack/react-table';
import { render } from '@testing-library/react';

import { TextField } from '~/components/atoms/TextField';
import { Table } from '~/components/molecules/Table/Table';
import { TableBase } from '~/components/molecules/Table/TableBase';
import { TablePaginationButtons } from '~/components/molecules/Table/TablePaginationButtons';

vi.mock('../TableBase', () => ({
  TableBase: vi.fn().mockReturnValue('tableBase'),
}));
vi.mock('../TablePaginationButtons', () => ({
  TablePaginationButtons: vi.fn().mockReturnValue('tablePaginationButtons'),
}));
vi.mock('../TableLayout', () => ({
  TableLayout: vi
    .fn()
    .mockImplementation(({ children }) => ['tableLayout', children]),
}));
vi.mock('~/components/atoms/TextField', () => ({
  TextField: vi.fn().mockReturnValue('TextField'),
}));
vi.mock('@tanstack/react-table', async () => {
  const actualReactTable: any = await vi.importActual('@tanstack/react-table');

  return {
    useReactTable: vi.fn().mockReturnValue({ stub: 'tableStub' }),
    getCoreRowModel: vi.fn(),
    getFilteredRowModel: vi.fn(),
    getSortedRowModel: vi.fn(),
    getPaginationRowModel: vi.fn(),
    getExpandedRowModel: vi.fn(),
    createColumnHelper: actualReactTable.createColumnHelper,
    getFacetedUniqueValues: vi.fn(),
  };
});

describe('<Table />', () => {
  //TODO: add tests for the filtering madness

  it('should render base+layout', async () => {
    const data = [
      {
        column: 'a',
      },
    ];
    const columnHelper = createColumnHelper<{ column: string }>();
    const columns = [columnHelper.accessor('column', {})];
    const { findByText, queryByText } = render(
      <Table
        data={data}
        columns={columns}
        isLoading={false}
        hasPagination={false}
      />
    );

    expect(await findByText(/tableBase/)).toBeInTheDocument();
    expect(await findByText(/tableLayout/)).toBeInTheDocument();

    expect(queryByText(/TextField/)).not.toBeInTheDocument();
    expect(queryByText(/tablePaginationButtons/)).not.toBeInTheDocument();

    expect(TableBase).toBeCalledWith(
      {
        isLoading: false,
        table: {
          stub: 'tableStub',
        },
      },
      {}
    );

    expect(TablePaginationButtons).not.toBeCalled();
    expect(TextField).not.toBeCalled();

    expect(useReactTable).toBeCalledWith(
      expect.objectContaining({
        data,
        columns,
        getPaginationRowModel: undefined,
      })
    );
  });

  it('should render pagination buttons', async () => {
    const { findByText, queryByText } = render(
      <Table data={[]} columns={[]} hasPagination={true} />
    );

    expect(queryByText(/TextField/)).not.toBeInTheDocument();
    expect(await findByText(/tablePaginationButtons/)).toBeInTheDocument();

    expect(TablePaginationButtons).toBeCalledWith(
      expect.objectContaining({
        table: { stub: 'tableStub' },
      }),
      {}
    );
  });

  it('should render the search text field buttons', async () => {
    const { findByText } = render(
      <Table data={[]} columns={[]} canFilter={true} />
    );

    expect(await findByText(/TextField/)).toBeInTheDocument();
    expect(TextField).toBeCalledWith(
      expect.objectContaining({
        placeholder: 'Search in table',
      }),
      {}
    );
  });
});
