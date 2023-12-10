import { act, renderHook } from '@testing-library/react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Mock } from 'vitest';

import { useLocationTablePaginationState } from './useLocationTablePaginationState';

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(),
  useNavigate: vi.fn(),
}));

describe('usePersistedTablePagination', () => {
  let mockNavigate: any;

  beforeEach(() => {
    mockNavigate = vi.fn();

    (useLocation as Mock).mockReturnValue({
      pathname: '/test-path',
      search: '?query=test',
      hash: '#test-hash',
      state: {},
    });

    (useNavigate as Mock).mockReturnValue(mockNavigate);
  });

  it('initializes pagination with route state', () => {
    (useLocation as Mock).mockReturnValue({
      pathname: '/test-path',
      search: '?query=test',
      hash: '#test-hash',
      state: { pageIndex: 2, pageSize: 20 },
    });
    const { result } = renderHook(() => useLocationTablePaginationState());

    expect(result.current.pagination).toEqual({ pageIndex: 2, pageSize: 20 });
  });

  it('initializes pagination with default values if route state is missing', () => {
    const { result } = renderHook(() => useLocationTablePaginationState());

    expect(result.current.pagination).toEqual({ pageIndex: 0, pageSize: 10 });
  });

  it('updates route state when pageIndex changes', () => {
    const { result } = renderHook(() => useLocationTablePaginationState());

    act(() => {
      result.current.onPaginationChange({ pageIndex: 3, pageSize: 10 });
    });

    expect(mockNavigate).toHaveBeenCalledWith(
      '/test-path?query=test#test-hash',
      {
        state: { pageIndex: 3, pageSize: 10 },
        replace: true,
      }
    );
  });

  it('updates route state when pageSize changes', () => {
    const { result } = renderHook(() => useLocationTablePaginationState());

    act(() => {
      result.current.onPaginationChange({ pageIndex: 0, pageSize: 30 });
    });

    expect(mockNavigate).toHaveBeenCalledWith(
      '/test-path?query=test#test-hash',
      {
        state: { pageIndex: 0, pageSize: 30 },
        replace: true,
      }
    );
  });

  it('does not update route state if new pagination values are the same as current state', () => {
    (useLocation as Mock).mockReturnValue({
      pathname: '/test-path',
      search: '?query=test',
      hash: '#test-hash',
      state: { pageIndex: 2, pageSize: 20 },
    });
    const { result } = renderHook(() => useLocationTablePaginationState());

    act(() => {
      result.current.onPaginationChange({ pageIndex: 2, pageSize: 20 });
    });

    // Expect navigate not to have been called
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('does not trigger useEffect to update route state when pagination values remain unchanged', () => {
    (useLocation as Mock).mockReturnValue({
      pathname: '/test-path',
      search: '?query=test',
      hash: '#test-hash',
      state: { pageIndex: 2, pageSize: 20 },
    });

    const { result } = renderHook(() => useLocationTablePaginationState());

    // Set the internal state to the same values as the route state.
    act(() => {
      result.current.onPaginationChange({ pageIndex: 2, pageSize: 20 });
    });

    // Expect navigate not to have been called due to unchanged values.
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
