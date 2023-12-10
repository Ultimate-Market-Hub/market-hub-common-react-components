import { Fragment, type ReactElement } from 'react';
import { flexRender, type Row, type Table } from '@tanstack/react-table';

export interface TableScaffoldingProps<TData> {
  table: Table<TData>;
  isLoading?: boolean;
  tablePrefixElement?: ReactElement;
  hasPagination?: boolean;
  renderSubComponent?: (props: { row: Row<TData> }) => React.ReactElement;
}

export const TableBase = <TData,>({
  table,
  isLoading,
  renderSubComponent,
}: TableScaffoldingProps<TData>) => {
  const isEmpty = !table.getRowModel().rows.length;

  return (
    <div className="overflow-auto">
      <table
        className="min-w-full divide-y divide-primary-light-grey"
        aria-busy={isLoading}
        aria-live="polite"
      >
        {/* Header with buttons elements and sorting icons */}
        <thead className="bg-neutral-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const content = flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                );
                return (
                  <th
                    key={header.id}
                    scope="col"
                    className="text-14 py-4 text-left font-semibold text-primary-dark-grey first:pl-8 first:pr-4 first:font-semibold first:sm:pl-12"
                  >
                    {header.column.getCanSort() ? (
                      <button
                        type="button"
                        className="flex gap-8 capitalize"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        <span>{content}</span>
                        <span>
                          {{ asc: '▲', desc: '▼', none: '' }[
                            header.column.getIsSorted() as string
                          ] ?? null}
                        </span>
                      </button>
                    ) : (
                      content
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody
          className="divide-y divide-neutral-300 bg-primary-white"
          data-testid="table-body"
        >
          {/* Body with loading/empty or data states */}
          {isLoading || isEmpty ? (
            <>
              {isLoading ? (
                <>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id} className="animate-pulse">
                      {headerGroup.headers.map((_, index) => (
                        <td
                          key={`${headerGroup.id}-${index}`}
                          className="p-4 first:pl-8 first:pr-4 first:sm:pl-4"
                        >
                          <div
                            className="h-12 w-1/2 bg-neutral-50"
                            aria-label="Loading"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ) : (
                <tr className="relative h-96">
                  <td className="absolute flex h-96 w-full items-center justify-center text-neutral-500">
                    There is no data to show
                  </td>
                </tr>
              )}
            </>
          ) : (
            table.getRowModel().rows.map((row) => (
              <Fragment key={row.id}>
                <tr>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="text-14 whitespace-nowrap p-2 text-primary-medium-grey first:pl-8 first:pr-4 first:font-semibold first:sm:pl-12"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
                {row.getIsExpanded() && (
                  <tr>
                    <td colSpan={row.getVisibleCells().length}>
                      {renderSubComponent?.({ row })}
                    </td>
                  </tr>
                )}
              </Fragment>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
