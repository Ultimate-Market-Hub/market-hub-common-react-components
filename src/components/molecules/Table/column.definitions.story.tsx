import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { createColumnHelper, type ColumnHelper } from '@tanstack/react-table';

import { Button } from '~/components/atoms/Button';
import { ColumnCheckbox } from '~/components/molecules/Table/ColumnCheckbox';

const columnHelper: ColumnHelper<any> = createColumnHelper<any>();

type ColumnsSetup = {
  withCheckbox: boolean;
  withActions: boolean;
  withRemoveActions: boolean;
  removeHandler: (rowId: number) => void;
};

export const columns = ({
  removeHandler,
  withCheckbox = true,
  withActions = true,
  withRemoveActions = false,
}: ColumnsSetup) => {
  return [
    ...(withCheckbox ? columnsWithCheckbox : []),

    columnHelper.accessor('id', {
      header: () => <p>ID</p>,
    }),

    columnHelper.accessor('name', {
      header: () => <p>Name</p>,
    }),

    columnHelper.accessor('__typename', {
      header: () => <p>Typename</p>,
    }),

    columnHelper.accessor('description', {
      header: () => <p>Description</p>,
    }),

    columnHelper.accessor('published', {
      header: () => <p>Published</p>,
      cell: (props) => (
        <CheckCircleIcon
          width={24}
          height={24}
          fill={Boolean(props.getValue()) ? 'green' : 'red'}
        />
      ),
    }),

    ...(withActions
      ? [
          columnHelper.display({
            id: 'action',
            header: () => <p>Action</p>,
            cell: (props) => (
              <Button
                variant="text"
                size="md"
                className="font-thin"
                rightIcon="ChevronRightIcon"
                onClick={() => removeHandler(props.row.index)}
              >
                Details
              </Button>
            ),
          }),
        ]
      : []),

    ...(withRemoveActions && removeHandler
      ? [
          columnHelper.display({
            id: 'remove',
            header: () => <p>Remove</p>,
            cell: (props) => (
              <Button
                variant="text-error"
                className="font-thin"
                size="md"
                leftIcon="XCircleIcon"
                onClick={() => removeHandler(props.row.index)}
              >
                Remove
              </Button>
            ),
          }),
        ]
      : []),
  ];
};

export const columnsWithCheckbox = [
  columnHelper.display({
    id: 'select',
    header: ({ table }) => (
      <ColumnCheckbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <ColumnCheckbox
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  }),
];
