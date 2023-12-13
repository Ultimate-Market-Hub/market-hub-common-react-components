/// <reference types="react" />
import { type ColumnDef, type OnChangeFn, type Row, type SortingState, type Table as TableType } from '@tanstack/react-table';
import { type TableScaffoldingProps } from '../../../*/components/molecules/Table/TableBase';
export type TableProps<TData> = {
    data: TData[];
    columns: ColumnDef<TData, any>[];
    isLoading?: TableScaffoldingProps<TData>['isLoading'];
    canFilter?: boolean;
    hasPagination?: TableScaffoldingProps<TData>['isLoading'];
    getRowCanExpand?: (row: Row<TData>) => boolean;
    renderSubComponent?: (props: {
        row: Row<TData>;
    }) => React.ReactElement;
    onSelect?: (rows: number[]) => void;
    sorting?: SortingState;
    onSortingChange?: OnChangeFn<SortingState>;
    pageSizeOptions?: number[];
};
export declare const Table: (<TData>(p: TableProps<TData> & {
    ref?: import("react").ForwardedRef<TableType<TData>> | undefined;
}) => JSX.Element) & {
    displayName: string;
};
