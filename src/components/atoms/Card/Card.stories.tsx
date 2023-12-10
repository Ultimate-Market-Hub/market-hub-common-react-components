import { type Meta, type StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  component: Card,
  title: 'Components/Atoms/Card',
  args: {
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
