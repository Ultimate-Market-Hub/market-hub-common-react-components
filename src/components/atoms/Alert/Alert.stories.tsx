import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Alert } from './Alert';

const meta = {
  component: Alert,
  title: 'Components/Atoms/Alert',
  args: {
    type: 'error',
    children: 'This is me showing an alert',
    onClose: fn(),
  },
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground = {} satisfies Story;
