import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import ExpandableProductFilters from './ExpandableProductFilters';
import ExpandableSidebarFilters from './ExpandableSidebarFilters';
import SidebarFilters from './SidebarFilters';
import WithCenteredTextAndDropdowns from './WithCenteredTextAndDropdowns';
import WithDropdownProductFilters from './WithDropdownProductFilters';

export default {
  title: 'Components/Store/CategoryFilters',
  component: ExpandableProductFilters,
  argTypes: {},
} as Meta<typeof ExpandableProductFilters>;

const Template: StoryFn<typeof ExpandableProductFilters> = () => (
  <ExpandableProductFilters />
);

const Template2: StoryFn<typeof ExpandableSidebarFilters> = () => (
  <ExpandableSidebarFilters />
);
const Template3: StoryFn<typeof SidebarFilters> = () => <SidebarFilters />;
const Template4: StoryFn<typeof WithCenteredTextAndDropdowns> = () => (
  <WithCenteredTextAndDropdowns />
);
const Template5: StoryFn<typeof WithDropdownProductFilters> = () => (
  <WithDropdownProductFilters />
);

export const ExpandableProduct = Template.bind({});
export const ExpandableSidebar = Template2.bind({});
export const Sidebar = Template3.bind({});
export const CenteredTextAndDropdowns = Template4.bind({});
export const DropdownProductFilters = Template5.bind({});
