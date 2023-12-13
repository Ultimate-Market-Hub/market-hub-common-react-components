import type { PaginationState } from '@tanstack/react-table';
export declare const useLocationTablePaginationState: () => {
    onPaginationChange: (newPaginationOrUpdater: PaginationState | ((state: PaginationState) => PaginationState)) => void;
    pagination: {
        pageIndex: number;
        pageSize: number;
    };
};
