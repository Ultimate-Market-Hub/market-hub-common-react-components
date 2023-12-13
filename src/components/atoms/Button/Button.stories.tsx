import { StoryObj, type Meta } from '@storybook/react';

import { Button } from './Button';

const meta = {
  component: Button,
  title: 'components/atoms/Button',
  args: {
    children: 'Cock sucker!!!',
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton = {} satisfies Story;
