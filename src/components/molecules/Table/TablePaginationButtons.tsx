import { CircularButton } from '~/components/atoms/CircularButton';
import type { TableScaffoldingProps } from '~/components/molecules/Table/TableBase';
import { Select } from '~/components/atoms/Select';

export interface TablePaginationActionsProps<T> {
  table: TableScaffoldingProps<T>['table'];
  isLoading?: boolean;
  options?: number[];
}

export const TablePaginationButtons = <T,>({
  table,
  isLoading,
  options = [10, 20, 30, 40, 50],
}: TablePaginationActionsProps<T>) =>
  !(isLoading || !table.getRowModel().rows.length) ? (
    <div className="flex items-center justify-between gap-2 border-t border-t-primary-light-grey px-2 py-1">
      <div className="flex gap-2">
        <CircularButton
          variant="white"
          icon="ChevronDoubleLeftIcon"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          aria-label="First page"
        />
        <CircularButton
          variant="white"
          icon="ChevronLeftIcon"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          aria-label="Previous page"
        />
        <span className="flex w-24 items-center justify-center font-semibold text-primary-dark-grey">
          {`${
            table.getState().pagination.pageIndex + 1
          } of ${table.getPageCount()}`}
        </span>
        <CircularButton
          variant="white"
          icon="ChevronRightIcon"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          aria-label="Next page"
        />
        <CircularButton
          variant="white"
          icon="ChevronDoubleRightIcon"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          aria-label="Last page"
        />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-primary-dark-grey">Show</span>
        <Select
          value={table.getState().pagination.pageSize.toString()}
          options={options.map((pageSize) => ({
            value: pageSize.toString(),
            name: pageSize.toString(),
          }))}
          onChange={(event: { target: { value: any } }) => {
            table.setPageSize(Number(event.target.value));
          }}
          ariaLabel="Page size"
        />
      </div>
    </div>
  ) : null;
