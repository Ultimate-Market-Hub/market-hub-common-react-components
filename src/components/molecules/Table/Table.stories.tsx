import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Table } from './Table';
import { columns } from './story.column.definitions';
import type { ColumnDef } from '@tanstack/react-table';

export default {
  title: 'Components/Molecules/Table',
  component: Table,
  argTypes: {},
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});

const testTableData = [
  {
    id: '1',
    name: 'Test data',
    __typename: 'Shop',
    description: 'Testing the shop table data',
    published: true,
  },
  {
    id: '2',
    name: 'Test data',
    __typename: 'Shop',
    description: 'Testing the shop table data',
    published: true,
  },
  {
    id: '3',
    name: 'Test data',
    __typename: 'Shop',
    description: 'Testing the shop table data',
    published: true,
  },
  {
    id: '4',
    name: 'Test data',
    __typename: 'Shop',
    description: 'Testing the shop table data',
    published: false,
  },
  {
    id: '5',
    name: 'Test data',
    __typename: 'Shop',
    description: 'Testing the shop table data',
    published: true,
  },
  {
    id: '6',
    name: 'Test data',
    __typename: 'Shop',
    description: 'Testing the shop table data',
    published: false,
  },
  {
    id: '7',
    name: 'Test data',
    __typename: 'Shop',
    description: 'Testing the shop table data',
    published: true,
  },
];

Default.args = {
  data: [...testTableData],
  isLoading: false,
  columns: columns({
    removeHandler: () => null,
    withActions: true,
    withRemoveActions: true,
    withCheckbox: true,
  }) as ColumnDef<unknown, any>[],
  pageSizeOptions: [5, 10, 15],
  sorting: [{ id: 'id', desc: true }],
};
