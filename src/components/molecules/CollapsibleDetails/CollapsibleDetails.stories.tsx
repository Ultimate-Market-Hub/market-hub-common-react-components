import { type Meta, type StoryObj } from '@storybook/react';
import { CollapsibleDetails } from './CollapsibleDetails';

const meta = {
  component: CollapsibleDetails,
  args: {
    heading: 'Details Heading',
    children: <p>Details Summary</p>,
  },
} satisfies Meta<typeof CollapsibleDetails>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground = {} satisfies Story;

export const DefaultOpen = {
  args: {
    defaultIsOpen: true,
  },
} satisfies Story;
