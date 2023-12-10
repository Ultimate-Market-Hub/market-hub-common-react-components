import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import SimpleFullOrderDetails from './SimpleFullOrderDetails';
import WithProgress from './WithProgress';
import WithProgressLargeImages from './WithProgressLargeImages';

export default {
  title: 'Components/Store/Order Details',
  component: SimpleFullOrderDetails,
  argTypes: {},
} as Meta<typeof SimpleFullOrderDetails>;

const Template: StoryFn<typeof SimpleFullOrderDetails> = () => (
  <SimpleFullOrderDetails />
);

const Template2: StoryFn<typeof WithProgress> = () => <WithProgress />;

const Template3: StoryFn<typeof WithProgressLargeImages> = () => (
  <WithProgressLargeImages />
);

export const Simple = Template.bind({});
export const Progress = Template2.bind({});
export const ProgressLargeImage = Template3.bind({});
