import { useCallback, useMemo } from 'react';
import type { PaginationState } from '@tanstack/react-table';
import { useLocation, useNavigate } from 'react-router-dom';

const DEFAULT_PAGE_INDEX = 0;
const DEFAULT_PAGE_SIZE = 10;

// Controlled table pagination. Table pagination state persisted in route state.
export const useLocationTablePaginationState = () => {
  const { pathname, search, hash, state } = useLocation();
  const navigate = useNavigate();

  const pageIndex = Number(state?.pageIndex) || DEFAULT_PAGE_INDEX;
  const pageSize = Number(state?.pageSize) || DEFAULT_PAGE_SIZE;

  const onPaginationChange = useCallback(
    (
      newPaginationOrUpdater:
        | PaginationState
        | ((state: PaginationState) => PaginationState)
    ) => {
      // Check if newPaginationOrUpdater is a function (functional updater) and execute it with the current state
      const newPagination =
        typeof newPaginationOrUpdater === 'function'
          ? newPaginationOrUpdater({
              pageIndex: state?.pageIndex || DEFAULT_PAGE_INDEX,
              pageSize: state?.pageSize || DEFAULT_PAGE_SIZE,
            })
          : newPaginationOrUpdater;

      const { pageIndex = DEFAULT_PAGE_INDEX, pageSize = DEFAULT_PAGE_SIZE } =
        newPagination;

      // Only update the route if the new values are different from the current route state
      if (pageIndex !== state?.pageIndex || pageSize !== state?.pageSize) {
        navigate(pathname + search + hash, {
          state: {
            ...state,
            pageIndex,
            pageSize,
          },
          replace: true,
        });
      }
    },
    [navigate, pathname, search, hash, state]
  );

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  return {
    onPaginationChange,
    pagination,
  };
};
