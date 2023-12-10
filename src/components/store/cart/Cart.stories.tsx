import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import PolicyGrid from './PolicyGrid';
import PolicyGridExtendedSummary from './PolicyGridExtendedSummary';
import RelatedProducts from './RelatedProducts';

export default {
  title: 'Components/Store/Cart',
  component: PolicyGrid,
  argTypes: {},
} as Meta<typeof PolicyGrid>;

const Template: StoryFn<typeof PolicyGrid> = () => <PolicyGrid />;

const Template2: StoryFn<typeof PolicyGrid> = () => (
  <PolicyGridExtendedSummary />
);
const Template3: StoryFn<typeof PolicyGrid> = () => <RelatedProducts />;

export const PolicyGridDefault = Template.bind({});
export const ExtendedSummary = Template2.bind({});
export const Related = Template3.bind({});
