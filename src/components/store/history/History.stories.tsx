import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import InvoiceList from './InvoiceList';
import InvoiceListWithQuickActions from './InvoiceListWithQuickActions';
import InvoicePanels from './InvoicePanels';
import InvoiceTables from './InvoiceTables';
import Simple from './Simple';

export default {
  title: 'Components/Store/History',
  component: InvoiceList,
  argTypes: {},
} as Meta<typeof InvoiceList>;

const Template: StoryFn<typeof InvoiceList> = () => <InvoiceList />;

const Template2: StoryFn<typeof InvoiceListWithQuickActions> = () => (
  <InvoiceListWithQuickActions />
);

const Template3: StoryFn<typeof InvoicePanels> = () => <InvoicePanels />;

const Template4: StoryFn<typeof Simple> = () => <Simple />;

const Template5: StoryFn<typeof InvoiceTables> = () => <InvoiceTables />;

export const ListInvoice = Template.bind({});
export const WithQuickActions = Template2.bind({});
export const Panels = Template3.bind({});
export const SimpleStory = Template4.bind({});
export const Tables = Template5.bind({});
