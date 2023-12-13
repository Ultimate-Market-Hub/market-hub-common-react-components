import { type ReactElement } from 'react';
import { type Row, type Table } from '@tanstack/react-table';
export interface TableScaffoldingProps<TData> {
    table: Table<TData>;
    isLoading?: boolean;
    tablePrefixElement?: ReactElement;
    hasPagination?: boolean;
    renderSubComponent?: (props: {
        row: Row<TData>;
    }) => React.ReactElement;
}
export declare const TableBase: <TData>({ table, isLoading, renderSubComponent, }: TableScaffoldingProps<TData>) => import("react").JSX.Element;
