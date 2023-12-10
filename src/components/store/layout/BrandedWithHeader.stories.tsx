import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BrandedWithHeader } from './BrandedWithHeader';

const meta = {
  component: BrandedWithHeader,
  title: 'Components/Store/BrandedWithHeader',
  args: {
    type: 'error',
    children: 'This is me showing an alert',
    onClose: fn(),
  },
} satisfies Meta<typeof BrandedWithHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground = {} satisfies Story;
