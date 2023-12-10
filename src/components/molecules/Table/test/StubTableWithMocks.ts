import type {
  Cell,
  Column,
  Header,
  HeaderContext,
  Row,
  Table,
} from '@tanstack/react-table';

export const headerToggleSortMock = vi.fn();

export const buildHeader = ({
  name,
  headerId,
}: {
  name: string;
  headerId: string;
}) =>
  ({
    id: headerId,
    index: 0,
    depth: 0,
    colSpan: 1,
    rowSpan: 1,
    subHeaders: [],
    isPlaceholder: false,
    getContext: () => undefined as unknown as HeaderContext<any, any>,
    placeholderId: '',
    column: {
      id: name,
      getToggleSortingHandler: headerToggleSortMock,
      getIsSorted: () => 'none',
      getCanSort: () => false,
      columnDef: {
        header: name,
      },
    } as unknown as Column<never, never>,
  } as unknown as Header<never, unknown>);

//TODO: multi column
export const buildRow = <T>({ name }: { name: string }): Row<T> =>
  ({
    id: name,
    getIsExpanded: () => false,
    getVisibleCells: (): Cell<T, unknown>[] => [
      {
        getContext: () => undefined,
        id: name,
        column: {
          columnDef: {
            cell: name,
          },
        },
      } as unknown as Cell<T, unknown>,
    ],
  } as unknown as Row<T>);

export const getStateMock = vi.fn();
export const getCanPreviousPageMock = vi.fn();
export const getCanNextPageMock = vi.fn();
export const setPageSizeMock = vi.fn();
export const nextPageMock = vi.fn();
export const previousPageMock = vi.fn();
export const setPageIndexMock = vi.fn();

export const buildTableData = ({
  rows,
}: {
  rows: Row<unknown>[];
}): Table<never> =>
  ({
    getPageCount: () => 10,
    getCanPreviousPage: getCanPreviousPageMock,
    getCanNextPage: getCanNextPageMock,
    getState: getStateMock,
    setPageSize: setPageSizeMock,
    nextPage: nextPageMock,
    previousPage: previousPageMock,
    setPageIndex: setPageIndexMock,
    getRowModel: () => ({
      rows,
      flatRows: rows,
      rowsById: {},
    }),
    getHeaderGroups: () => [
      {
        headers: [
          buildHeader({
            name: 'headerGroup1Column1',
            headerId: 'headerGroup1',
          }),
          buildHeader({
            name: 'headerGroup2Column1',
            headerId: 'headerGroup2',
          }),
        ],
        id: 'header',
        depth: 1,
      },
    ],
  } as unknown as Table<never>);
