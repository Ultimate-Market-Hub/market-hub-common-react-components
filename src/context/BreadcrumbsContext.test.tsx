import { useContext } from 'react';
import { act, renderHook } from '@testing-library/react';

import { type MenuItemWithoutChildrenSinglePermission } from '~/types/MenuItem';

import { BreadcrumbsContext, BreadcrumbsProvider } from './BreadcrumbsContext';

describe('BreadcrumbsContext', () => {
  test('renders and successfully updates breadcrumbs', () => {
    const mockBreadcrumbs: MenuItemWithoutChildrenSinglePermission[] = [
      { name: 'Home', href: '/' },
      { name: 'Child', href: 'child-route' },
    ];

    const { result } = renderHook(() => useContext(BreadcrumbsContext), {
      wrapper: BreadcrumbsProvider,
    });

    expect(result.current.breadcrumbs).toStrictEqual([]);

    act(() => result.current.updateBreadcrumbs(mockBreadcrumbs));

    expect(result.current.breadcrumbs).toStrictEqual(mockBreadcrumbs);
  });
});
