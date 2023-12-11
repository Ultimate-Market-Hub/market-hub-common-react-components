import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'components/atoms/Button',
  component: Button,
  argTypes: {},
  args: {
    children: 'Test Button',
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
