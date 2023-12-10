import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Account from './Account';

export default {
  title: 'Components/Store/Account',
  component: Account,
  argTypes: {},
} as Meta<typeof Account>;

const Template: StoryFn<typeof Account> = () => <Account />;

export const Default = Template.bind({});

Default.args = {};
