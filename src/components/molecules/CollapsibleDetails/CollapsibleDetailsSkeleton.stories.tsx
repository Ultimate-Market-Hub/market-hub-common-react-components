import { type Meta, type StoryObj } from '@storybook/react';
import { CollapsibleDetailsSkeleton } from './CollapsibleDetailsSkeleton';

const meta = {
  component: CollapsibleDetailsSkeleton,
  args: {
    title: 'This is a heading',
  },
} satisfies Meta<typeof CollapsibleDetailsSkeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground = {} satisfies Story;
