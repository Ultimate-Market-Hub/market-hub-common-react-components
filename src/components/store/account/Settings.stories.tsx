import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Settings from './Settings';

export default {
  title: 'Components/Store/Settings',
  component: Settings,
  argTypes: {},
} as Meta<typeof Settings>;

const Template: StoryFn<typeof Settings> = () => <Settings />;

export const Default = Template.bind({});

Default.args = {};
