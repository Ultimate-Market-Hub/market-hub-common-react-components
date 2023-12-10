import React from 'react';
import { render } from '@testing-library/react';

import { TableBase } from '~/components/molecules/Table/TableBase';
import {
  buildRow,
  buildTableData,
} from '~/components/molecules/Table/test/StubTableWithMocks';

vi.mock('@tanstack/react-table', () => ({
  flexRender: vi.fn().mockImplementation((header) => header),
}));

describe('<TableBase />', () => {
  it('should display the headers', async () => {
    const { findByRole } = render(
      <TableBase table={buildTableData({ rows: [] })} />
    );

    findByRole('columnheader', { name: /headerGroup1Column1/ });
    findByRole('columnheader', { name: /headerGroup2Column1/ });
    findByRole('cell', { name: /There is no data to show/ });
    expect(await findByRole('table')).not.toHaveAttribute('aria-busy');
  });

  //TODO: multi column, multi row test
  it('should display the data', () => {
    const { findByRole } = render(
      <TableBase
        table={buildTableData({ rows: [buildRow({ name: 'someData' })] })}
      />
    );

    findByRole('cell', { name: /someData/ });
  });

  it('should display a loading state', async () => {
    const { findByRole } = render(
      <TableBase table={buildTableData({ rows: [] })} isLoading={true} />
    );

    expect(await findByRole('table')).toHaveAttribute('aria-busy');
  });
});
