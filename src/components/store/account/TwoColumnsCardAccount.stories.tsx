import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import TwoColumnsCardAccount from './TwoColumnsCardAccount';

export default {
  title: 'Components/Store/TwoColumnsCardAccount',
  component: TwoColumnsCardAccount,
  argTypes: {},
} as Meta<typeof TwoColumnsCardAccount>;

const Template: StoryFn<typeof TwoColumnsCardAccount> = () => (
  <TwoColumnsCardAccount />
);

export const Default = Template.bind({});

Default.args = {};
