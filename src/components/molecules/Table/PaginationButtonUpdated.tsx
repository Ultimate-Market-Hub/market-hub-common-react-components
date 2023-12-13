import { SquareButton } from '~/components/atoms/SquareButton';
import { TableScaffoldingProps } from '~/components/molecules/Table/TableBase';

export interface TablePaginationActionsProps<T> {
  table: TableScaffoldingProps<T>['table'];
  isLoading?: boolean;
  options?: number[];
}

export const Example = <T,>({
  table,
  isLoading,
  options = [10, 20, 30, 40, 50],
}: TablePaginationActionsProps<T>) =>
  !(isLoading || !table.getRowModel().rows.length) ? (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <SquareButton
          icon="ArrowLongLeftIcon"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          aria-label="First page"
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        />
        <SquareButton
          variant="ghost"
          icon="ChevronLeftIcon"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          aria-label="Previous page"
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        />
      </div>
      <div className="hidden md:-mt-px md:flex">
        <SquareButton className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
          1
        </SquareButton>
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        <SquareButton
          className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
          aria-current="page"
        >
          2
        </SquareButton>
        <SquareButton className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
          3
        </SquareButton>
        <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
          ...
        </span>
        <SquareButton className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
          8
        </SquareButton>
        <SquareButton className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
          9
        </SquareButton>
        <SquareButton className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
          10
        </SquareButton>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <SquareButton
          variant="ghost"
          icon="ChevronRightIcon"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          aria-label="Next page"
        />
        <SquareButton
          variant="ghost"
          icon="ChevronDoubleRightIcon"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          aria-label="Last page"
        />
      </div>
    </nav>
  ) : null;
