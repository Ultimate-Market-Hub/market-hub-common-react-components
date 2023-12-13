import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import type { ColumnDef } from '@tanstack/react-table';

import { columns } from './column.definitions.story';
import { Table } from './Table';

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

export default {
  title: 'components/molecules/Table',
  component: Table,
  argTypes: {},
  args: {
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
  },
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;
const Template2: StoryFn<typeof Table> = (args) => (
  <Table {...args} hasPagination />
);
const Template3: StoryFn<typeof Table> = (args) => (
  <Table {...args} hasPagination canFilter />
);
const Template4: StoryFn<typeof Table> = (args) => (
  <Table {...args} hasPagination canFilter isLoading />
);

export const Default = Template.bind({});
export const WithPagination = Template2.bind({});
export const WithFiltering = Template3.bind({});
export const WithLoading = Template4.bind({});
