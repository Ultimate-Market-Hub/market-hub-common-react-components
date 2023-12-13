/// <reference types="react" />
import type { TableScaffoldingProps } from '../../../*/components/molecules/Table/TableBase';
export interface TablePaginationActionsProps<T> {
    table: TableScaffoldingProps<T>['table'];
    isLoading?: boolean;
    options?: number[];
}
export declare const TablePaginationButtons: <T>({ table, isLoading, options, }: TablePaginationActionsProps<T>) => import("react").JSX.Element | null;
