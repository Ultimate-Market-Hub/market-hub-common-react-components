import type { Header, Row, Table } from '@tanstack/react-table';
export declare const headerToggleSortMock: import("@vitest/spy").Mock<any, any>;
export declare const buildHeader: ({ name, headerId, }: {
    name: string;
    headerId: string;
}) => Header<never, unknown>;
export declare const buildRow: <T>({ name }: {
    name: string;
}) => Row<T>;
export declare const getStateMock: import("@vitest/spy").Mock<any, any>;
export declare const getCanPreviousPageMock: import("@vitest/spy").Mock<any, any>;
export declare const getCanNextPageMock: import("@vitest/spy").Mock<any, any>;
export declare const setPageSizeMock: import("@vitest/spy").Mock<any, any>;
export declare const nextPageMock: import("@vitest/spy").Mock<any, any>;
export declare const previousPageMock: import("@vitest/spy").Mock<any, any>;
export declare const setPageIndexMock: import("@vitest/spy").Mock<any, any>;
export declare const buildTableData: ({ rows, }: {
    rows: Row<unknown>[];
}) => Table<never>;
