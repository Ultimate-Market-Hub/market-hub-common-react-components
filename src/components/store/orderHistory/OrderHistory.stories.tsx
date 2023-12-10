import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import InvoiceList from './InvoiceList';
import InvoiceListWithQuickActions from './InvoiceListQuickActions';
import InvoicePanels from './InvoicePanels';
import InvoiceTable from './InvoiceTable';

export default {
  title: 'Components/Store/Order History',
  component: InvoiceList,
  argTypes: {},
} as Meta<typeof InvoiceList>;

const Template: StoryFn<typeof InvoiceList> = () => <InvoiceList />;

const Template2: StoryFn<typeof InvoiceListWithQuickActions> = () => (
  <InvoiceListWithQuickActions />
);

const Template3: StoryFn<typeof InvoicePanels> = () => <InvoicePanels />;

const Template4: StoryFn<typeof InvoicePanels> = () => <InvoiceTable />;

export const List = Template.bind({});
export const ListQuickActions = Template2.bind({});
export const Panels = Template3.bind({});
export const Table = Template4.bind({});
