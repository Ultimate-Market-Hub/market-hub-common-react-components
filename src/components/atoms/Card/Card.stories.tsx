import { type Meta, type StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
  component: Card,
  title: 'components/atoms/Card',
  args: {
    className: 'p-4',
    children: (
      <div>
        <h1>Header</h1>
        <p>Testing the content</p>
      </div>
    ),
  },
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground = {} satisfies Story;
