import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
  type ChangeEvent,
} from 'react';
import { rankItem } from '@tanstack/match-sorter-utils';
import {
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type FilterFn,
  type OnChangeFn,
  type Row,
  type RowSelectionState,
  type SortingState,
  type Table as TableType,
} from '@tanstack/react-table';

import { TextField } from '~/components/atoms/TextField';
import {
  TableBase,
  type TableScaffoldingProps,
} from '~/components/molecules/Table/TableBase';
import { TableLayout } from '~/components/molecules/Table/TableLayout';
import { TablePaginationButtons } from '~/components/molecules/Table/TablePaginationButtons';

export type TableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
  isLoading?: TableScaffoldingProps<TData>['isLoading'];
  canFilter?: boolean;
  hasPagination?: TableScaffoldingProps<TData>['isLoading'];
  getRowCanExpand?: (row: Row<TData>) => boolean;
  renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
  onSelect?: (rows: number[]) => void;
  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
  pageSizeOptions?: number[];
};

function _Table<TData>(
  {
    data,
    columns,
    isLoading,
    canFilter,
    hasPagination,
    renderSubComponent,
    getRowCanExpand,
    onSelect,
    sorting,
    onSortingChange,
    pageSizeOptions,
  }: TableProps<TData>,
  ref: React.ForwardedRef<TableType<TData>>
) {
  const [query, setQuery] = useState('');
  const [globalFilter, setGlobalFilter] = useState('');
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  useEffect(() => {
    if (onSelect) {
      onSelect(Object.keys(rowSelection).map(Number));
    }
  }, [onSelect, rowSelection]);

  // We are going to use a fuzzy search function using the tools
  // provided by the library.

  const fuzzyFilter: FilterFn<TData> = useCallback(
    (row, columnId, value, addMeta) => {
      const itemRank = rankItem(row.getValue(columnId), value);
      addMeta({
        itemRank,
      });
      return itemRank.passed;
    },
    []
  );

  const sortingProps = onSortingChange
    ? {
        manualSorting: true,
        onSortingChange,
        state: {
          sorting,
        },
      }
    : {};

  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      globalFilter,
      rowSelection,
      columnFilters,
    },
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: hasPagination ? getPaginationRowModel() : undefined,
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    enableColumnFilters: true,
    onColumnFiltersChange: setColumnFilters,
    getFacetedUniqueValues: getFacetedUniqueValues(),
    ...sortingProps,
  });

  // We are going to debounce the search input 250ms to avoid
  // filtering in every key stroke.

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGlobalFilter(query);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  useEffect(() => {
    if (pageSizeOptions) {
      table.setPageSize(pageSizeOptions[0]);
    }
  }, [pageSizeOptions, table]);

  // We expose the `table` object as the component's `ref`.

  useImperativeHandle(ref, () => table, [table]);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  return (
    <TableLayout>
      {canFilter && (
        <TextField
          onChange={handleFilterChange}
          placeholder="Search in table"
        />
      )}
      <TableBase
        isLoading={isLoading}
        table={table}
        renderSubComponent={renderSubComponent}
      />
      {hasPagination && (
        <TablePaginationButtons options={pageSizeOptions} table={table} />
      )}
    </TableLayout>
  );
}

export const Table = forwardRef(_Table) as (<TData>(
  p: TableProps<TData> & { ref?: React.ForwardedRef<TableType<TData>> }
) => JSX.Element) & { displayName: string };

Table.displayName = 'Table';
