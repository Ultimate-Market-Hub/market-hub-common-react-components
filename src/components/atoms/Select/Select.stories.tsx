import { type Meta, type StoryObj } from '@storybook/react';
import { Select } from './Select';
import { fn } from '@storybook/test';

const meta = {
  component: Select,
  title: 'components/atoms/Select',
  args: {
    onChange: fn(),
    fullWidth: false,
  },
} satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithDisabled = {
  args: {
    options: [
      { name: 'test', value: 'checked', disabled: false },
      { name: 'test 2', value: 'checked 2', disabled: true },
    ],
    ariaLabel: 'with-disabled',
  },
} satisfies Story;

export const WithFullWidth = {
  args: {
    options: [
      { name: 'test', value: 'checked', disabled: false },
      { name: 'test 2', value: 'checked 2', disabled: false },
    ],
    placeholder: 'Select Mew!!',
    ariaLabel: 'with-disabled',
    fullWidth: true,
  },
} satisfies Story;
